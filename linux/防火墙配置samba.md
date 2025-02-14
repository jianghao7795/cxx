1. 安装Samba

```bash
sudo yum install samba samba-client samba-common
```

1. 设置共享目录

   编辑Samba配置文件`/etc/samba/smb.conf`，在文件末尾添加以下内容：

```ini
[shared]
   path = /path/to/shared/directory
   writable = yes
   browseable = yes
   guest ok = yes
```

1. 设置Samba密码

   为了允许访问，需要为用户设置一个Samba密码：

```bash
sudo smbpasswd -a your_username
```

1. 重启Samba服务

```bash
sudo systemctl restart smb.service
sudo systemctl restart nmb.service
```

1. 配置防火墙（如果已启用）

   允许Samba通过防火墙：

```bash
sudo firewall-cmd --permanent --zone=public --add-service=samba
sudo firewall-cmd --reload
```



