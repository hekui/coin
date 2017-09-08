var mysql = require('mysql')
var express = require('express')
var router = express.Router()
var conn = require('./conn')

// coins
router.route('/markets')
.get((req, res) => {
  let sql = 'select * from coins_market order by id asc'
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

module.exports = router
