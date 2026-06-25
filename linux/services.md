| 服务名                                                | 功能说明                             | 建议                               |
| ----------------------------------------------------- | ------------------------------------ | ---------------------------------- |
| `avahi-daemon.service`                                | 局域网设备发现（类似 Bonjour）       | 不用打印机 / 局域网设备的话可以关  |
| `ModemManager.service`                                | 管理移动宽带 / 拨号调制解调器        | 不用 4G/5G 网卡可以关              |
| `nvidia-hibernate/resume/suspend.service`             | 英伟达显卡休眠 / 唤醒相关            | 不用休眠功能可以关，不影响日常使用 |
| `openvpn.service`                                     | 系统级 OpenVPN 服务                  | 不用 VPN 服务器 / 客户端的话可以关 |
| `samba-ad-dc.service`、`smbd.service`、`nmbd.service` | Windows 文件共享（Samba）            | 不需要和 Windows 共享文件可以关    |
| `ssh.service`                                         | SSH 远程登录服务                     | 不被其他电脑远程连接可以关         |
| `thermald.service`                                    | CPU 温度控制（部分设备用）           | 笔记本 / 台式机散热正常的话，可关  |
| `touchegg.service`                                    | 触摸板手势增强                       | 不用触摸板手势可以关               |
| `bluetooth.service`                                   | 蓝牙服务                             | 不用蓝牙设备（耳机、鼠标）可以关   |
| `cups.service`、`cups-browsed.service`                | 打印机服务                           | 没有打印机可以关                   |
| `docker.service`、`containerd.service`                | Docker 容器服务                      | 不用 Docker 可以关                 |
| `anacron.service`                                     | 定时任务补跑（关机错过的 cron 任务） | 长期不关机可关，一般建议保留       |
| `rsyslog.service`                                     | 系统日志服务                         | 对日志不敏感可以关，会减少日志记录 |
| `apparmor.service`                                    | 应用安全隔离                         | 桌面用户一般可以关，会降低安全防护 |