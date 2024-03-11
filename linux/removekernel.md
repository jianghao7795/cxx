#### 查看当前的内核

```sh
uname -sr
```

#### 查看已安装的内核

```sh
#debian/Ubuntu命令：
dpkg -l | grep linux-image | awk '{print$2}'
#centos命令：
rpm -qa | grep kernel
```

#### 手动删除多余的内核

```sh
#debian/Ubuntu命令：
apt remove --purge 要删除的内核名
#centos命令：
yum remove 要删除的内核名
```

#### 一键删除未使用的内核

```sh
#debian/Ubuntu命令：
apt -y remove --purge $(dpkg -l | grep linux-image | awk '{print$2}' | grep -v $(uname -r)) 
#centos命令：
yum -y remove $(rpm -qa | grep kernel | grep -v $(uname -r))
```

#### 重新检测

```shell
#debian/Ubuntu命令：
dpkg -l | grep linux-image | awk '{print$2}'
#centos命令：
rpm -qa | grep kernel
```

#### 更新引导系统并重启

```shell
#debian/Ubuntu命令：
update-grub
reboot
#centos命令：
grub2-set-default 0
grub2-mkconfig -o /boot/grub2/grub.cfg  #有可能需要执行一下
reboot
```

