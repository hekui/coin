var request = require('request')
var conn = require('../api/conn')
var log = require('./logger')
var conn = require('./conn_ticker')

let dataTableName = 'ticker_yuanbao'

function ticker(){
  let startTime = new Date()
  request({
    url: 'https://www.yuanbao.com/coins/markets',
    headers: {
      'Accept-Language': 'zh-CN,zh',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.101 Safari/537.36'
    },
    json: true,
    timeout: 4900
  }, function(error, response, body){
    let endTime = new Date()
    // console.log('coins:', global.coins)
    console.log('['+ endTime +']request cost '+ (endTime - startTime) +'ms');
    if (error) {
      console.log('error:', error)
      log({
        title: '[ticker]请求错误',
        market: '元宝网(yuanbao.com)',
        error: error.toString(),
        at_time: startTime
      })
    } else {
      // console.log('body:', body)
      if (body.code === 0) {
        let coins = body['data']['cny']
        let sqlValues = []
        coins.forEach(item => {
          let alias = item['coin_from']
          let coinId = global.coins[alias]['id']

          sqlValues.push('('+ coinId +', '+ item['current'] +', '+ item['preprice'] +', '+ item['count'] +', '+ item['sum'] +', '+ item['24_ups'] +', '+ item['7_ups'] +', '+ item['total_value'] +')')
        })
        // insert table
        let sql = 'insert into '+ dataTableName +' (coin_id, cur_price, pre_price, trade_count, trade_sum, 24_ups, 7_ups, total_worth) values '+ sqlValues.join(', ');
        conn.query(sql)
      }
    }
  })
}

module.exports = ticker
