导出mysql 数据
 sudo docker exec -it mysql57 mysqldump -uroot -p123456 gva > /home/jianghao/gva.sql

sudo docker exec -it  mysql_server【docker容器名称/ID】 mysqldump -uroot -p123456【数据库密码】 test_db【数据库名称】 > /opt/sql_bak/test_db.sql【导出表格路径】

导入
docker exec -i  mysql_server【docker容器名称/ID】 mysqltest_db_copy【数据库名称】 < /opt/sql_bak/test_db.sql【本地数据表路径】