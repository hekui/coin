/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50624
Source Host           : localhost:3306
Source Database       : btc

Target Server Type    : MYSQL
Target Server Version : 50624
File Encoding         : 65001

Date: 2017-08-30 09:28:02
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for art
-- ----------------------------
DROP TABLE IF EXISTS `art`;
CREATE TABLE `art` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `from` varchar(255) DEFAULT NULL,
  `content` text,
  `time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of art
-- ----------------------------

-- ----------------------------
-- Table structure for art_tag
-- ----------------------------
DROP TABLE IF EXISTS `art_tag`;
CREATE TABLE `art_tag` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of art_tag
-- ----------------------------

-- ----------------------------
-- Table structure for coins
-- ----------------------------
DROP TABLE IF EXISTS `coins`;
CREATE TABLE `coins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `alias` varchar(20) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `enName` varchar(255) DEFAULT NULL,
  `home` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=118 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of coins
-- ----------------------------
INSERT INTO `coins` VALUES ('1', 'ltc', '莱特币', 'LiteCoin', '');
INSERT INTO `coins` VALUES ('2', 'lsk', '应用链', 'LISK', '');
INSERT INTO `coins` VALUES ('3', 'hcc', '医疗链', '医疗链', '');
INSERT INTO `coins` VALUES ('4', 'etc', '以太经典', 'Ethereum Classic', '');
INSERT INTO `coins` VALUES ('5', 'ans', 'NEO', 'NEO', '');
INSERT INTO `coins` VALUES ('6', 'act', 'Achain', 'Achain', '');
INSERT INTO `coins` VALUES ('7', 'btm', '比原链', '比原链', '');
INSERT INTO `coins` VALUES ('8', 'xnc', '玄链', '玄链', '');
INSERT INTO `coins` VALUES ('9', 'bcc', 'BCC', 'BCC', '');
INSERT INTO `coins` VALUES ('10', 'wdc', '世界币', '世界币', '');
INSERT INTO `coins` VALUES ('11', 'eth', '以太坊', 'Ethereum', '');
INSERT INTO `coins` VALUES ('12', 'tic', '钛币', '钛币', '');
INSERT INTO `coins` VALUES ('13', 'ipc', '知产币', '知产币', '');
INSERT INTO `coins` VALUES ('14', 'qtum', '量子链', '量子链', '');
INSERT INTO `coins` VALUES ('15', 'ico', 'ICO币', 'ICO币', '');
INSERT INTO `coins` VALUES ('16', 'ugt', 'UG Token', 'UG Token', '');
INSERT INTO `coins` VALUES ('17', 'xas', '阿希币', 'ASCH', '');
INSERT INTO `coins` VALUES ('18', 'xpm', '质数币', '质数币', '');
INSERT INTO `coins` VALUES ('19', 'rss', '红贝壳', '红贝壳', '');
INSERT INTO `coins` VALUES ('20', 'ytc', '一号币', '一号币', '');
INSERT INTO `coins` VALUES ('21', 'tfc', '传送币', '传送币', '');
INSERT INTO `coins` VALUES ('22', 'xrp', '瑞波币', 'Ripple', '');
INSERT INTO `coins` VALUES ('23', 'elc', '选举链', '选举链', '');
INSERT INTO `coins` VALUES ('24', 'btc', '比特币', 'BitCoin', '');
INSERT INTO `coins` VALUES ('25', 'pgc', '乐园通', '乐园通', '');
INSERT INTO `coins` VALUES ('26', 'bts', '比特股', 'BitShares', '');
INSERT INTO `coins` VALUES ('27', 'skt', '鲨之信', '鲨之信', '');
INSERT INTO `coins` VALUES ('28', 'gooc', '谷壳币', '谷壳币', '');
INSERT INTO `coins` VALUES ('29', 'btk', 'B-Token', 'B-Token', '');
INSERT INTO `coins` VALUES ('30', 'zet', '泽塔币', '泽塔币', '');
INSERT INTO `coins` VALUES ('31', 'eos', 'EOS', 'EOS', '');
INSERT INTO `coins` VALUES ('32', 'dnc', '安网币', '安网币', '');
INSERT INTO `coins` VALUES ('33', 'peb', '普银', '普银', '');
INSERT INTO `coins` VALUES ('34', 'mtc', '猴宝币', '猴宝币', '');
INSERT INTO `coins` VALUES ('35', 'rio', '里约币', '里约币', '');
INSERT INTO `coins` VALUES ('36', 'game', '游戏点', '游戏点', '');
INSERT INTO `coins` VALUES ('37', 'vrc', '维理币', '维理币', '');
INSERT INTO `coins` VALUES ('38', 'qec', '企鹅链', '企鹅链', '');
INSERT INTO `coins` VALUES ('39', 'blk', '黑币', 'BLACKCOIN', '');
INSERT INTO `coins` VALUES ('40', 'fz', '冰河币', '冰河币', '');
INSERT INTO `coins` VALUES ('41', 'mcc', '行云币', '行云币', '');
INSERT INTO `coins` VALUES ('42', 'plc', '保罗币', '保罗币', '');
INSERT INTO `coins` VALUES ('43', 'nxt', '未来币', 'Nextcoin', '');
INSERT INTO `coins` VALUES ('44', 'ifc', '无限币', '无限币', '');
INSERT INTO `coins` VALUES ('45', 'met', '美通币', '美通币', '');
INSERT INTO `coins` VALUES ('46', 'vtc', '绿币', '绿币', '');
INSERT INTO `coins` VALUES ('47', 'mryc', '美人鱼币', '美人鱼币', '');
INSERT INTO `coins` VALUES ('48', 'zcc', '招财币', '招财币', '');
INSERT INTO `coins` VALUES ('49', 'hlb', '活力币', '活力币', '');
INSERT INTO `coins` VALUES ('50', 'doge', '狗币', 'DOGECOIN', '');
INSERT INTO `coins` VALUES ('51', 'max', '最大币', '最大币', '');
INSERT INTO `coins` VALUES ('52', 'lkc', '幸运币', '幸运币', '');
INSERT INTO `coins` VALUES ('53', 'ppc', '点点币', '点点币', '');
INSERT INTO `coins` VALUES ('54', 'jbc', '聚宝币', '聚宝币', '');
INSERT INTO `coins` VALUES ('55', 'eac', '地球币', '地球币', '');
INSERT INTO `coins` VALUES ('56', 'xsgs', '雪山古树', '雪山古树', '');
INSERT INTO `coins` VALUES ('57', 'ktc', '肯特币', '肯特币', '');
INSERT INTO `coins` VALUES ('58', 'tnt', 'Tierion', 'Tierion', '');
INSERT INTO `coins` VALUES ('59', 'bcdn', 'BlockCDN', 'BlockCDN', '');
INSERT INTO `coins` VALUES ('60', 'sip', '薪付宝', 'SingPay', '');
INSERT INTO `coins` VALUES ('61', 'mvc', '小牛链', 'Maverick System', '');
INSERT INTO `coins` VALUES ('62', 'lrc', '路印', 'Loopring', '');
INSERT INTO `coins` VALUES ('63', 'att', '智能矩阵', 'Atmatrix', '');
INSERT INTO `coins` VALUES ('64', 'euc', '艺游宝', 'Enjoy Union Chain', '');
INSERT INTO `coins` VALUES ('65', 'ylc', '盈链', 'YLC', '');
INSERT INTO `coins` VALUES ('66', 'xls', '闲乐股', 'XianleShares', '');
INSERT INTO `coins` VALUES ('67', 'gkc', '逛客币', 'GuangKeCoin', '');
INSERT INTO `coins` VALUES ('68', 'xtz', 'TEZOS', 'TEZOS', '');
INSERT INTO `coins` VALUES ('69', 'ala', '阿拉丁', 'Aladin', '');
INSERT INTO `coins` VALUES ('70', 'sys', '系统币', 'SysCoin', '');
INSERT INTO `coins` VALUES ('71', 'dgb', 'DigiByte', 'DigiByte', '');
INSERT INTO `coins` VALUES ('72', 'doc', '域链', '域链', '');
INSERT INTO `coins` VALUES ('73', 'pay', 'Tenx', 'Tenx', '');
INSERT INTO `coins` VALUES ('74', 'gnt', 'GOLEM', 'GOLEM', '');
INSERT INTO `coins` VALUES ('75', 'bash', '幸运链', 'LuckChain', '');
INSERT INTO `coins` VALUES ('76', 'ardr', '阿朵', 'Ardor', '');
INSERT INTO `coins` VALUES ('77', 'rads', 'RADIUM', 'RADIUM', '');
INSERT INTO `coins` VALUES ('78', 'str', '恒星币', 'Stellar', '');
INSERT INTO `coins` VALUES ('79', 'naut', 'NautilusCoin', 'NautilusCoin', '');
INSERT INTO `coins` VALUES ('80', 'bcs', '链享股', 'BCShareS', '');
INSERT INTO `coins` VALUES ('81', 'lbc', 'LBRY CREDITS', 'LBRY CREDITS', '');
INSERT INTO `coins` VALUES ('82', 'zec', 'ZCASH', 'ZCASH', '');
INSERT INTO `coins` VALUES ('83', 'rep', 'AUGUR', 'AUGUR', '');
INSERT INTO `coins` VALUES ('84', 'steem', 'STEEM', 'STEEM', '');
INSERT INTO `coins` VALUES ('85', 'exp', 'EXPANSE', 'EXPANSE', '');
INSERT INTO `coins` VALUES ('86', 'amp', '分布式社交网络', 'SYNEREO AMP', '');
INSERT INTO `coins` VALUES ('87', 'mcn', '摩可节点', 'MORCO', '');
INSERT INTO `coins` VALUES ('88', 'nav', 'NAVCOIN', 'NAVCOIN', '');
INSERT INTO `coins` VALUES ('89', 'xcp', '合约币', 'CounterParty', '');
INSERT INTO `coins` VALUES ('90', 'fct', '公证币', 'FACTOM', '');
INSERT INTO `coins` VALUES ('91', 'xem', '新经币', 'NEW ECONOMY MOVEMENT', '');
INSERT INTO `coins` VALUES ('92', 'xmr', '门罗币', 'MONERO', '');
INSERT INTO `coins` VALUES ('93', 'dash', '达世币', 'DASH', '');
INSERT INTO `coins` VALUES ('94', 'maid', '互联网币', 'MaidSafeCoin', '');
INSERT INTO `coins` VALUES ('95', 'sc', '云储币', 'Siacoin', '');
INSERT INTO `coins` VALUES ('96', 'oec', '开拓币', 'OpenCoin', '');
INSERT INTO `coins` VALUES ('97', 'spc', '智慧币', 'SPC', '');
INSERT INTO `coins` VALUES ('98', 'lcc', '莱卡币', 'LeicaCoin', '');
INSERT INTO `coins` VALUES ('99', 'atc', '蚂蚁币', '蚂蚁币', '');
INSERT INTO `coins` VALUES ('100', 'wnc', '全网链', 'WNC', '');
INSERT INTO `coins` VALUES ('101', 'ivc', '投资币', 'InvestCoin', '');
INSERT INTO `coins` VALUES ('102', 'cny', '人民币', 'CNY', '');
INSERT INTO `coins` VALUES ('103', 'cdt', 'Coin大师', 'Coin大师', '');
INSERT INTO `coins` VALUES ('104', 'zrx', '0xProject', '0xProject', '');
INSERT INTO `coins` VALUES ('105', 'snt', 'Status', 'Status', '');
INSERT INTO `coins` VALUES ('106', 'stx', 'Stox', 'Stox', '');
INSERT INTO `coins` VALUES ('107', 'dnt', 'district0x', 'district0x', '');
INSERT INTO `coins` VALUES ('108', 'omg', 'OMG', 'OMG', '');
INSERT INTO `coins` VALUES ('109', 'llt', '流量币', '流量币', '');
INSERT INTO `coins` VALUES ('110', 'zgc', '黄金链', '黄金链', '');
INSERT INTO `coins` VALUES ('111', 'zecs', '算力合约', '算力合约', '');
INSERT INTO `coins` VALUES ('112', 'ins', '印链', '印链', '');
INSERT INTO `coins` VALUES ('113', 'bjc', '久链', '久链', '');
INSERT INTO `coins` VALUES ('114', 'inf', '讯链', '讯链', '');
INSERT INTO `coins` VALUES ('115', 'rts', '瑞资链', '瑞资链', '');
INSERT INTO `coins` VALUES ('116', 'diot', '物链', '物链', '');
INSERT INTO `coins` VALUES ('117', 'fid', '飞币', '飞币', '');

