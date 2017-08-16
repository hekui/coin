var express = require('express')
var router = express.Router();
var request = require('request');

var mysql = require('mysql');
var connConfig = {
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'btc'
}

// 路由配置
// tradeList
router.get('/user/trade_list', function(req, res){
  let conn = mysql.createConnection(connConfig);
  let sql = 'select * from v_user_trade_list where status = 1'
  conn.connect();
  let result = conn.query(sql, function (error, results, fields) {
    // console.log('results', results);
    if(error) {
      // throw error;
      res.json({status: 1, msg: '有错误发生', data: results})
    } else {
      res.json({status: 0, data: results})
    }
  });
})
// jubi
router.get('/jubi/trends', function(req, res){
  console.log('request...')
  let startTime = new Date().getTime()
  request('https://www.jubi.com/coin/trends', function(error, response, body){
    console.log('response')
    let endTime = new Date().getTime()
    console.log('error', error);
    // console.log('response', response);
    console.log('cost:'+ (endTime - startTime) +'ms')
    if(!error && response.statusCode === 200){
      res.format({
        'application/json': function(){
          res.send(body);
        }
      })
    } else {
      res.send({
        status: 1
      })
    }
  })
})
router.get('/jubi/allcoin', function(req, res){
  request('https://www.jubi.com/coin/allcoin', function(error, response, body){
    if(!error && response.statusCode === 200){
      res.format({
        'application/json': function(){
          res.send(body);
        }
      })
    }
  })
})
// btc9
router.get('/btc9/allicon', function(req, res){
  request('https://www.btc9.com/Index/CurrencyList.html', function(error, response, body){
    // console.log('error', error);
    // console.log('response', response);
    if(!error && response.statusCode === 200){
      res.format({
        'application/json': function(){
          res.send(body);
        }
      })
    }
  })
})
router.get('/btc114/market', function(req, res){
  request('http://www.btc114.com/api/ticker.js', function(error, response, body){
    if(!error && response.statusCode === 200){
      res.format({
        'application/json': function(){
          res.send(body);
        }
      })
    }
  })
})
// okcoin
router.get('/okcoin/allicon', function(req, res){
  let url = {
    btc: 'https://www.okcoin.cn/api/v1/ticker.do?symbol=btc_cny',
    eth: 'https://www.okcoin.cn/api/v1/ticker.do?symbol=eth_cny',
    ltc: 'https://www.okcoin.cn/api/v1/ticker.do?symbol=ltc_cny'
  }
  let result = {}
  var p1 = new Promise(function (resolve, reject) {
    request(url.btc, function(error, response, body){
      if(!error && response.statusCode === 200){
        resolve(Object.assign({
          name: '比特币',
          enName: 'btc'
        }, JSON.parse(body).ticker));
      }
    })
  });
  var p2 = new Promise(function (resolve, reject) {
    request(url.eth, function(error, response, body){
      if(!error && response.statusCode === 200){
        resolve(Object.assign({
          name: '以太坊',
          enName: 'eth'
        }, JSON.parse(body).ticker));
      }
    })
  });
  var p3 = new Promise(function (resolve, reject) {
    request(url.ltc, function(error, response, body){
      if(!error && response.statusCode === 200){
        resolve(Object.assign({
          name: '莱特币',
          enName: 'ltc'
        }, JSON.parse(body).ticker));
      }
    })
  });
  // 同时执行p1和p2，并在它们都完成后执行then:
  Promise.all([p1, p2, p3]).then(function (results) {
    res.send(results);
  }).catch(()=>{
    result = {}
    res.send(result);
  });
})

// coinvc
router.get('/coinvc/market', function(req, res){
  request('https://api2.coinvc.com/api/v2/market/tickers', function(error, response, body){
    if(!error && response.statusCode === 200){
      res.format({
        'application/json': function(){
          res.send(body);
        }
      })
    }
  })
})

module.exports = router
