var mysql = require('mysql');
var rp = require('request-promise');
var connConfig = {
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'btc_ticker'
}

let timeArray = []
let times = 5;
function fetchData(){
  // let url = 'https://www.jubi.com/api/v1/allticker/' // url不同，数据格式不一致
  let url = 'https://www.jubi.com/coin/allcoin'
  let startTime = new Date().getTime();
  console.log('request time:', new Date());
  rp({
    url: url,
    timeout: 5000,
    json: true
  }).then(res => {

    let responseTime = new Date().getTime()
    console.log('response time:', new Date());
    let costTime = responseTime - startTime
    timeArray.push(costTime)
    console.log('耗时：' + (costTime) + 'ms');
    console.log('-------------------------------------');

    let databaseName = 'jubi_ticker'
    let sqlValues = []
    for(let key in res){
      let val = res[key];
      sqlValues.push('(0, "'+ val[0] +'", "'+ key +'", '+ val[1] +', '+ val[4] +', '+ val[5] +', '+ val[2] +', '+ val[3] +', '+ val[6] +', '+ val[7] +')')
    }
    //create table if not exists like old_table_name;
    let sql = 'insert into '+ databaseName +' (coin_id, coin_name, coin_enName, last, high, low, buy, sell, vol, volume) values '+ sqlValues.join(', ');
    querySql(sql);

    if(times < 2){
      clearInterval(timer)
      let costTotalTime= timeArray.reduce((a, b) => {
        return a + b
      })
      console.log('总请求'+ timeArray.length  +'次，平均耗时：'+ (costTotalTime/timeArray.length)+ 'ms');
    }
  }).catch(err => {
    throw err;
  })
}

function querySql(sql){
  let conn = mysql.createConnection(connConfig);
  conn.connect();

  let startTime = new Date().getTime();
  conn.query(sql, function (error, results, fields) {
    if (error) throw error;
    return results;
  })

  let endTime = new Date().getTime()
  let costTime = endTime - startTime
  console.log('query耗时：' + (costTime) + 'ms');
  console.log('-------------------------------------');

  conn.end()
}


fetchData()
let timer = setInterval(function(){
  // times--
  fetchData()
}, 5000)