-- ----------------------------
-- Table structure for coins_fee
-- ----------------------------
DROP TABLE IF EXISTS `coins_fee`;
CREATE TABLE `coins_fee` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `coin_id` int(11) DEFAULT NULL,
  `alias` varchar(255) DEFAULT NULL,
  `market_id` int(11) DEFAULT NULL,
  `market` varchar(255) DEFAULT NULL,
  `type` tinyint(4) DEFAULT '0' COMMENT '手续费类型：0，虚拟币转出手续费；1，人民币交易手续费；2，普银交易手续费，100，人民币提现手续费',
  `fee` double(16,6) DEFAULT NULL,
  `fee_unit` tinyint(4) DEFAULT '0' COMMENT '手续费类型：0，百分比，1，固定个数（单位是对应币，比如btc）',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of coins_fee
-- ----------------------------
INSERT INTO `coins_fee` VALUES ('1', '24', 'btc', '1', 'jubi', '1', '0.002000', '0');
INSERT INTO `coins_fee` VALUES ('2', '1', 'ltc', '1', 'jubi', '1', '0.002000', '0');
INSERT INTO `coins_fee` VALUES ('3', '57', 'ktc', '1', 'jubi', '1', '0.002000', '0');
INSERT INTO `coins_fee` VALUES ('4', '28', 'gooc', '1', 'jubi', '1', '0.001500', '0');
INSERT INTO `coins_fee` VALUES ('5', '27', 'skt', '1', 'jubi', '1', '0.002000', '0');
INSERT INTO `coins_fee` VALUES ('6', '27', 'skt', '1', 'jubi', '0', '0.001000', '1');
INSERT INTO `coins_fee` VALUES ('7', '11', 'eth', '1', 'jubi', '0', '0.010000', '1');
INSERT INTO `coins_fee` VALUES ('8', '4', 'etc', '1', 'jubi', '0', '0.010000', '1');
INSERT INTO `coins_fee` VALUES ('9', '2', 'lsk', '1', 'jubi', '0', '0.005000', '0');
INSERT INTO `coins_fee` VALUES ('10', '5', 'ans', '1', 'jubi', '0', '1.000000', '1');
INSERT INTO `coins_fee` VALUES ('11', '57', 'ktc', '1', 'jubi', '0', '0.010000', '1');
INSERT INTO `coins_fee` VALUES ('12', '33', 'peb', '1', 'jubi', '0', '0.005000', '0');
INSERT INTO `coins_fee` VALUES ('13', '49', 'hlb', '1', 'jubi', '0', '0.005000', '0');
INSERT INTO `coins_fee` VALUES ('14', '24', 'btc', '2', 'coinvc', '0', '0.002000', '1');
INSERT INTO `coins_fee` VALUES ('15', '87', 'mcn', '2', 'coinvc', '0', '0.001000', '0');
INSERT INTO `coins_fee` VALUES ('16', '96', 'oec', '2', 'coinvc', '0', '0.001000', '0');
INSERT INTO `coins_fee` VALUES ('17', '98', 'lcc', '2', 'coinvc', '0', '0.001000', '0');
INSERT INTO `coins_fee` VALUES ('18', '101', 'ivc', '2', 'coinvc', '0', '0.100000', '1');
INSERT INTO `coins_fee` VALUES ('19', '72', 'doc', '2', 'coinvc', '0', '0.003000', '0');
INSERT INTO `coins_fee` VALUES ('20', '31', 'eos', '2', 'coinvc', '0', '0.100000', '1');

