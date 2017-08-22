var mysql = require('mysql')
var express = require('express')
var router = express.Router()
var conn = require('./conn')

// coins
router.route('/coins')
.get((req, res) => {
  let sql = 'select id,name,enName from coins order by id asc'
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
  let enName = params.enName.toString().toLowerCase()
  if(params.name === '' || enName === ''){
    res.json({
      status: 1,
      msg: '请填写币种名称。'
    })
    res.end()
  }
  let sql = mysql.format('select * from coins where enName = ?', [enName])
  conn.pool(sql, (error, result) => {
    console.log('result', result.length);
    if(result.length > 0){
      res.json({
        status: 1,
        msg: '该币已经存在。',
        data: result
      })
    } else {
      let sqlInsert = mysql.format('insert into coins (`name`, enName) values (?, ?)', [params.name, enName])
      conn.pool(sqlInsert, (error, result) => {
        console.log('insert  result', result);
        if(error){
          res.json(result)
        }
        conn.pool(sql, (error, result) =>{
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
  })
})

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


module.exports = router
