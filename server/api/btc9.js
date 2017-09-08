var request = require('request');
let startTime = new Date().getTime()
request({
  url: 'https://www.btc9.com/Index/CurrencyList.html',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.101 Safari/537.36'
  }
}, function(error, response, body){
  let endTime = new Date().getTime()
  console.log('cost: ', endTime - startTime);
  // console.log('response', response);
  console.log('body', body);
  // if(!error && response.statusCode === 200){
  //   res.format({
  //     'application/json': function(){
  //       res.send(body);
  //     }
  //   })
  // }
})
