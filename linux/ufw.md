ufw

简单防火墙管理器

常用参数： allow 允许通过 deny 禁止通过 disable 关闭防火墙 enable 启动防火墙 logging 启动或关闭日志 reload 重新加载 reset 重置配置 status 查看状态 show REPORT 显示报告 verbose 显示策略 --help 显示帮助信息 --version 显示版本信息

参考示例 启动UFW防火墙管理工具： [root@linuxcool ~]# ufw enable 禁用UFW防火墙管理工具： [root@linuxcool ~]# ufw disable 重启UFW防火墙管理工具： [root@linuxcool ~]# ufw reload 显示防火墙状态及规则： [root@linuxcool ~]# ufw status 重置UFW防火墙策略： [root@linuxcool ~]# ufw reset 显示UFW防火墙的报告信息： [root@linuxcool ~]# ufw show raw