```mysql
ALTER DATABASE test DEFAULT CHARACTER SET utf8mb4; #更新数据库默认编码

ALTER TABLE logtest DEFAULT CHARACTER SET utf8mb4 COLLATE utf8_general_ci; # 更新数据表编码

SHOW CREATE DATABASE db_name; #查看数据库编码：

SHOW CREATE TABLE tbl_name; #查看表编码：
SHOW FULL COLUMNS FROM tbl_name; #查看字段编码：

CREATE TABLE `base_message` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `created_at` datetime(3) DEFAULT NULL,
  `updated_at` datetime(3) DEFAULT NULL,
  `deleted_at` datetime(3) DEFAULT NULL,
  `title` varchar(50) NOT NULL COMMENT '网站标题',
  `introduction` varchar(255) NOT NULL COMMENT '网站简介',
  `head_img` text NOT NULL COMMENT '网站头像',
  `copyright` varchar(255) NOT NULL COMMENT '版权信息',
  `link` varchar(255) DEFAULT NULL COMMENT '链接',
  `record_info` varchar(255) DEFAULT NULL COMMENT '备案信息',
  `user_id` bigint unsigned NOT NULL COMMENT '用户id',
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id_unique` (`user_id`) COMMENT '用户唯一性'
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='基础信息'
```

