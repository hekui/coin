import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'

// import coinDic from './coinDic'
import coinvcCoinName from './coinvc_coinNme'
// import myTradeList from './myTradeList'

Vue.use(Vuex)

const SET = 'SET'
const SET_CHOSENCOINLIST = 'SET_CHOSENCOINLIST'
const SET_CHOSENUNITCOIN = 'SET_CHOSENUNITCOIN'
const GET_JUBI_COIN = 'GET_JUBI_COIN'
const SET_JUBI_COIN = 'SET_JUBI_COIN'
const GET_JUBI_TRENDS = 'GET_JUBI_TRENDS'
const SET_JUBI_TRENDS = 'SET_JUBI_TRENDS'
const GET_BTC9_COIN = 'GET_BTC9_COIN'
const SET_BTC9_COIN = 'SET_BTC9_COIN'
const GET_OKCOIN_COIN = 'GET_OKCOIN_COIN'
const SET_OKCOIN_COIN = 'SET_OKCOIN_COIN'
const GET_BTC114_MARKET = 'GET_BTC114_MARKET'
const SET_BTC114_MARKET = 'SET_BTC114_MARKET'
const SET_CONINCNNAME = 'SET_CONINCNNAME'
const GET_COINVC_MARKET = 'GET_COINVC_MARKET'
const SET_COINVC_MARKET = 'SET_COINVC_MARKET'

//
const GET_USER_TRADE_LIST = 'GET_USER_TRADE_LIST'
const SET_USER_TRADE_LIST = 'SET_USER_TRADE_LIST'

// coin
const GET_COIN_LIST = 'GET_COIN_LIST'

function getCoin (dataSource, coinEnName) {
  let result = {}
  if (dataSource === undefined) return result
  dataSource.forEach(item => {
    if (item.enName.toLowerCase() === coinEnName.toLowerCase()) {
      result = item
    }
  })
  return result
}

