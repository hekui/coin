let mysql = require('mysql');
let connConfig = {
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'btc',
  multipleStatements: true,
  dateStrings: true
}
let pool = mysql.createPool(connConfig)

function connPool(sql, callback){
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

module.exports = {
  pool: connPool
}
