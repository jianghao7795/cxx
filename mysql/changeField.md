alter add命令用来增加表的字段。

alter add命令格式：alter table 表名 add字段 类型 其他;

例如，在表MyClass中添加了一个字段passtest，类型为int(4)，默认值为0：
   mysql> alter table MyClass add passtest int(4) default '0';

1) 加索引
   mysql> alter table 表名 add index 索引名 (字段名1[，字段名2 …]);

例子： mysql> alter table employee add index emp_name (name);

2) 加主关键字的索引
    mysql> alter table 表名 add primary key (字段名);

例子： mysql> alter table employee add primary key(id);

3) 加唯一限制条件的索引
   mysql> alter table 表名 add unique 索引名 (字段名);

例子： mysql> alter table employee add unique emp_name2(cardnumber);

4) 删除某个索引
   mysql> alter table 表名 drop index 索引名;

例子： mysql>alter table employee drop index emp_name;

5) 增加字段
    mysql> ALTER TABLE table_name ADD field_name field_type;

6) 修改原字段名称及类型
    mysql> ALTER TABLE table_name CHANGE old_field_name new_field_name field_type;

7) 删除字段
    MySQL ALTER TABLE table_name DROP field_name;