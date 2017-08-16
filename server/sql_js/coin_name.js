var mysql = require('mysql');
var coinDic = [
  {
    'name': '小蚁股',
    'enName': 'ans',
    'home': ''
  }, {
    'name': '阿希币',
    'enName': 'xas',
    'home': ''
  }, {
    'name': '红贝壳',
    'enName': 'rss',
    'home': ''
  }, {
    'name': '比特股',
    'enName': 'bts',
    'home': ''
  }, {
    'name': '量子链',
    'enName': 'qtum',
    'home': ''
  }, {
    'name': 'ICO币',
    'enName': 'ico',
    'home': ''
  }, {
    'name': '医疗链',
    'enName': 'hcc',
    'home': ''
  }, {
    'name': 'UG Token',
    'enName': 'ugt',
    'home': ''
  }, {
    'name': '选举链',
    'enName': 'elc',
    'home': ''
  }, {
    'name': '以太坊',
    'enName': 'eth',
    'home': ''
  }, {
    'name': '钛币',
    'enName': 'tic',
    'home': ''
  }, {
    'name': 'EOS',
    'enName': 'eos',
    'home': ''
  }, {
    'name': '莱特币',
    'enName': 'ltc',
    'home': ''
  }, {
    'name': '活力币',
    'enName': 'hlb',
    'home': ''
  }, {
    'name': '以太经典',
    'enName': 'etc',
    'home': ''
  }, {
    'name': '行云币',
    'enName': 'mcc',
    'home': ''
  }, {
    'name': '世界币',
    'enName': 'wdc',
    'home': ''
  }, {
    'name': '黑币',
    'enName': 'blk',
    'home': ''
  }, {
    'name': 'B-Token',
    'enName': 'btk',
    'home': ''
  }, {
    'name': '企鹅链',
    'enName': 'qec',
    'home': ''
  }, {
    'name': '暗网币',
    'enName': 'dnc',
    'home': ''
  }, {
    'name': '比特币',
    'enName': 'btc',
    'home': ''
  }, {
    'name': '未来币',
    'enName': 'nxt',
    'home': ''
  }, {
    'name': '泽塔币',
    'enName': 'zet',
    'home': ''
  }, {
    'name': '招财币',
    'enName': 'zcc',
    'home': ''
  }, {
    'name': '美通币',
    'enName': 'met',
    'home': ''
  }, {
    'name': '狗狗币',
    'enName': 'doge',
    'home': ''
  }, {
    'name': '美人鱼币',
    'enName': 'mryc',
    'home': ''
  }, {
    'name': '普银',
    'enName': 'peb',
    'home': ''
  }, {
    'name': '里约币',
    'enName': 'rio',
    'home': ''
  }, {
    'name': '游戏点',
    'enName': 'game',
    'home': ''
  }, {
    'name': '无限币',
    'enName': 'ifc',
    'home': ''
  }, {
    'name': '绿币',
    'enName': 'vtc',
    'home': ''
  }, {
    'name': '鲨之信',
    'enName': 'skt',
    'home': ''
  }, {
    'name': '幸运币',
    'enName': 'lkc',
    'home': ''
  }, {
    'name': '瑞波币',
    'enName': 'xrp',
    'home': ''
  }, {
    'name': '保罗币',
    'enName': 'plc',
    'home': ''
  }, {
    'name': '地球币',
    'enName': 'eac',
    'home': ''
  }, {
    'name': '猴宝币',
    'enName': 'mtc',
    'home': ''
  }, {
    'name': '冰河币',
    'enName': 'fz',
    'home': ''
  }, {
    'name': '一号币',
    'enName': 'ytc',
    'home': ''
  }, {
    'name': 'LISK',
    'enName': 'lsk',
    'home': ''
  }, {
    'name': '谷壳币',
    'enName': 'gooc',
    'home': ''
  }, {
    'name': '质数币',
    'enName': 'xpm',
    'home': ''
  }, {
    'name': '乐园通',
    'enName': 'pgc',
    'home': ''
  }, {
    'name': '聚宝币',
    'enName': 'jbc',
    'home': ''
  }, {
    'name': '雪山古树',
    'enName': 'xsgs',
    'home': ''
  }, {
    'name': '传送币',
    'enName': 'tfc',
    'home': ''
  }, {
    'name': '最大币',
    'enName': 'max',
    'home': ''
  }, {
    'name': '肯特币',
    'enName': 'ktc',
    'home': ''
  }, {
    'name': '点点币',
    'enName': 'ppc',
    'home': ''
  }, {
    'name': '维理币',
    'enName': 'vrc',
    'home': ''
  }
]
var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'btc'
});
conn.connect();

coinDic.map(item => {
  // console.log(item)
  let sql = 'insert into coin_name_dic (name, enName, home) values ("' + item.name +'", "' + item.enName +'", "' + item.home +'")'
  conn.query(sql, function (error, results, fields) {
    if (error) throw error;
  })
})

conn.query('select * from coin_name_dic', function (error, results, fields) {
  if (error) throw error;
  console.log('results', results);
});

conn.end();
