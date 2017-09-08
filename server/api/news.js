var mysql = require('mysql')
var express = require('express')
var router = express.Router()
var conn = require('./conn')

// news
router.route('/news')
.get((req, res) => {
  let key = req.query.key, sql = null
  if(key){
    sql = 'select id,title,time from news where (title like \'%'+ key +'%\') order by id asc'
  }else{
    sql = 'select id,title,time from news order by id asc'
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
  let params = req.body
  if(params.title === '' || params.content === ''){
    res.json({
      status: 1,
      msg: '请填写标题或内容。'
    })
  } else {
    let sql = null, newsId = null
    if(params.id){
      newsId = params.id
      sql = mysql.format('update news set `title` = ?, `author` = ?, `from` = ?, `content` = ? where id = ?', [params.title, params.author, params.from, params.content, params.id])
    }else{
      sql = mysql.format('insert into news (`title`, `author`, `from`, `content`) values (?, ?, ?, ?)', [params.title, params.author, params.from, params.content])
    }
    conn.pool(sql, (error, result) => {
      if(error){
        res.json(result)
      }
      if (newsId === null) newsId = result.insertId
      console.log('insert result: ', result);
      let sqlSelect = 'select id,title,time from news where id = '+ newsId +' order by id asc'
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
})

router.route('/news/:id')
.get((req, res) => {
  let id = req.params.id
  let sql = 'select * from news where id = '+ id +' order by id asc'
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
.delete(function(req, res){
  let id = req.params.id
  let sql = mysql.format('delete from news where id = ?', [id])
  conn.pool(sql, (error, result) => {
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
