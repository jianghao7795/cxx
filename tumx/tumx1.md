# Tmux 使用教程

如何使用 Tmux 工具

Tmux 是一款终端复用命令行工具，一般用于 Terminal 的窗口管理。Tmux 拥有如下特性：

- 可以同时开启多个会话和窗口，并持久地保存工作状态。
- 断线后任务能够在后台继续执行。

例如，若您需要在 Terminal 中编辑一个文件，同时还需要在 Python 交互环境中执行命令，那么正常情况下您需要开启两个 Terminal。
若您使用 Tmux，则无须开启多个 Terminal，您可使用 session 管理会话和窗口，在多个会话和窗口之间进行切换。

Tmux 还能解决由于断线导致的任务丢失问题。一般的 shell 工具遇到断线，远程任务可能会中止并无法继续，重连后任务需从头再来。而在 Tmux 中运行的命令，会一直保存在服务器上，断线后只需从 Tmux 中恢复该会话，任务仍然在运行。

## Tmux 安装

矩池云已经在 Pytorch 1.4.0 镜像和 TensorFlow1.13 & Keras2.2 镜像中，预置了 Tmux。

若您想自己安装 Tmux，可在 Terminal 中使用如下命令。

shell

```shell
apt update
apt install tmux
```

矩池云建议您在本地 SSH 工具中使用 Tmux。不建议在 Jupyter 的 Terminal 中使用，以免 Tmux 的快捷键无法使用。

Tmux 由如下三个基础组成：
\1. Session。即会话，任务通常在 session 中运行，在断开连接后 session 仍会保持。
\2. Window。即窗口，一个会话可以包含多个窗口。可以存在多个窗口。
\3. Pane。即窗格，一个窗口可以包含多个窗格。类似于 Vim 中 C-w +v 后的效果。

## 使用 Tmux 管理会话

输入命令

shell

```shell
tmux
```

即可进入 Tmux 环境。此时默认开启了一个 session-name 为 0 的 Tmux 会话。