-- ----------------------------
-- Table structure for coins_market
-- ----------------------------
DROP TABLE IF EXISTS `coins_market`;
CREATE TABLE `coins_market` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `enName` varchar(255) DEFAULT NULL,
  `home` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of coins_market
-- ----------------------------
INSERT INTO `coins_market` VALUES ('1', '聚币网', 'jubi', '');
INSERT INTO `coins_market` VALUES ('2', 'Coin VC', 'coinvc', null);
INSERT INTO `coins_market` VALUES ('3', '币久网', 'btc9', null);

-- ----------------------------
-- Table structure for coins_market_fee
-- ----------------------------
DROP TABLE IF EXISTS `coins_market_fee`;
CREATE TABLE `coins_market_fee` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `market_id` int(11) DEFAULT NULL,
  `market` varchar(255) DEFAULT NULL,
  `type` tinyint(4) DEFAULT NULL COMMENT '手续费类型：0，虚拟币转出手续费；1，人民币交易手续费；2，普银交易手续费，100，人民币提现手续费',
  `fee` double(16,6) DEFAULT NULL,
  `fee_unit` tinyint(4) DEFAULT '0' COMMENT '手续费类型：0，百分比，1，固定个数（单位是对应币，比如btc）',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of coins_market_fee
-- ----------------------------
INSERT INTO `coins_market_fee` VALUES ('1', '1', 'jubi', '100', '0.005000', '0');
INSERT INTO `coins_market_fee` VALUES ('2', '2', 'coinvc', '100', '0.005000', '0');
INSERT INTO `coins_market_fee` VALUES ('3', '3', 'btc9', '100', '0.005000', '0');
INSERT INTO `coins_market_fee` VALUES ('4', '1', 'jubi', '1', '0.001000', '0');
INSERT INTO `coins_market_fee` VALUES ('5', '1', 'jubi', '2', '0.001000', '0');
INSERT INTO `coins_market_fee` VALUES ('6', '1', 'jubi', '0', '0.010000', '0');
INSERT INTO `coins_market_fee` VALUES ('7', '2', 'coinvc', '0', '0.005000', '0');
INSERT INTO `coins_market_fee` VALUES ('8', '2', 'coinvc', '1', '0.001000', '0');
INSERT INTO `coins_market_fee` VALUES ('9', '3', 'btc9', '0', '0.003000', '0');
INSERT INTO `coins_market_fee` VALUES ('10', '3', 'btc9', '1', '0.002000', '0');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `user_pwd` varchar(255) DEFAULT NULL,
  `user_email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '10000', '13982271436', null, null);

-- ----------------------------
-- Table structure for user_trade_buy
-- ----------------------------
DROP TABLE IF EXISTS `user_trade_buy`;
CREATE TABLE `user_trade_buy` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `user_id` int(12) DEFAULT NULL,
  `coin_id` int(12) DEFAULT NULL,
  `market_id` int(12) DEFAULT NULL COMMENT '交易所id',
  `type` tinyint(2) DEFAULT '0' COMMENT '交易类型：0买入；1卖出',
  `status` tinyint(2) DEFAULT '0' COMMENT '订单状态：0挂单中；1交易成功；4撤销',
  `count` double(16,6) DEFAULT NULL,
  `price` double(16,6) DEFAULT NULL,
  `worth` double(16,6) DEFAULT NULL,
  `time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_trade_buy
