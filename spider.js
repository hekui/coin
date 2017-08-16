var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');

app.get('/', function(req, res) {
  request('https://www.btc9.com/Index/CurrencyList.html', function(error, response, body) {
    if (!error && response.statusCode == 200) {
      res.format({
        'application/json': function(){
          res.send(body)
        }
      });
    }
  })
});

var server = app.listen(3000, function() {
  console.log('listening at 3000');
});
