/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50624
Source Host           : localhost:3306
Source Database       : btc

Target Server Type    : MYSQL
Target Server Version : 50624
File Encoding         : 65001

Date: 2017-08-16 13:17:45
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for coin_market
-- ----------------------------
DROP TABLE IF EXISTS `coin_market`;
CREATE TABLE `coin_market` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `enName` varchar(255) DEFAULT NULL,
  `home` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of coin_market
-- ----------------------------
INSERT INTO `coin_market` VALUES ('1', '聚币网', 'jubi', '');
INSERT INTO `coin_market` VALUES ('2', 'Coin VC', 'coinvc', null);
