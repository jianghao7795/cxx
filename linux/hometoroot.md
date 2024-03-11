linux 卸载home 扩大root空间

```
df -h
```

![img](https://images2017.cnblogs.com/blog/901201/201711/901201-20171101230403748-1650484990.png)

发现虽然给了这个centos100G的磁盘空间，但root只有50G的可用空间，剩下的空间大都分配给了/home。

 

查找资料后了解到，centos7默认的root大小为50G，也就是说如果硬件分配时超过50G，大部分剩余空间都会分配给home。

软件如果装在/usr/local目录下，并且data等数据文件也配置在root下，则必须在装机后调整root的大小，否则运行一段时间后很容易导致磁盘空间不足。

 

看来这样的确是磁盘空间不足引发了这次问题，反正这台虚拟机里我并不需要安装什么服务，如果可以将home去掉，再将空间都给root就解决问题了。于是我查找资料后根据实际情况整理了这篇解决方案。

 

------

# 一、卸载home

## 1.1 备份home分区文件

```
tar cvf /tmp/home.tar /home
```

 

## 1.2 修改fstab（这一步非常重要，千万别漏了）

准备卸载/home文件系统，centos启动时会对/etc/fstab的内容逐一检测，由于fstab默认有/home，如果不修改fstab，重启之后会发现centos跪了。

![img](https://images2017.cnblogs.com/blog/901201/201711/901201-20171101231101076-1511291208.png)

![img](https://images2017.cnblogs.com/blog/901201/201711/901201-20171101231106795-1372800480.png)

所以卸载之前，要先注释掉/home，不让系统开机检测/home。

 

\# 编辑fstab

```
vi /etc/fstab
```

注释掉/home的内容，wq保存。 

```
#/dev/mapper/centos-home /home                   xfs     defaults        0 0
```

 

## 1.3 安装psmisc

```
yum install -y psmisc
```

Psmisc软件包包含三个帮助管理/proc目录的程序，安装下列程序: fuser、 killall、pstree和pstree.x11(到pstree的链接)

fuser：显示使用指定文件或者文件系统的进程的PID。

killall：杀死某个名字的进程，它向运行指定命令的所有进程发出信号。

pstree：树型显示当前运行的进程。

pstree.x11：与pstree功能相同，只是在退出前需要确认。

 

## 1.4 卸载home文件系统

```
umount /home
```

 

如果提示无法卸载，是因为有进程占用/home，可以用下面的命令来停止占用的进程。 

```
fuser -km /home/
```

 

## 1.5 删除/home所在的lv

```
lvremove /dev/mapper/centos-home
```

 

接着会出现确认的内容，输入“y”，回车。

![img](https://images2017.cnblogs.com/blog/901201/201711/901201-20171101231720623-816860926.png)

 

------

# 二、扩大root

## 2.1 扩展/root所在的lv

由于之前/home占用了47G的空间，故我考虑将这些空间都加到/root里。 

```
lvextend -L +47G /dev/mapper/centos-root
```

![img](https://images2017.cnblogs.com/blog/901201/201711/901201-20171101231913638-1218035765.png)

可是发现可用的空间并不是47G，应该是系统四舍五入了，减小一点换成48100MB。

PS:不去精确设置可用空间的原因是：我自己对如何获取可用空间的方法并不了解，与其花时间去了解这一块，我宁可浪费一点空间（毕竟几十MB的机械硬盘不值多少钱，即使是企业硬盘）。 

 

```
lvextend -L +48100M /dev/mapper/centos-root
```

![img](https://images2017.cnblogs.com/blog/901201/201711/901201-20171101232037638-1142863894.png)

出现下面的内容，说明/root所在的lv已经成功拓展成了96.97GB。

 

## 2.2 扩展/root文件系统

```
xfs_growfs /dev/mapper/centos-root
```

![img](https://images2017.cnblogs.com/blog/901201/201711/901201-20171101232131576-1247106341.png)

图中的13107200、25420800根据文件大小换算了下，和50G、97G都不符合，这个问题先搁置下，以后查资料看看。

 

## 2.3 检查root文件系统的空间

```
df -h
```

![img](https://images2017.cnblogs.com/blog/901201/201711/901201-20171101232233185-806939223.png)

可以发现/root从原来的50G提升到了97G。