var conn = require('../api/conn')
var yuanbao = require('./yuanbao')

function init(){
  console.log('global.coins', global.coins)
  if(!global.coins){
    conn.pool('select id,alias,name,enName from coins order by id desc', (error, result) => {
      if(error){
        throw error
      }
      global.coins = {}
      result.forEach(item => {
        global.coins[item.alias] = item
      })
      // start ticker
      ticker()
      setInterval(ticker, 5000)
    })
  } else {
    ticker()
    setInterval(ticker, 5000)
  }
}


function ticker(){
  yuanbao()
}

function initCoins () {

}

init()

module.exports = init
