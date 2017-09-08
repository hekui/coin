var conn = require('./conn_ticker')

function log (params){
  console.log(JSON.stringify(params))
  let sql = 'insert into ticker_log (title, market, error, at_time) values ("'+ params.title +'", "'+ params.market +'", "'+ params.error +'", "'+ params.at_time +'")'
  conn.pool(sql, (error, result) => {
    if(error) throw error
  })
}
module.exports = log
