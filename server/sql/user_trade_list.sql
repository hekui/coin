/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50624
Source Host           : localhost:3306
Source Database       : btc

Target Server Type    : MYSQL
Target Server Version : 50624
File Encoding         : 65001

Date: 2017-08-16 13:17:59
*/

SET FOREIGN_KEY_CHECKS=0;

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
  `count` double(10,6) DEFAULT NULL,
  `buy_price` double(10,6) DEFAULT NULL,
  `sell_price` double(10,6) DEFAULT NULL,
  `buy_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `sell_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_trade_list
-- ----------------------------
INSERT INTO `user_trade_list` VALUES ('1', '1', '10000', '19', '1', '3636.363000', '1.330000', null, '2017-08-16 00:33:00', null);
INSERT INTO `user_trade_list` VALUES ('2', '1', '10000', '25', '1', '5000.000000', '0.400000', null, '2017-08-16 00:14:00', null);
INSERT INTO `user_trade_list` VALUES ('3', '1', '10000', '53', '1', '555.379000', '1.800100', null, '2017-08-16 07:14:00', null);
INSERT INTO `user_trade_list` VALUES ('4', '2', '10000', '11', '1', '60.731000', '13.000000', null, '2017-08-15 23:57:00', '2017/8/16 18:41');
INSERT INTO `user_trade_list` VALUES ('5', '1', '10000', '7', '1', '659.574000', '1.075000', null, '2017-08-15 23:49:00', null);
INSERT INTO `user_trade_list` VALUES ('6', '1', '10000', '3', '1', '161.114000', '3.779000', null, '2017-08-11 23:58:00', null);
INSERT INTO `user_trade_list` VALUES ('7', '1', '10000', '6', '1', '31.480000', '9.599000', null, '2017-08-14 14:06:00', null);
INSERT INTO `user_trade_list` VALUES ('8', '1', '10000', '53', '1', '489', '2', null, '2017/8/16 21:25', null);
INSERT INTO `user_trade_list` VALUES ('9', '1', '10000', '1', '1', '3.256', '296', null, '2017/8/16 21:17', null);
INSERT INTO `user_trade_list` VALUES ('10', '1', '10000', '11', '1', '50', '13.1', null, '2017/8/16 20:04', null);
