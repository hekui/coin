var mysql = require('mysql')
var request = require('request')
var conn = require('../api/conn')

// jubi
function jubi(){
  return new Promise((resolve, reject) => {
    console.log('requst jubi ...')
    request({
      url: 'https://www.jubi.com/coin/allcoin',
      json: true
    }, (error, response, body) => {
      console.log('response jubi');
      if(error){
        throw error
        resolve(error)
      }else{
        let coins = body, results = []
        for(let key in coins){
          results.push({
            alias: key.toString().toLowerCase(),
            name: coins[key][0],
            enName: coins[key][0]
          })
        }
        insertTable(results).then(res => {
          console.log('jubi end');
          resolve()
        })
      }
    })
  })
}

// btc9
function btc9(data){
  return new Promise((resolve, reject) => {
    console.log('request btc9 ...');
    request({
      url: 'https://www.btc9.com/Index/CurrencyList.html',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.101 Safari/537.36'
      },
      json: true
    }, (error, response, body) => {
      if(error){
        throw error
        reject(error)
      }else{
        console.log('response btc9');
        let coins = body, results = []
        if(coins){
          coins.forEach(coin => {
            coin.currency_mark && results.push({
              alias: coin.currency_mark.toString().toLowerCase(),
              name: coin.currency_name,
              enName: coin.currency_name
            })
          })
        }
        // console.log(results);
        insertTable(results).then(res => {
          console.log('btc9 end');
          resolve()
        })
      }
    })
  })
}

// coinvc
// https://api.coinvc.com/api/v2/userInfo
function coinVC(data){
  return new Promise((resolve, reject) => {
    console.log('request coinVC ...');
    request({
      url: 'https://api.coinvc.com/api/v2/userInfo',
      json: true,
      headers: {
        'Accept-Language': 'zh-CN,zh',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.101 Safari/537.36'
      }
    }, (error, response, body) => {
      if(error){
        throw error
        reject(error)
      }else{
        console.log('response coinVC');
        let coins = body.coins, results = []
        if(coins){
          for(let key in coins){
            results.push({
              alias: key.toString().toLowerCase(),
              name: coins[key]['chineseName'],
              enName: coins[key]['englishName']
            })
          }
        }
        insertTable(results).then(res => {
          console.log('coinVC end');
          resolve()
        })
      }
    })
  })
}

// 元宝网
function yuanbao(){
  return new Promise((resolve, reject) => {
    console.log('requst yuanbao ...')
    request({
      url: 'https://www.yuanbao.com/coins/markets',
      json: true,
      headers: {
        'Accept-Language': 'zh-CN,zh',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.101 Safari/537.36'
      }
    }, (error, response, body) => {
      console.log('response jubi');
      if(error){
        throw error
        resolve(error)
      }else{
        let coins = body.data.cny, results = []
        coins.forEach(item => {
          let alias = item['coin_from'].toString().toLowerCase()
          results.push({
            alias: alias,
            name: item['display'],
            enName: alias
          })
        })
        insertTable(results).then(res => {
          console.log('yuanbao end');
          resolve()
        })
      }
    })
  })
}

function insertTable(data){
  console.log('insertTable ...')
  return new Promise((resolve, reject) => {
    let flag = 0
    data.forEach(item => {
      conn.pool("select count(id) as count from coins where alias = '"+ item.alias +"'", (error, result) => {
        if(error){
          throw error
        } else {
          let sql = null
          if(result[0].count === 0){
            sql = "insert into coins (`alias` ,`name`, enName) VALUES ('"+ item.alias +"', '"+ item.name +"', '"+ item.enName +"')"
          }else{
            sql = "update coins set `name`='"+ item.name +"', enName='"+ item.enName +"' where alias = '"+ item.alias +"'"
          }
          conn.pool(sql, (error, result) => {
            if(error){
              throw error
            }else{
              flag ++
              if(flag === data.length){
                resolve()
              }
            }
          })
        }
      })
    })
  })
}

var coins = {
  jubi,
  btc9,
  coinVC,
  yuanbao,
  init: function(){
    jubi().then(res => {
      return  btc9()
    }).then(res => {
      return coinVC()
    }).then(res => {
      return yuanbao()
    }).then(res => {
      console.log('end init');
    })
  }
}

module.exports = coins
