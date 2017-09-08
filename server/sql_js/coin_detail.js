var mysql = require('mysql')
var express = require('express')
var router = express.Router()
var conn = require('../api/conn')
var request = require('request')
var cheerio = require('cheerio')

let coins = []

conn.pool('select * from coins', (error, result) => {
  if(result){
    coins = result
    getDetail()
  }
})
function getDetail(){
  let coin = coins.pop()
  console.log('=======================================')
  console.log('requst:', coin.alias)
  // let url = 'https://www.jubi.com/coin/'+ coin.alias +'/view.html'
  let url = 'https://bter.com/trade/'+ coin.alias +'_cny'
  request({
    url: url,
    headers: {
      'Accept-Language': 'zh-CN,zh',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.101 Safari/537.36'
    }
  }, (error, request, body) => {
    // console.log('response:', body)
    if(body !== ''){
      let $ = cheerio.load(body)
      let coinEnName = $('.introduction > h3 > b').text().replace(/(\(|\))/ig, '')
      console.log('response', coinEnName)
      if(coin.alias.toString().toUpperCase() === coinEnName){
        let content = $('.cionintro > div > p').text().split('简介： ')[1]
        console.log('content', content)
        console.log('update...')
        let sql = mysql.format('update coins set content = ? where id = ?', [content, coin.id])
        conn.pool(sql, (error, result) => {
          console.log('update end')
          if(error){
            console.log('error coins', coins);
          }
          if(coins.length > 0){
            getDetail()
          }
        })
      }else{
        if(coins.length > 0){
          getDetail()
        }
      }
    }else{
      if(coins.length > 0){
        getDetail()
      }
    }
  })
}
