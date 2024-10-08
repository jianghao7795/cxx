1. 查看 ens192 的当前配置：

```bash
nmcli connection show ens192
```

1. 如果 ens192 不存在，创建一个新的连接：

```bash
sudo nmcli connection add con-name ens192 ifname ens192 type ethernet
```

1. 设置静态 IP 地址、子网掩码、网关和 DNS 服务器：

```bash
sudo nmcli connection modify ens192 ipv4.addresses 192.168.1.2/24
sudo nmcli connection modify ens192 ipv4.gateway 192.168.1.1
sudo nmcli connection modify ens192 ipv4.dns 223.5.5.5
sudo nmcli connection modify ens192 ipv4.method manual
sudo nmcli connection up ens192
```

请根据你的网络配置替换上述示例中的 IP 地址、子网掩码、网关和 DNS 服务器。
配置文件保存路径`/etc/NetworkManager/system-connections/ens192.nmconnection`

1. 激活连接：

```bash
sudo nmcli connection up ens192
```

1. 验证配置是否生效：

   ```bash
   ip addr show ens192
   ```

   这将显示 ens192 的新配置信息。

6.删除dhcp ip

```bash
$ ip addr
...
2: ens192: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 00:50:56:af:38:d1 brd ff:ff:ff:ff:ff:ff
    altname enp11s0
    inet 192.168.77.102/24 brd 192.168.77.255 scope global noprefixroute ens192
       valid_lft forever preferred_lft forever
    inet 192.168.77.100/32 scope global ens192
       valid_lft forever preferred_lft forever
    inet 192.168.77.38/24 brd 192.168.77.255 scope global secondary dynamic noprefixroute ens192
       valid_lft 428sec preferred_lft 428sec
    inet6 fe80::250:56ff:feaf:38d1/64 scope link noprefixroute 
       valid_lft forever preferred_lft forever
 
$  ip addr delete 192.168.77.38/24 dev ens192
```