![0 会话](https://matpool.com/supports/static/2eaf7ba7ecc851388646bd4b6ad09a8b/9d517/64ff55bc_enter.png)

0 会话

左下角即当前窗口的 session-name。

例如您可以在这个会话中，输入 `python` 命令，进入 Python 交互环境。



![Python 交互](https://matpool.com/supports/static/70e59037118d8d043020afbd1efa12aa/9d517/3c4f80b1_shell1.png)

Python 交互

此时如果您和服务器断开连接，tmux 中的任务还会继续保持。您可重新打开 Terminal 后，输入命令

shell

```shell
tmux a -t 0 
```

其中 0 为之前会话的 session-name。

如果您想从该会话中退出，可以输入如下命令：

shell

```shell
tmux detach
```

会回到普通的 Terminal。

此时可以再次输入 `tmux` 命令开启一个新的会话。Tmux 默认的 session-name 会逐次加一，再次新建的会话默认 session-name 就是 1 了。

若想指定 session 名称以便记忆，可以使用命令：

shell

```shell
tmux new -s [session-name]
```

例如：

shell

```shell
tmux new -s matpool
```



![matpool](https://matpool.com/supports/static/f03fdd137d8c9b660295e402adbc52b4/2f7b1/68479fef_session-name.png)

matpool

左下角可以看到，该会话的名称为 matpool。

在普通 Terminal 页面中，可以查看所有的 Tmux 会话：

shell

```shell
tmux ls
```



![tmux ls](https://matpool.com/supports/static/cb1b93c0f61866bd8436f7d537bc3b06/4f939/ed78d337_tmuxls.png)

tmux ls

如果要删除指定会话，在普通 Terminal 页面中，输入命令：

shell

```shell
tmux kill-session -t [session-name]
```

例如：

shell

```shell
tmux kill-session -t 0
```

如果要删除所有会话：

shell

```shell
tmux kill-server
```

删除后再次执行 `tmux ls` 命令，会看到已经没有运行中的 Tmux 会话。

切换会话：

shell

```shell
tmux switch -t <session-name>
```

重命名会话：

shell

```shell
tmux rename-session -t 0 <new-name>
```

## 窗口管理

在每个 session 会话中，您可以开启多个窗口和面板。

Tmux 为了防止与全局快捷键冲突，大部分快捷键需要先需要输入前缀，默认为 Ctrl + b。该操作被定义为 Prefix。

例如按下

shell

```shell
Prefix c 
```

会新建一个窗口。



![新建窗口](https://matpool.com/supports/static/bb7932eccc2304b54d4930d88c8da1f1/9d517/7d63b9b8_%25E6%2596%25B0%25E5%25BB%25BA%25E7%25AA%2597%25E5%258F%25A3.png)

新建窗口

左下方的 0:bash 即第一个窗口，1:bash 为第二个窗口，以此类推。

您可在每个窗口中执行不同的任务，任务会被保持至您 kill 为止。

窗口的其他操作：

选择窗口

shell

```shell
Prefix [number] # 选择第n个窗口
Prefix p/n	# 选择前/后一个窗口
```

窗口名带 * 的为当前窗口。



![窗口](https://matpool.com/supports/static/b8795ae0215488c2e0dd0196314dd168/f57f1/f16aa099_%25E7%25AA%2597%25E5%258F%25A3.png)

窗口

关闭窗口

shell

```shell
Prefix &
exit
```

列出所有窗口（包含其他Session）

shell

```shell
Prefix w 
j/k # 前后选择
```

搜索窗口

shell

```shell
Prefix f
```

重命名当前窗口

shell

```shell
Prefix ,
```

## 窗格管理

每个窗口可以被划分为多个面板。

新建一个水平窗格

shell

```shell
Prefix %	
```



![水平窗格](https://matpool.com/supports/static/e1bbfbc66a29bb55f89a53a8db7785e2/9d517/5b85c8f1_%25E6%25B0%25B4%25E5%25B9%25B3%25E7%25AA%2597%25E6%25A0%25BC.png)

水平窗格

新建一个垂直窗格

shell

```shell
Prefix "
```



![垂直窗格](https://matpool.com/supports/static/3477237c70095d1845174f6efdb25c9d/9d517/62e7d752_%25E5%259E%2582%25E7%259B%25B4%25E7%25AA%2597%25E6%25A0%25BC.png)

垂直窗格

关闭窗格

shell

```shell
Prefix x
```

在窗格间切换

shell

```shell
Prefix o 
```

显示窗格编号

shell

```shell
Prefix q
```



![窗格编号](https://matpool.com/supports/static/787be769656baab2fd33dbaf93232c72/9d517/23c0f419_%25E7%25AA%2597%25E6%25A0%25BC%25E7%25BC%2596%25E5%258F%25B7.png)

窗格编号

切换到新窗口

shell

```shell
Prefix ！
```

窗格交换位置

shell

```shell
Prefix + {/}
```

## Tmux 常用快捷键

| 快捷键          | 说明                                                         |      |
| :-------------- | :----------------------------------------------------------- | :--- |
| Prefix ?        | 显示快捷键帮助                                               |      |
| Prefix :        | 进入命令模式                                                 |      |
| Prefix C-z      | 挂起会话，不影响其他命令的运行，C 表示 Ctrl 键               |      |
| Prefix C-o      | 调换窗格位置                                                 |      |
| Prefix 空格键   | 采用下一个内置布局                                           |      |
| Prefix !        | 把当前窗格（pane）变为新窗口（window）                       |      |
| Prefix "        | 横向分隔窗格                                                 |      |
| Prefix %        | 纵向分隔窗格                                                 |      |
| Prefix q        | 显示分隔窗格的编号                                           |      |
| Prefix o        | 跳到下一个分隔窗格                                           |      |
| Prefix 上下键   | 上一个及下一个分隔窗格                                       |      |
| Prefix C-方向键 | 调整分隔窗格大小，C 表示 Ctrl 键                             |      |
| Prefix z        | 最大化当前窗格，再一次则恢复                                 |      |
| Prefix c        | 创建新窗口                                                   |      |
| Prefix 0~9      | 选择几号窗口                                                 |      |
| Prefix n        | 选择下一个窗口                                               |      |
| Prefix p        | 选择前一个窗口                                               |      |
| Prefix l        | 切换到前一个窗口，该快捷键通常会被重定义为符合 vim 下的空格切换 |      |
| Prefix w        | 以菜单方式显示及选择窗口                                     |      |
| Prefix s        | 以菜单方式显示和选择会话                                     |      |
| Prefix t        | 显示时钟                                                     |      |
| Prefix ;        | 切换到最后一个使用的面板                                     |      |
| Prefix x        | 关闭面板                                                     |      |
| Prefix &        | 关闭窗口                                                     |      |
| Prefix d        | 退出 Tmux，并保存当前会话，此时 Tmux 仍在后台运行，可以通过 Tmux attach 进入指定的会话 |      |