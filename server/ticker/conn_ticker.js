var mysql = require('mysql')
var log = require('./logger')

var connConfig = {
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'btc_ticker'
}

function connPool(sql, callback){
  let pool = mysql.createPool(connConfig)
  pool.getConnection((error, connection) => {
    connection.query(sql, function (error, results, fields) {
      connection.release();
      if (error) {
        console.log('---error:sql query------------------------------------------------------');
        console.log('sql:', sql);
        throw error;
        callback(error, {
          status: 1,
          msg: '有sql查询错误发生。',
          data: results
        })
      } else {
        callback(null, results)
      }
    });
  })
}

function query(sql){
  let conn = mysql.createConnection(connConfig);
  conn.connect()

  let startTime = new Date().getTime();
  conn.query(sql, function (error, results, fields) {
    conn.end()
    let endTime = new Date().getTime()
    console.log('insert table cost: '+ (endTime - startTime) +'ms');
    if (error) {
      log({
        title: '[ticker]插入数据错误',
        market: 'sql insert',
        error: error.toString(),
        at_time: endTime
      })
    }
  })
}

module.exports = {
  pool: connPool,
  query: query
}
