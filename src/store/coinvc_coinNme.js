let coins = {
  'EUC': {
    'chineseName': '艺游宝',
    'englishName': 'Enjoy Union Chain',
    'alias': 'EUC',
    'length': 3,
    'withdrawalLimit': 10,
    'state': true,
    'deposit': true,
    'withdraw': true,
    'transfer': false,
    'trade': true,
    'index': 3,
    'tradeFee': 0.001,
    'withdrawalFee': '0.5%'
  },
  'YLC': {
    'chineseName': '盈链',
    'englishName': 'YLC',
    'alias': 'YLC',
    'length': 3,
    'state': true,
    'transfer': true,
    'index': 10,
    'tradeFee': 0.001
  },
  'XLS': {
    'chineseName': '闲乐股',
    'englishName': 'XianleShares',
    'alias': 'XLS',
    'length': 2,
    'withdrawalLimit': 10,
    'state': true,
    'deposit': true,
    'withdraw': true,
    'trade': true,
    'stock': false,
    'index': 1,
    'tradeFee': 0.001,
    'withdrawalFee': '0.5%',
    'total': 102400000,
    'quantity': 102400000
  },
  'GKC': {
    'chineseName': '逛客币',
    'englishName': 'GuangKeCoin',
    'alias': 'GKC',
    'length': 3,
    'state': true,
    'transfer': true,
    'trade': true,
    'index': 13,
    'tradeFee': 0.001
  },
  'XTZ': {
    'chineseName': 'TEZOS',
    'englishName': 'TEZOS',
    'alias': 'XTZ',
    'length': 3,
    'withdrawalLimit': 0.1,
    'state': true,
    'deposit': false,
    'withdraw': false,
    'transfer': true,
    'trade': true,
    'index': 10,
    'tradeFee': 0.001,
    'withdrawalFee': '0.1%'
  },
  'DOC': {
    'chineseName': '域链',
    'englishName': 'Dochain',
    'alias': 'DOC',
    'length': 3,
    'state': true,
    'transfer': true,
    'trade': true,
    'index': 10,
    'tradeFee': 0.001
  },
  'EOS': {
    'chineseName': 'EOS',
    'englishName': 'EOS',
    'alias': 'EOS',
    'length': 3,
    'withdrawalLimit': 1,
    'state': true,
    'deposit': true,
    'withdraw': true,
    'trade': true,
    'index': 10,
    'tradeFee': 0.001,
    'withdrawalFee': '0.1'
  },
  'PAY': {
    'chineseName': 'TenX',
    'englishName': 'TenX',
    'alias': 'PAY',
    'length': 3,
    'withdrawalLimit': 10,
    'state': true,
    'deposit': true,
    'withdraw': true,
    'transfer': true,
    'trade': true,
    'index': 10,
    'tradeFee': 0.001,
    'withdrawalFee': '0.5%'
  },
  'BTM': {
    'chineseName': '比原链',
    'englishName': 'Bytom',
    'alias': 'BTM',
    'length': 3,
    'withdrawalLimit': 10,
    'state': true,
    'deposit': true,
    'withdraw': true,
    'transfer': true,
    'trade': true,
    'index': 3,
    'tradeFee': 0.001,
    'withdrawalFee': '0.5%'
  },
  'ALA': {
    'chineseName': '阿拉丁',
    'englishName': 'Aladin',
    'alias': 'ALA',
    'length': 3,
    'withdrawalLimit': 1,
    'state': true,
    'deposit': true,
    'withdraw': true,
    'transfer': true,
    'trade': true,
    'index': 14,
    'tradeFee': 0.001,
    'withdrawalFee': '0.5%'
  },
  'XAS': {
    'chineseName': '阿希币',
    'englishName': 'ASCH',
    'alias': 'XAS',
    'length': 3,
    'withdrawalLimit': 1,
    'state': true,
    'deposit': true,
    'withdraw': true,
    'trade': true,
    'index': 13,
    'tradeFee': 0.001,
    'withdrawalFee': '0.5%'
  },
  'SYS': {
    'chineseName': '系统币',
    'englishName': 'SysCoin',
    'alias': 'SYS',
    'length': 8,
    'withdrawalLimit': 100,
    'state': true,
    'deposit': false,
    'withdraw': true,
    'trade': true,
    'all': true,
    'index': 100,
    'withdrawalFee': '0.01'
  },
  'DGB': {
    'chineseName': 'DigiByte',
    'englishName': 'DigiByte',
    'alias': 'DGB',
    'length': 8,
    'withdrawalLimit': 1,
    'state': true,
    'withdraw': true,
    'trade': true,
    'all': true,
    'index': 100,
    'tradeFee': 0.005,
    'withdrawalFee': '0.1'
  },
  'DOGE': {
    'chineseName': '狗币',
    'englishName': 'DOGECOIN',
    'alias': 'DOGE',
    'length': 8,
    'withdrawalLimit': 1000,
    'state': true,
    'withdraw': true,
    'trade': true,
    'all': true,
    'index': 100,
    'tradeFee': 0.005,
    'withdrawalFee': '10'
  },
  'GNT': {
    'chineseName': 'GOLEM',
    'englishName': 'GOLEM',
    'alias': 'GNT',
    'length': 8,
    'withdrawalLimit': 10,
    'state': true,
    'deposit': false,
    'withdraw': true,
    'trade': true,
    'all': true,
    'index': 100,
    'tradeFee': 0.005,
    'withdrawalFee': '0.02'
  },
  'NXT': {
    'chineseName': '未来币',
    'englishName': 'Nextcoin',
    'alias': 'NXT',
    'length': 8,
    'withdrawalLimit': 10,
    'state': true,
    'withdraw': true,
    'trade': true,
    'all': true,
    'index': 100,
    'tradeFee': 0.005,
    'withdrawalFee': '2'
  },
  'BLK': {
    'chineseName': '黑币',
    'englishName': 'BLACKCOIN',
    'alias': 'BLK',
    'length': 8,
    'withdrawalLimit': 10,
    'state': true,
    'withdraw': true,
    'trade': true,
    'all': true,
    'index': 100,
    'tradeFee': 0.005,
    'withdrawalFee': '0.02'
  },
  'BASH': {
    'chineseName': '幸运链',
    'englishName': 'LuckChain',
    'alias': 'BASH',
    'length': 4,
    'withdrawalLimit': 10,
    'state': true,
    'deposit': true,
    'withdraw': true,
    'trade': true,
    'index': 10,
    'tradeFee': 0.001,
    'withdrawalFee': '0.5%'
  },
  'ARDR': {
    'chineseName': '阿朵',
    'englishName': 'Ardor',
    'alias': 'ARDR',
    'length': 8,
    'withdrawalLimit': 100,
    'state': true,
    'withdraw': true,
    'trade': true,
    'all': true,
    'index': 100,
    'tradeFee': 0.005,
    'withdrawalFee': '2'
  },
  'BTS': {
    'chineseName': '比特股',
    'englishName': 'BitShares',
    'alias': 'BTS',
    'length': 8,
    'withdrawalLimit': 100,
    'state': true,
    'withdraw': false,
    'trade': true,
    'all': true,
    'index': 100,
    'tradeFee': 0.005,
    'withdrawalFee': '5'
  },
  'RADS': {
    'chineseName': 'RADIUM',
    'englishName': 'RADIUM',
    'alias': 'RADS',
    'length': 8,
    'withdrawalLimit': 10,
    'state': true,
    'withdraw': true,
    'trade': true,
    'all': true,
    'index': 100,
    'tradeFee': 0.005,
    'withdrawalFee': '0.02'
  },
  'STR': {
    'chineseName': '恒星币',
    'englishName': 'Stellar',
    'alias': 'STR',
    'length': 8,
    'withdrawalLimit': 10,
    'state': true,
    'withdraw': true,
    'trade': true,
    'all': true,
    'index': 100,
    'tradeFee': 0.005,
    'withdrawalFee': '0.00001'
  },
  'NAUT': {
    'chineseName': 'NautilusCoin',
    'englishName': 'NautilusCoin',
    'alias': 'NAUT',
    'length': 8,
    'withdrawalLimit': 10,
    'state': true,
    'withdraw': true,
    'trade': true,
    'all': true,
    'index': 100,
    'tradeFee': 0.005,
    'withdrawalFee': '0.1'
  },
  'BCS': {
    'chineseName': '链享股',
    'englishName': 'BCShareS',
    'alias': 'BCS',
    'length': 4,
    'withdrawalLimit': 100,
    'state': true,
    'deposit': true,
    'withdraw': true,
    'transfer': true,
    'trade': true,
    'index': 9,
    'tradeFee': 0.001,
    'withdrawalFee': '0.5%'
  },
  'ZEC': {
    'chineseName': 'ZCASH',
    'englishName': 'ZCASH',
    'alias': 'ZEC',
    'length': 8,
    'withdrawalLimit': 0.01,
    'state': true,
    'withdraw': true,
    'trade': true,
    'all': true,
    'index': 100,
    'tradeFee': 0.005,
    'withdrawalFee': '0.001'
  },
  'REP': {
    'chineseName': 'AUGUR',
    'englishName': 'AUGUR',
    'alias': 'REP',
    'length': 8,
    'withdrawalLimit': 10,
    'state': true,
    'withdraw': true,
    'trade': true,
    'all': true,
    'index': 100,
    'tradeFee': 0.005,
    'withdrawalFee': '0.02'
  },
  'XRP': {
    'chineseName': '瑞波币',
    'englishName': 'Ripple',
    'alias': 'XRP',
    'length': 8,
    'withdrawalLimit': 1,
    'state': true,
    'withdraw': true,
    'trade': true,
    'stock': false,
    'all': true,
    'index': 100,
    'tradeFee': 0.005,
    'withdrawalFee': '0.3'
  },
  'LBC': {
    'chineseName': 'LBRY CREDITS',
    'englishName': 'LBRY CREDITS',
    'alias': 'LBC',
    'length': 8,
    'withdrawalLimit': 1,
    'state': true,
    'withdraw': true,
    'trade': true,
    'all': true,
    'index': 100,
    'tradeFee': 0.005,
    'withdrawalFee': '0.02'
  },
  'AMP': {
    'chineseName': '分布式社交网络',
    'englishName': 'SYNEREO AMP',
    'alias': 'AMP',
    'length': 8,
    'withdrawalLimit': 10,
    'state': true,
    'withdraw': true,
    'trade': true,
    'all': true,
    'index': 100,
    'tradeFee': 0.005,
    'withdrawalFee': '2'
  },
  'MCN': {
    'chineseName': '摩可节点',
    'englishName': 'MORCO',
    'alias': 'MCN',
    'length': 2,
    'withdrawalLimit': 1,
    'state': true,
    'deposit': true,
    'withdraw': true,
    'transfer': true,
    'trade': true,
    'stock': false,
    'index': 3,
    'tradeFee': 0.001,
    'withdrawalFee': '0.1%'
  },
  'STEEM': {
    'chineseName': 'STEEM',
    'englishName': 'STEEM',
    'alias': 'STEEM',
    'length': 8,
    'withdrawalLimit': 10,
    'state': true,
    'withdraw': true,
    'trade': true,
    'all': true,
    'index': 100,
    'tradeFee': 0.005,
    'withdrawalFee': '0.01'
  },
  'NAV': {
    'chineseName': 'NAVCOIN',
    'englishName': 'NAVCOIN',
    'alias': 'NAV',
    'length': 8,
    'withdrawalLimit': 10,
    'state': true,
    'withdraw': true,
    'trade': true,
    'all': true,
    'index': 100,
    'tradeFee': 0.005,
    'withdrawalFee': '0.02'
  },
  'EXP': {
    'chineseName': 'EXPANSE',
    'englishName': 'EXPANSE',
    'alias': 'EXP',
    'length': 8,
    'withdrawalLimit': 10,
    'state': true,
    'deposit': false,
    'withdraw': true,
    'trade': true,
    'all': true,
    'index': 100,
    'tradeFee': 0.005,
    'withdrawalFee': '0.02'
  },
  'ETC': {
    'chineseName': '以太经典',
    'englishName': 'Ethereum Classic',
    'alias': 'ETC',
    'length': 8,
    'withdrawalLimit': 0.1,
    'state': true,
    'withdraw': true,
    'trade': true,
    'all': true,
    'index': 100,
    'tradeFee': 0.005,
    'withdrawalFee': '0.02'
  },
  'XCP': {
    'chineseName': '合约币',
    'englishName': 'CounterParty',
    'alias': 'XCP',
    'length': 8,
    'withdrawalLimit': 1,
    'state': true,
    'withdraw': true,
    'trade': true,
    'all': true,
    'index': 100,
    'tradeFee': 0.005,
    'withdrawalFee': '0.015'
  },
  'FCT': {
    'chineseName': '公证币',
    'englishName': 'FACTOM',
    'alias': 'FCT',
    'length': 8,
    'withdrawalLimit': 10,
    'state': true,
    'deposit': false,
    'withdraw': true,
    'trade': true,
    'all': true,
    'index': 100,
    'tradeFee': 0.005,
    'withdrawalFee': 0.2
  },
  'XEM': {
    'chineseName': '新经币',
    'englishName': 'NEW ECONOMY MOVEMENT',
    'alias': 'XEM',
    'length': 8,
    'withdrawalLimit': 100,
    'state': true,
    'withdraw': true,
    'trade': true,
    'all': true,
    'index': 100,
    'tradeFee': 0.005,
    'withdrawalFee': 30
  },
  'BTC': {
    'chineseName': '比特币',
    'englishName': 'BitCoin',
    'alias': 'BTC',
    'length': 8,
    'withdrawalLimit': 0.01,
    'state': true,
    'deposit': true,
    'withdraw': true,
    'transfer': true,
    'trade': true,
    'all': false,
    'index': 1,
    'tradeFee': 0.001,
    'withdrawalFee': '0.0005'
  },
  'LSK': {
    'chineseName': '应用链',
    'englishName': 'LISK',
    'alias': 'LSK',
    'length': null,
    'withdrawalLimit': 1,
    'state': true,
    'deposit': true,
    'withdraw': true,
    'trade': true,
    'all': true,
    'index': 100,
    'tradeFee': 0.005,
    'withdrawalFee': 0.2
  },
  'XMR': {
    'chineseName': '门罗币',
    'englishName': 'MONERO',
    'alias': 'XMR',
    'length': 8,
    'withdrawalLimit': 10,
    'state': true,
    'withdraw': true,
    'trade': true,
    'stock': false,
    'all': true,
    'index': 100,
    'tradeFee': 0.005,
    'withdrawalFee': 0.4
  },
  'DASH': {
    'chineseName': '达世币',
    'englishName': 'DASH',
    'alias': 'DASH',
    'length': 8,
    'withdrawalLimit': 1,
    'state': true,
    'withdraw': true,
    'trade': true,
    'all': true,
    'index': 100,
    'tradeFee': 0.005,
    'withdrawalFee': '0.01'
  },
  'MAID': {
    'chineseName': '互联网币',
    'englishName': 'MaidSafeCoin',
    'alias': 'MAID',
    'length': null,
    'withdrawalLimit': 100,
    'state': true,
    'withdraw': true,
    'trade': true,
    'all': true,
    'index': 100,
    'tradeFee': 0.005,
    'withdrawalFee': 4
  },
  'SC': {
    'chineseName': '云储币',
    'englishName': 'Siacoin',
    'alias': 'SC',
    'length': 8,
    'withdrawalLimit': 100,
    'state': true,
    'deposit': false,
    'withdraw': true,
    'transfer': false,
    'trade': true,
    'all': true,
    'index': 100,
    'tradeFee': 0.005,
    'withdrawalFee': 20
  },
  'ETH': {
    'chineseName': '以太坊',
    'englishName': 'Ethereum',
    'alias': 'ETH',
    'length': 8,
    'withdrawalLimit': 0.1,
    'state': true,
    'deposit': true,
    'withdraw': true,
    'transfer': true,
    'trade': true,
    'all': true,
    'index': 100,
    'tradeFee': 0.005,
    'withdrawalFee': '0'
  },
  'LTC': {
    'chineseName': '莱特币',
    'englishName': 'LiteCoin',
    'alias': 'LTC',
    'length': 8,
    'withdrawalLimit': 0.1,
    'state': true,
    'deposit': true,
    'withdraw': true,
    'trade': true,
    'all': true,
    'index': 100,
    'tradeFee': 0.005,
    'withdrawalFee': '0.001'
  },
  'LCC': {
    'chineseName': '莱卡币',
    'englishName': 'LeicaCoin',
    'alias': 'LCC',
    'length': 4,
    'withdrawalLimit': 100,
    'state': true,
    'deposit': true,
    'withdraw': true,
    'trade': true,
    'observer': true,
    'index': 6,
    'tradeFee': 0.001,
    'withdrawalFee': '0.1%'
  },
  'OEC': {
    'chineseName': '开拓币',
    'englishName': 'OpenCoin',
    'alias': 'OEC',
    'length': 4,
    'withdrawalLimit': 100,
    'state': true,
    'deposit': true,
    'withdraw': true,
    'trade': true,
    'observer': true,
    'index': 4,
    'tradeFee': 0.001,
    'withdrawalFee': '0.1%'
  },
  'ATC': {
    'chineseName': '蚂蚁币',
    'englishName': 'AntCoin',
    'alias': 'ATC',
    'length': 3,
    'withdrawalLimit': 100,
    'state': true,
    'deposit': false,
    'withdraw': false,
    'trade': true,
    'observer': true,
    'index': 2,
    'tradeFee': 0.001,
    'withdrawalFee': '0.1%'
  },
  'SPC': {
    'chineseName': '智慧币',
    'englishName': 'SPC',
    'alias': 'SPC',
    'length': 4,
    'withdrawalLimit': 100,
    'state': true,
    'deposit': false,
    'withdraw': false,
    'trade': true,
    'observer': true,
    'index': 5,
    'tradeFee': 0.001,
    'withdrawalFee': '0.1%'
  },
  'WNC': {
    'chineseName': '全网链',
    'englishName': 'WNC',
    'alias': 'WNC',
    'length': 2,
    'withdrawalLimit': 1,
    'state': true,
    'deposit': false,
    'withdraw': false,
    'transfer': true,
    'trade': true,
    'stock': true,
    'index': 1,
    'tradeFee': 0.001,
    'withdrawalFee': 0.006,
    'total': 10000000,
    'quantity': 8975568
  },
  'IVC': {
    'chineseName': '投资币',
    'englishName': 'InvestCoin',
    'alias': 'IVC',
    'length': 4,
    'withdrawalLimit': 100,
    'state': true,
    'deposit': true,
    'withdraw': true,
    'transfer': true,
    'trade': true,
    'index': 3,
    'tradeFee': 0.001,
    'withdrawalFee': '0.1'
  },
  'CNY': {
    'chineseName': '人民币',
    'englishName': 'CNY',
    'alias': 'CNY',
    'length': 8,
    'withdrawalLimit': 100,
    'state': true,
    'deposit': true,
    'withdraw': true,
    'transfer': true,
    'trade': false,
    'index': 0,
    'tradeFee': 0.001,
    'withdrawalFee': '0.5%'
  }
}
export default coins