export default new Vuex.Store({
  state: {
    coinCnName: {},
    coinDic: [],
    chosenCoinList: [],
    myTradeList: [],
    countHoldGain: '-', // 当前持有币总盈利
    marketName: {
      jubi: '聚币网',
      okcoin: 'OKCOIN'
    },
    chosenUnitCoin: 'btc',
    marketData: {
      btc: {
        jubi: null,
        okcoin: null
      },
      eth: {
        jubi: null,
        okcoin: null
      },
      ltc: {
        jubi: null,
        okcoin: null
      }
    },
    marketBTC: [],
    marketETH: [],
    marketLTC: [],
    data_jubi_trends: null,
    jubiMarket: [],
    btc9Market: [],
    okcoinMarket: [],
    // btc114
    btc114Market: {
      BTC: {
        min: {
          USD: 10000000,
          CNY: 10000000
        },
        max: {
          USD: 0,
          CNY: 0
        },
        list: []
      },
      LTC: {
        min: {
          USD: 10000000,
          CNY: 10000000
        },
        max: {
          USD: 0,
          CNY: 0
        },
        list: []
      }
    },
    // coinvc market
    coinvcMarket: [],
    // user
    dialogTradeListVisible: false,
    dialogCoinEditVisible: false
  },
  getters: {
    getMarket: state => {
      let result = {}
      for (var key in state.marketData) {
        result[key] = []
        for (var k in state.marketData[key]) {
          let item = state.marketData[key][k]
          item && result[key].push(item)
        }
      }
      return result
    },
    filterData_JUBI: (state, getters) => {
      if (state.chosenCoinList.length === 0) {
        return state.jubiMarket
      } else {
        let newArray = []
        state.jubiMarket.forEach(item => {
          if (state.chosenCoinList.includes(item.enName)) {
            newArray.push(item)
          }
        })
        return newArray
      }
    },
    getUnitCoin: function (state) {
      let results = []
      // 聚币
      state.jubiMarket.forEach(item => {
        if (item.enName === state.chosenUnitCoin) {
          results.push(Object.assign({
            p_name: '聚币网',
            p_enName: 'jubi',
            p_home: 'https://www.jubi.com'
          }, item))
        }
      })
      // btc9
      state.btc9Market.forEach(item => {
        if (item.enName.toLowerCase() === state.chosenUnitCoin) {
          results.push(Object.assign({
            p_name: '币久网',
            p_enName: 'btc9',
            p_home: 'https://www.btc9.com'
          }, item))
        }
      })
      // coinvc
      state.coinvcMarket.forEach(item => {
        if (item.enName.toLowerCase() === state.chosenUnitCoin) {
          results.push(Object.assign({
            p_name: 'Coin VC',
            p_enName: 'coinvc',
            p_home: 'https://www.coinvc.com'
          }, item))
        }
      })
      return results
    },
    // 持有币
    tradeList: function (state) {
      let countGain = 0
      let result = state.myTradeList.map(item => {
        let coin = getCoin(state[item.market_enName + 'Market'], item.enName)
        let curWorth = coin['price'] * item.count
        countGain += curWorth - (item.buy_price * item.count)
        return Object.assign({
          last: coin['price'],
          curWorth: curWorth
        }, item)
      })
      state.countHoldGain = countGain
      return result
    }
  },
  mutations: {
    [SET] (state, object) {
      state[object.target] = object.data
    },
    [SET_CHOSENUNITCOIN] (state, name) {
      state.chosenUnitCoin = name
    },
    [SET_CONINCNNAME] (state) {
      let coinCnName = {}
      state.coinDic.forEach(item => {
        coinCnName[item.enName] = item.name
      })
      state.coinCnName = coinCnName
    },
    [SET_CHOSENCOINLIST] (state, data) {
      state.chosenCoinList = data
    },
    [SET_JUBI_TRENDS] (state, data) {
      state.data_jubi_trends = data
    },
    [SET_BTC114_MARKET] (state, data) {
      let result = {}
      for (var key in data) {
        result[key] = {
          min: {
            USD: 10000000,
            CNY: 10000000
          },
          max: {
            USD: 0,
            CNY: 0
          },
          list: []
        }
        result[key]['list'] = data[key].map(item => {
          item = JSON.parse(item)
          if (item.last > 0 && item.last < parseFloat(result[key]['min'][item.m])) {
            result[key]['min'][item.m] = parseFloat(item.last)
          }
          if (parseFloat(item.last) > result[key]['max'][item.m]) {
            result[key]['max'][item.m] = parseFloat(item.last)
          }
          return item
        })
      }
      state.btc114Market = result
    },
    [SET_JUBI_COIN] (state, data) {
      let newArray = []
      let coinDic = []
      let trends = state.data_jubi_trends
      for (var key in data) {
        if (key === 'bcc') continue
        let val = data[key]
        let rate = 0
        if (trends[key]['yprice'] > 0 && val[1] > 0) {
          rate = (parseFloat(val[1]) - parseFloat(trends[key]['yprice'])) * 100 / parseFloat(trends[key]['yprice'])
        }
        // console.log(key + ' rate:', rate)
        rate = parseFloat(rate.toFixed(2))
        let obj = {
          name: val[0],
          enName: key,
          price: val[1], // 最新成交价
          count: val[6],  // 成交量
          priceCount: val[7], // 成交额
          rate: rate // 日涨跌
        }
        newArray.push(obj)
        coinDic.push({
          'name': val[0],
          'enName': key,
          'home': ''
        })
        // 数据放入行情表
        let marketData = Object.assign({
          p_name: state.marketName['jubi'],
          p_enName: 'jubi'
        }, obj)
        if (key === 'btc') {
          state.marketData.btc.jubi = marketData
        } else if (key === 'eth') {
          state.marketData.eth.jubi = marketData
        } else if (key === 'ltc') {
          state.marketData.ltc.jubi = marketData
        }
      }
      state.jubiMarket = newArray
      state.coinDic = coinDic
    },
    [SET_BTC9_COIN] (state, data) {
      let newArray = data.slice(0, 14)
      state.btc9Market = newArray.map(item => {
        let obj = {
          name: item.currency_name,
          enName: item.currency_mark,
          price: item.new_price ? item.new_price : 0,
          count: item.H24_done_num ? item.H24_done_num : 0,
          priceCount: item.H24_done_num ? item.H24_done_num : 0,
          rate: item.H24_change ? parseFloat(item.H24_change) : 0
        }
        return obj
      })
    },
    [SET_OKCOIN_COIN] (state, data) {
      state.okcoinMarket = data.map(item => {
        let obj = {
          name: item.name,
          enName: item.enName,
          price: item.last,
          count: item.vol,
          highest: item.high,
          lowest: item.low,
          priceCount: '-',
          rate: '-'
        }
        // 数据放入行情表
        let marketData = Object.assign({
          p_name: state.marketName['okcoin'],
          p_enName: 'okcoin'
        }, obj)
        if (item.enName === 'btc') {
          state.marketData.btc.okcoin = marketData
        } else if (item.enName === 'eth') {
          state.marketData.eth.okcoin = marketData
        } else if (item.enName === 'ltc') {
          state.marketData.ltc.okcoin = marketData
        }
        return obj
      })
    },
    // coinvc
    [SET_COINVC_MARKET] (state, data) {
      let results = []
      for (var key in data) {
        let array = key.split('_')
        if (array[0] !== 'CNY') continue
        let enname = array[1]
        let obj = {
          name: coinvcCoinName[enname].chineseName,
          enName: enname,
          price: data[key]['last'], // 最新成交价
          count: data[key]['vol'],  // 成交量
          priceCount: data[key]['baseVol'], // 成交额
          rate: data[key]['change'] // 日涨跌
        }
        results.push(obj)
      }
      state.coinvcMarket = results
    },
    [SET_USER_TRADE_LIST] (state, data) {
      state.myTradeList = data
    }
  },
  actions: {
    // 聚币网
    [GET_JUBI_TRENDS] ({commit}, params) {
      return api.get('/api/jubi/trends').then(res => {
        commit('SET_JUBI_TRENDS', res)
      })
    },
    [GET_JUBI_COIN] ({commit}, params) {
      // /api/jubi/allcoin
      // www.jubi.com/coin/allcoin
      return api.get('/api/jubi/allcoin').then(res => {
        commit('SET_JUBI_COIN', res)
        commit('SET_CONINCNNAME')
      })
    },
    // 币久网
    [GET_BTC9_COIN] ({commit}, params) {
      return api.get('/api/btc9/allicon').then(res => {
        commit('SET_BTC9_COIN', res)
      })
    },
    // okcoin
    [GET_OKCOIN_COIN] ({commit}, params) {
      return api.get('/api/okcoin/allicon').then(res => {
        commit('SET_OKCOIN_COIN', res)
      })
    },
    // BTC114
    [GET_BTC114_MARKET] ({commit}, params) {
      return api.get('/api/btc114/market').then(res => {
        commit('SET_BTC114_MARKET', res)
      })
    },
    // coinvc
    [GET_COINVC_MARKET] ({commit}, params) {
      return api.get('/api/coinvc/market').then(res => {
        commit('SET_COINVC_MARKET', res)
      })
    },
    // tradeList
    [GET_USER_TRADE_LIST] ({commit}, params) {
      return api.get('/api/user/trade_list').then(res => {
        console.log('/api/user/trade_list:')
        console.log(res)
        commit('SET_USER_TRADE_LIST', res.data)
      })
    },
    // coinList
    [GET_COIN_LIST] ({commit}, params) {
      return api.get('/api/coins').then(res => {
        console.log('/api/coins:')
        console.log(res)
      })
    }
  }
})
