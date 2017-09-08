var mysql = require('mysql')
var express = require('express')
var router = express.Router()
var conn = require('./conn')
var moment = require('moment')

var coinsFee = null
// coins
router.route('/coins')
.get((req, res) => {
  let key = req.query.key, sql = null
  if(key){
    sql = 'select id,alias,name,enName,home,content,jubi_trade_type from coins where (alias like \'%'+ key +'%\' or name like \'%'+ key +'%\' or enName like \'%'+ key +'%\') order by id asc'
  }else{
    sql = 'select id,alias,name,enName,home,content,jubi_trade_type from coins order by id asc'
  }
  conn.pool(sql, (error, result) => {
    if(error){
      res.json(result)
    }
    res.json({
      status: 0,
      data: result
    })
  })
})
.post((req, res) => {
  let params = req.body;
  if(params.alias === ''){
    res.json({
      status: 1,
      msg: '请填写币种名称。'
    })
    res.end()
  } else {
    let sql = null
    let alias = params.alias.toString().toLowerCase()
    let sqlSelect = mysql.format('select * from coins where alias = ?', [alias])
    if(params.id){
       sql = mysql.format('update coins set `alias` = ?, `name` = ?, enName = ?, home = ?, content = ? where id = ?', [alias, params.name, params.enName, params.home, params.content, params.id])
       postCoin(res, sql, sqlSelect)
    }else{
      console.log('查询币是否存在');
      conn.pool(sqlSelect, (error, result) => {
        if(error){
          res.json(result)
        }
        if(result.length > 0){
          res.json({
            status: 1,
            msg: '该币已经存在。',
            data: result
          })
        }else{
          sql = mysql.format('insert into coins (`alias`, `name`, enName, home) values (?, ?, ?, ?)', [alias, params.name, params.enName, params.home])
          postCoin(res, sql, sqlSelect)
        }
      })
    }
  }
})

function postCoin(res, sql, sqlSelect){
  conn.pool(sql, (error, result) => {
    if(error){
      res.json(result)
    }
    conn.pool(sqlSelect, (error, result) =>{
      if(error){
        res.json(result)
      }
      res.json({
        status: 0,
        data: result
      })
    })
  })
}

router.delete('/coins/:id', function(req, res){
  let id = req.params.id
  let sql = mysql.format('delete from coins where id = ?', [id])
  conn.pool(sql, (error, result) => {
    console.log(result);
    if(error){
      res.json(result)
    }
    res.json({
      status: 0,
      msg: '删除成功',
      data: []
    })
  })
})



router.get('/coins/fee', (req, res) => {
  let today = moment().format('YYYY-MM-DD')
  if(coinsFee && coinsFee.updateDate === today){
    res.json({
      status: 0,
      data: coinsFee
    })
  }else{
    initFee().then(()=>{
      coinsFee.updateDate = today
      res.json({
        status: 0,
        data: coinsFee
      })
    }, res => {
      res.json({
        status: 1,
        msg: '费率查询出错。',
        data: coinsFee
      })
    })
  }
})

// fee
coinsFee = {
  jubi: {
    cash_fee: '', // 人民币提现手续费
    cash_fee_unit: 0, // 带unit的都是手续费单位
    btc: {
      cny_fee: '', // 人民币交易手续费
      move_fee: '' // 虚拟币转出手续费
    }
  }
}
function initFee(){
  return new Promise((resolve, reject) => {
    let sql = 'select enName from coins_market; select alias from coins; select market,type,fee,fee_unit from coins_market_fee;select alias,market,type,fee,fee_unit from coins_fee'
    conn.pool(sql, (error, result) => {
      if(error){
        throw error
        reject(error)
      }else{
        // console.log(result);
        let markets = result[0], coins = result[1], marketFees = result[2], coinFees = result[3]
        // 初始化平台各种类型费率 手续费类型：0，虚拟币转出手续费；1，人民币交易手续费；2，普银交易手续费，100，人民币提现手续费
        let feeAll = {}
        marketFees.forEach(fee => {
          if(!feeAll[fee.market]){
            feeAll[fee.market] = {}
          }
          feeAll[fee.market][fee.type] = fee.fee
          feeAll[fee.market][fee.type + '_unit'] = fee.fee_unit
        })
        // console.log(feeAll);
        // 初始化:平台所有币的费率
        markets.forEach(market => {
          coinsFee[market.enName] = {
            cash_fee: feeAll[market.enName]['100'], // 人民币提现手续费
            cash_fee_unit: feeAll[market.enName]['100_unit'] // 人民币提现手续费单位
          }
          coins.forEach(coin => {
            coinsFee[market.enName][coin.alias] = {
              cny_fee: feeAll[market.enName]['1'], // 人民币交易手续费
              cny_fee_unit: feeAll[market.enName]['1_unit'],
              move_fee: feeAll[market.enName]['0'], // 虚拟币转出手续费
              move_fee_unit:feeAll[market.enName]['0_unit']
            }
          })
        })
        // 初始化：特殊币的费率
        coinFees.forEach(fee => {
          let coin = coinsFee[fee.market][fee.alias]
          switch (fee.type) {
            case 0:
              coin['move_fee'] = fee.fee
              coin['move_fee_unit'] = fee.fee_unit
              break;
            case 1:
              coin['cny_fee'] = fee.fee
              coin['cny_fee_unit'] = fee.fee_unit
              break;
            default:
          }
        })
        resolve()
      }
    })
  })
}

module.exports = router
