# [linux rocky9中如何设置静态IP](https://www.cnblogs.com/liujiaxin2018/p/18112302)

 

001、查看系统

```
[root@PC1 liujiaxin01]# cat /etc/system-release
Rocky Linux release 9.3 (Blue Onyx)      ## rocky9
```

![img](https://img2024.cnblogs.com/blog/1447599/202404/1447599-20240403122205075-1129759005.png)

 

002、进入配置文件目录

```
[root@PC1 liujiaxin01]# cd /etc/NetworkManager/system-connections/     ## 进入配置文件所在目录
[root@PC1 system-connections]# ls
ens160.nmconnection
```

![img](https://img2024.cnblogs.com/blog/1447599/202404/1447599-20240403122324448-317031161.png)

 

003、备份配置文件

[![复制代码](https://assets.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
[root@PC1 system-connections]# ls
ens160.nmconnection
[root@PC1 system-connections]# cp ens160.nmconnection ens160.nmconnection_backup    ## 对原始配置文件做一个备份
[root@PC1 system-connections]# ls
ens160.nmconnection  ens160.nmconnection_backup
```

[![复制代码](https://assets.cnblogs.com/images/copycode.gif)](javascript:void(0);)

![img](https://img2024.cnblogs.com/blog/1447599/202404/1447599-20240403122449550-985447326.png)

 

004、查看当前IP

[![复制代码](https://assets.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
[root@PC1 system-connections]# ifconfig | head -n 5        ## 查看当前IP
ens160: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.174.135  netmask 255.255.255.0  broadcast 192.168.174.255
        inet6 fe80::20c:29ff:feef:ca5a  prefixlen 64  scopeid 0x20<link>
        ether 00:0c:29:ef:ca:5a  txqueuelen 1000  (Ethernet)
        RX packets 970885  bytes 1407414985 (1.3 GiB)
```

[![复制代码](https://assets.cnblogs.com/images/copycode.gif)](javascript:void(0);)

![img](https://img2024.cnblogs.com/blog/1447599/202404/1447599-20240403122554138-1961201024.png)

 

005、修改配置文件

[![复制代码](https://assets.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
[root@PC1 system-connections]# vim ens160.nmconnection
[connection]
id=ens160
uuid=4060b5e3-b96f-3c58-b4da-54d13184466b
type=ethernet
autoconnect-priority=-999
interface-name=ens160
timestamp=1712000800

[ethernet]

[ipv4]
method=manual                                   ## 在IPV4下面修改如下内容
address1=192.168.174.136/24,192.168.174.2     ## 修改IP，子网掩码；网关
dns=119.29.29.29;114.114.114.114               ## 设置DNS服务
may-fail=false                                  ## 不知道啥意思

[ipv6]
addr-gen-mode=eui64
method=auto

[proxy]
```

[![复制代码](https://assets.cnblogs.com/images/copycode.gif)](javascript:void(0);)

 

![img](https://img2024.cnblogs.com/blog/1447599/202404/1447599-20240403123342637-769748657.png)

 

 

006、加载、激活配置文件(为啥要分两个动作完成？）

```
[root@PC1 system-connections]# nmcli connection reload ens160.nmconnection    ## 重新加载配置文件
[root@PC1 system-connections]# nmcli connection up ens160                     ## 激活配置文件
```

![img](https://img2024.cnblogs.com/blog/1447599/202404/1447599-20240403123454879-903711055.png)

 

007、查看配置效果

[![复制代码](https://assets.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
[root@PC1 home]# ifconfig | head -n 5              ## 查看IP
ens160: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.174.136  netmask 255.255.255.0  broadcast 192.168.174.255
        inet6 fe80::20c:29ff:feef:ca5a  prefixlen 64  scopeid 0x20<link>
        ether 00:0c:29:ef:ca:5a  txqueuelen 1000  (Ethernet)
        RX packets 971718  bytes 1407512599 (1.3 GiB)
[root@PC1 home]# ping -c 2 www.baidu.com          ## 测试网络连通性
PING www.a.shifen.com (110.242.68.4) 56(84) bytes of data.
64 bytes from 110.242.68.4 (110.242.68.4): icmp_seq=1 ttl=128 time=40.7 ms
64 bytes from 110.242.68.4 (110.242.68.4): icmp_seq=2 ttl=128 time=18.4 ms

--- www.a.shifen.com ping statistics ---
2 packets transmitted, 2 received, 0% packet loss, time 1002ms
rtt min/avg/max/mdev = 18.418/29.556/40.695/11.138 ms
```

[![复制代码](https://assets.cnblogs.com/images/copycode.gif)](javascript:void(0);)

![img](https://img2024.cnblogs.com/blog/1447599/202404/1447599-20240403123603331-649018965.png)



