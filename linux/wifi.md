### 启用 Wi-Fi 网卡

如果你的 Wi-Fi 网卡是禁用状态，可以通过以下命令启用：

```shell
nmcli radio wifi on
```

验证 Wi-Fi 是否已启用：

```shell
nmcli radio
```

### 步骤 3: 扫描可用的 Wi-Fi 网络

使用 nmcli 扫描附近的 Wi-Fi 网络：

```shell
nmcli device wifi list
```

你将看到可用的 Wi-Fi 网络列表，每个网络都会显示 SSID（网络名称）、安全类型等信息。

### 步骤 4: 连接到 Wi-Fi 网络

使用 nmcli 命令连接到指定的 Wi-Fi 网络。例如，如果你的 Wi-Fi 网络名称（SSID）是 MyWiFiNetwork，并且密码是 password123，你可以使用以下命令连接：

```shell
nmcli device wifi connect 'xxxxxx' password 'xxxxx'
```

你应该会看到类似于以下输出，表明连接成功：

```text
Device 'wlp3s0' successfully activated with 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.
```

### 步骤 5: 验证连接状态

验证网络连接状态：

```shell
nmcli connection show
```

查看当前连接的详细信息：

```shell
nmcli device show wlp3s0
```



作者：wwwzh
链接：https://juejin.cn/post/7430460789067055154
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。