-- ----------------------------

-- ----------------------------
-- Table structure for user_trade_buy_test
-- ----------------------------
DROP TABLE IF EXISTS `user_trade_buy_test`;
CREATE TABLE `user_trade_buy_test` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `user_id` int(12) DEFAULT NULL,
  `coin_id` int(12) DEFAULT NULL,
  `type` tinyint(2) DEFAULT '0' COMMENT '交易类型：0买入；1卖出',
  `status` tinyint(2) DEFAULT '0' COMMENT '订单状态：0挂单中；1交易成功；4撤销',
  `count` double(16,6) DEFAULT NULL,
  `price` double(16,6) DEFAULT NULL,
  `worth` double(16,6) DEFAULT NULL,
  `time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_trade_buy_test
-- ----------------------------
INSERT INTO `user_trade_buy_test` VALUES ('2', '10000', '19', '0', '1', '3636.363000', '1.330000', '0.000000', '0000-00-00 00:00:00');

-- ----------------------------
-- Table structure for user_trade_list
-- ----------------------------
DROP TABLE IF EXISTS `user_trade_list`;
CREATE TABLE `user_trade_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` int(11) DEFAULT '0' COMMENT '订单状态：1，持有；2，卖出；',
  `user_id` int(11) NOT NULL,
  `coin_id` int(11) DEFAULT NULL,
  `market_id` int(11) DEFAULT NULL,
  `count` double(16,6) DEFAULT NULL,
  `buy_price` double(10,6) DEFAULT NULL,
  `sell_price` double(10,6) DEFAULT NULL,
  `buy_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `sell_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_trade_list
-- ----------------------------
INSERT INTO `user_trade_list` VALUES ('1', '2', '10000', '29', '1', '3636.363000', '1.350000', null, '2017-08-16 00:33:00', null);
INSERT INTO `user_trade_list` VALUES ('2', '1', '10000', '48', '1', '5000.000000', '0.400000', null, '2017-08-16 00:14:00', null);
INSERT INTO `user_trade_list` VALUES ('3', '1', '10000', '3', '1', '555.379000', '1.800100', null, '2017-08-16 07:14:00', null);
INSERT INTO `user_trade_list` VALUES ('4', '2', '10000', '12', '1', '60.731000', '13.000000', null, '2017-08-15 23:57:00', '2017-08-16 18:41:00');
INSERT INTO `user_trade_list` VALUES ('5', '1', '10000', '3', '1', '659.574000', '1.075000', null, '2017-08-15 23:49:00', null);
INSERT INTO `user_trade_list` VALUES ('6', '1', '10000', '19', '1', '161.114000', '3.779000', null, '2017-08-11 23:58:00', null);
INSERT INTO `user_trade_list` VALUES ('7', '1', '10000', '15', '1', '31.480000', '9.599000', null, '2017-08-14 14:06:00', null);
INSERT INTO `user_trade_list` VALUES ('8', '1', '10000', '7', '1', '489.000000', '2.000000', null, '2017-08-16 21:25:00', null);
INSERT INTO `user_trade_list` VALUES ('9', '1', '10000', '5', '1', '3.256000', '296.000000', null, '2017-08-16 21:17:00', null);
INSERT INTO `user_trade_list` VALUES ('10', '1', '10000', '12', '1', '50.000000', '13.100000', null, '2017-08-16 20:04:00', null);
INSERT INTO `user_trade_list` VALUES ('11', '1', '10000', '3', '1', '976.233700', '0.700000', null, '2017-08-17 09:00:00', null);
INSERT INTO `user_trade_list` VALUES ('12', '1', '10000', '12', '1', '89.572000', '10.900000', null, '2017-08-17 12:45:00', null);
INSERT INTO `user_trade_list` VALUES ('13', '1', '10000', '7', '2', '190.000000', '1.600000', null, '2017-08-14 14:42:11', null);
INSERT INTO `user_trade_list` VALUES ('14', '2', '10000', '23', '1', '126432.117000', '0.069500', null, '2017-08-17 13:13:00', null);
INSERT INTO `user_trade_list` VALUES ('15', '1', '10000', '15', '1', '289.480000', '7.600000', null, '2017-08-17 20:40:00', null);

-- ----------------------------
-- View structure for v_user_trade_list
-- ----------------------------
DROP VIEW IF EXISTS `v_user_trade_list`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `v_user_trade_list` AS SELECT
user_trade_list.id,
user_trade_list.user_id,
user_trade_list.coin_id,
user_trade_list.`status`,
user_trade_list.count,
user_trade_list.buy_price,
user_trade_list.sell_price,
user_trade_list.buy_time,
user_trade_list.sell_time,
user_trade_list.market_id,
coins_market.enName AS market_enName,
coins_market.`name` AS market_name,
coins.enName,
coins.`name`,
coins.alias
FROM
user_trade_list
INNER JOIN coins_market ON user_trade_list.market_id = coins_market.id
INNER JOIN coins ON user_trade_list.coin_id = coins.id ;
