```sql
# 创建数据库

create database learn;

# 删除数据库
drop database learn;


-- 数值类型
-- 类型  大小  范围（有符号） 范围（无符号） 用途
-- TINYINT 1 byte  (-128，127)  (0，255) 小整数值
-- SMALLINT  2 bytes (-32 768，32 767)  (0，65 535)  大整数值
-- MEDIUMINT 3 bytes (-8 388 608，8 388 607)  (0，16 777 215)  大整数值
-- INT或INTEGER 4 bytes (-2 147 483 648，2 147 483 647)  (0，4 294 967 295) 大整数值
-- BIGINT  8 bytes (-9,223,372,036,854,775,808，9 223 372 036 854 775 807)  (0，18 446 744 073 709 551 615)  极大整数值
-- FLOAT 4 bytes (-3.402 823 466 E+38，-1.175 494 351 E-38)，0，(1.175 494 351 E-38，3.402 823 466 351 E+38) 0，(1.175 494 351 E-38，3.402 823 466 E+38) 单精度
-- 浮点数值
-- DOUBLE  8 bytes (-1.797 693 134 862 315 7 E+308，-2.225 073 858 507 201 4 E-308)，0，(2.225 073 858 507 201 4 E-308，1.797 693 134 862 315 7 E+308) 0，(2.225 073 858 507 201 4 E-308，1.797 693 134 862 315 7 E+308) 双精度
-- 浮点数值
-- DECIMAL 对DECIMAL(M,D) ，如果M>D，为M+2否则为D+2 依赖于M和D的值  依赖于M和D的值  小数值

-- 日期和时间类型
-- 类型  大小( bytes)  范围  格式  用途
-- DATE  3 1000-01-01/9999-12-31 YYYY-MM-DD  日期值
-- TIME  3 '-838:59:59'/'838:59:59'  HH:MM:SS  时间值或持续时间
-- YEAR  1 1901/2155 YYYY  年份值
-- DATETIME  8 1000-01-01 00:00:00/9999-12-31 23:59:59 YYYY-MM-DD HH:MM:SS 混合日期和时间值
-- TIMESTAMP 4
-- 1970-01-01 00:00:00/2038

-- 结束时间是第 2147483647 秒，北京时间 2038-1-19 11:14:07，格林尼治时间 2038年1月19日 凌晨 03:14:07

-- YYYYMMDD HHMMSS 混合日期和时间值，时间戳


-- 字符串类型
-- 类型  大小  用途
-- CHAR  0-255 bytes 定长字符串
-- VARCHAR 0-65535 bytes 变长字符串
-- TINYBLOB  0-255 bytes 不超过 255 个字符的二进制字符串
-- TINYTEXT  0-255 bytes 短文本字符串
-- BLOB  0-65 535 bytes  二进制形式的长文本数据
-- TEXT  0-65 535 bytes  长文本数据
-- MEDIUMBLOB  0-16 777 215 bytes  二进制形式的中等长度文本数据
-- MEDIUMTEXT  0-16 777 215 bytes  中等长度文本数据
-- LONGBLOB  0-4 294 967 295 bytes 二进制形式的极大文本数据
-- LONGTEXT  0-4 294 967 295 bytes 极大文本数据


-- MySQL 创建数据表
-- CREATE TABLE table_name (column_name column_type);
CREATE TABLE IF NOT EXISTS `runoob_tbl`(
   `runoob_id` INT UNSIGNED AUTO_INCREMENT,
   `runoob_title` VARCHAR(100) NOT NULL,
   `runoob_author` VARCHAR(40) NOT NULL,
   `submission_date` DATE,
   PRIMARY KEY ( `runoob_id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

create table if not exists runoob_tbl (
runoob_id int unsigned auto_increment,
runoob_title varchar(100) not null,
runoob_author varchar(40) not null,
submission_date date,
primary key (runoob_id)
)Engine=innoDB DEFAULT charset=utf8mb4;

-- 插入数据
insert int runoob_tbl (runoob_title, runoob_author, submission_date) values ("学习mysql", "菜鸟教程", NOW())

