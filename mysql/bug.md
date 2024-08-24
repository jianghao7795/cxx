解决 mysql 连接不上 Access denied for user root@localhost Access denied for user root'@'localhost' (using password: YES) 的bug

If you have that same problem in MySql 5.7.+ :

Access denied for user 'root'@'localhost'
it's because MySql 5.7 by default allow to connect with socket, which means you just connect with sudo mysql. If you run sql :

SELECT user,authentication_string,plugin,host FROM mysql.user;
then you will see it :

+------------------+-------------------------------------------+-----------------------+-----------+
| user | authentication_string | plugin | host |
+------------------+-------------------------------------------+-----------------------+-----------+
| root | | auth_socket | localhost |
| mysql.session | *THISISNOTAVALIDPASSWORDTHATCANBEUSEDHERE | mysql_native_password | localhost |
| mysql.sys | *THISISNOTAVALIDPASSWORDTHATCANBEUSEDHERE | mysql_native_password | localhost |
| debian-sys-maint | \*497C3D7B50479A812B89CD12EC3EDA6C0CB686F0 | mysql_native_password | localhost |
+------------------+-------------------------------------------+-----------------------+-----------+
4 rows in set (0.00 sec)
To allow connection with root and password, then update the values in the table with command :

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Current-Root-Password';
FLUSH PRIVILEGES;
Then run the select command again and you'll see it has changed :

+------------------+-------------------------------------------+-----------------------+-----------+
| user | authentication_string | plugin | host |
+------------------+-------------------------------------------+-----------------------+-----------+
| root | *2F2377C1BC54BE827DC8A4EE051CBD57490FB8C6 | mysql_native_password | localhost |
| mysql.session | *THISISNOTAVALIDPASSWORDTHATCANBEUSEDHERE | mysql_native_password | localhost |
| mysql.sys | *THISISNOTAVALIDPASSWORDTHATCANBEUSEDHERE | mysql_native_password | localhost |
| debian-sys-maint | *497C3D7B50479A812B89CD12EC3EDA6C0CB686F0 | mysql_native_password | localhost |
+------------------+-------------------------------------------+-----------------------+-----------+
4 rows in set (0.00 sec)
And that's it. You can run this process after running and completing the sudo mysql_secure_installation command.

For mariadb, use

SET PASSWORD FOR 'root'@'localhost' = PASSWORD('manager');
