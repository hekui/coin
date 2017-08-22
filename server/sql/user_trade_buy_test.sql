/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50624
Source Host           : localhost:3306
Source Database       : btc

Target Server Type    : MYSQL
Target Server Version : 50624
File Encoding         : 65001

Date: 2017-08-18 10:00:43
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user_trade_buy_test
-- ----------------------------
DROP TABLE IF EXISTS `user_trade_buy_test`;
CREATE TABLE `user_trade_buy_test` (
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_trade_buy_test
-- ----------------------------
INSERT INTO `user_trade_buy_test` VALUES ('2', '10000', '19', '0', '1', '3636.363000', '1.330000', '0.000000', '0000-00-00 00:00:00');