-- MySQL 查询数据
-- SELECT column_name,column_name
-- FROM table_name
-- [WHERE Clause]
-- [LIMIT N][ OFFSET M]
select * from runoob_tbl;


-- MySQL WHERE 子句
-- SELECT field1, field2,...fieldN FROM table_name1, table_name2...
-- [WHERE condition1 [AND [OR]] condition2.....
SELECT * from runoob_tbl WHERE runoob_author='菜鸟教程';

-- MySQL UPDATE 更新
-- UPDATE table_name SET field1=new-value1, field2=new-value2
-- [WHERE Clause]
 UPDATE runoob_tbl SET runoob_title='学习 C++' WHERE runoob_id=3;

-- MySQL DELETE 语句
-- DELETE FROM table_name [WHERE Clause]

-- MySQL LIKE 子句
-- '%a'     //以a结尾的数据
-- 'a%'     //以a开头的数据
-- '%a%'    //含有a的数据
-- '_a_'    //三位且中间字母是a的
-- '_a'     //两位且结尾字母是a的
-- 'a_'     //两位且开头字母是a的
SELECT * from runoob_tbl  WHERE runoob_author LIKE '%COM';


-- MySQL 排序
-- order by

-- mysql 分组
-- group by


-- MySQL 导出数据
-- 使用 SELECT ... INTO OUTFILE 语句导出数据

-- MySQL 导入数据
-- mysql -u用户名    -p密码    <  要导入的数据库数据(runoob.sql)
mysql -uroot -p123456 < runoob.sql
-- source 命令导入
-- source /home/abc/abc.sql
-- 使用 LOAD DATA 导入数据
-- LOAD DATA LOCAL INFILE 'dump.txt' INTO TABLE mytbl;


drop table if exists employee_tbl;
create table employee_tbl (
	id int(11) not null,
	name char(10) not null default '',
	`date` datetime not null,
	singin tinyint(4) not null default 0 comment '登录次数',
	primary key (id)
) engine=InnoDB default charset=utf8mb4;

CREATE TABLE `tcount_tbl` (
  `runoob_author` varchar(255) NOT NULL DEFAULT '',
  `runoob_count` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

create table blog_comment (
	id int(10) unsigned not null AUTO_INCREMENT,
	auth_id int(10) unsigned not null,
	article_id int(10) unsigned NOT NULL,
	content text,
	created_on int(11) default null,
	updated_on int(11) default null,
	deleted_on int(11) default null,
	PRIMARY key (id)
) engine=InnoDB default CHARSET=utf8mb4 comment="评论";

-- learning

create table if not exists tasks (
	task_id int(11) auto_increment,
	subject varchar(45) default null,
	start_date date default null,
	description varchar(200) default null,
	primary key (task_id)
) engine=InnoDB default charset=utf8mb4;
```



```mysql
# CROSS JOIN子句从连接的表返回行的笛卡儿乘积。
#假设使用CROSS JOIN连接两个表。 结果集将包括两个表中的所有行，其中结果集中的每一行都是第一个表中的行与第二个表中的行的组合。 当连接的表之间没有关系时，会使用这种情况。
#要特别注意的是，如果每个表有1000行，那么结果集中就有1000 x 1000 = 1,000,000行，那么数据量是非常巨大的。
SELECT 
    *
FROM
    T1
        CROSS JOIN
    T2;

```

```mysql
# 查询为NULL
select name from customer where referee_id != 2 or referee_id is NULL; # is null
```

```sql
CREATE TABLE user(
    id INT,
    username VARCHAR(32),
    password VARCHAR(32),
    sex VARCHAR(6),
    email VARCHAR(50)
);
DELIMITER $$ 

BEGIN
    DECLARE i INT DEFAULT 1;
    START TRANSACTION;
    WHILE(i<=10000000)DO
        INSERT INTO user VALUES(i,CONCAT('jack',i),MD5(i),'male',CONCAT('jack',i,'@itcast.cn'));
        SET i=i+1;
    END WHILE;
    COMMIT;
END$$
DELIMITER;
SHOW CREATE PROCEDURE auto_insert;
CALL auto_insert();

```

