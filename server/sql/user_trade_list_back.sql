/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50624
Source Host           : localhost:3306
Source Database       : btc

Target Server Type    : MYSQL
Target Server Version : 50624
File Encoding         : 65001

Date: 2017-08-16 10:49:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user_trade_list
-- ----------------------------
DROP TABLE IF EXISTS `user_trade_list`;
CREATE TABLE `user_trade_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `coin_id` int(11) DEFAULT NULL,
  `coin_enName` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT '0' COMMENT '订单状态：1，持有；2，卖出；',
  `count` float(10,6) DEFAULT NULL,
  `buy_price` float(10,6) DEFAULT NULL,
  `sell_price` float(10,6) DEFAULT NULL,
  `buy_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `sell_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_trade_list
-- ----------------------------
INSERT INTO `user_trade_list` VALUES ('1', '10000', null, 'BTK', '1', '3636.363', '1.330000', null, '2017-08-16 00:33:00', null);
INSERT INTO `user_trade_list` VALUES ('2', '10000', null, 'ZCC', '1', '5000', '0.4', null, '2017/8/16 0:14', null);
INSERT INTO `user_trade_list` VALUES ('3', '10000', null, 'BTM', '1', '555.379', '1.8001', null, '2017/8/16 7:14', null);
INSERT INTO `user_trade_list` VALUES ('4', '10000', null, 'TIC', '1', '60.731', '13', null, '2017/8/15 23:57', '');
INSERT INTO `user_trade_list` VALUES ('5', '10000', null, 'HCC', '1', '659.574', '1.075', null, '2017/8/15 23:49', null);
INSERT INTO `user_trade_list` VALUES ('6', '10000', null, 'RSS', '1', '161.114', '3.779', null, '2017/8/11 23:58', null);
INSERT INTO `user_trade_list` VALUES ('7', '10000', null, 'RSS', '1', '31.48', '9.599', null, '2017/8/14 14:06', null);