/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50624
Source Host           : localhost:3306
Source Database       : btc_ticker

Target Server Type    : MYSQL
Target Server Version : 50624
File Encoding         : 65001

Date: 2017-08-12 09:44:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for jubi_2018_08_11
-- ----------------------------
DROP TABLE IF EXISTS `jubi_ticker`;
CREATE TABLE `jubi_ticker` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `coin_id` int(11) DEFAULT NULL,
  `coin_name` varchar(255) DEFAULT NULL COMMENT '币名称',
  `coin_enName` varchar(255) DEFAULT NULL COMMENT '币英文名称',
  `last` double DEFAULT NULL COMMENT '最近一次成交价',
  `high` double DEFAULT NULL COMMENT '最高价',
  `low` double DEFAULT NULL COMMENT '最低价',
  `buy` double DEFAULT NULL COMMENT '买一价',
  `sell` double DEFAULT NULL COMMENT '卖一价',
  `vol` double DEFAULT NULL COMMENT '成交量',
  `volume` double DEFAULT NULL COMMENT '成交额',
  `date` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '数据添加日期',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8;
