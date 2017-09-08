/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50624
Source Host           : localhost:3306
Source Database       : btc

Target Server Type    : MYSQL
Target Server Version : 50624
File Encoding         : 65001

Date: 2017-08-28 12:59:54
*/

SET FOREIGN_KEY_CHECKS=0;

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
