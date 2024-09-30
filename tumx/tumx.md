## 会话管理[¶](https://docs.hpc.sjtu.edu.cn/login/tmux.html#id7)

### 新建会话[¶](https://docs.hpc.sjtu.edu.cn/login/tmux.html#id8)

第一个启动的会话名为`0`，之后是`1`、`2`一次类推。

但是有时候我们希望为会话起名以方便区分。

```shell
$ tmux new -s SESSION_NAME
```

以上指令启动了一个名为`SESSION_NAME`的会话。

### 分离会话[¶](https://docs.hpc.sjtu.edu.cn/login/tmux.html#id9)

如果我们想离开会话，但又不想关闭会话，有两种方式。按下`Ctrl+b d`或者`tmux detach`指令，将会分离会话与窗口

```sh
$ tmux detach
```

后面一种方法要求当前会话无正在运行的进程，即保证终端可操作。我们更推荐使用前者。

### 查看会话[¶](https://docs.hpc.sjtu.edu.cn/login/tmux.html#id10)

要查看当前已有会话，使用`tmux ls`指令。

```sh
$ tmux ls
```

### 接入会话[¶](https://docs.hpc.sjtu.edu.cn/login/tmux.html#id11)

`tmux attach`命令用于重新接入某个已存在的会话。

```sh
# 使用会话编号
$ tmux attach -t 0

# 使用会话名称
$ tmux attach -t SESSION_NAME
```

### 杀死会话[¶](https://docs.hpc.sjtu.edu.cn/login/tmux.html#id12)

`tmux kill-session`命令用于杀死某个会话。

```sh
# 使用会话编号
$ tmux kill-session -t 0

# 使用会话名称
$ tmux kill-session -t SESSION_NAME
```

### 切换会话[¶](https://docs.hpc.sjtu.edu.cn/login/tmux.html#id13)

`tmux switch`命令用于切换会话。

```sh
# 使用会话编号
$ tmux switch -t 0

# 使用会话名称
$ tmux switch -t SESSION_NAME
```

`Ctrl+b s`可以快捷地查看并切换会话

### 重命名会话[¶](https://docs.hpc.sjtu.edu.cn/login/tmux.html#id14)

`tmux rename-session`命令用于重命名会话。

```sh
# 将0号会话重命名为SESSION_NAME
$ tmux rename-session -t 0 SESSION_NAME
```

对应快捷键为`Ctrl+b $`。

## 窗格（window）操作[¶](https://docs.hpc.sjtu.edu.cn/login/tmux.html#window)

Tmux可以将窗口分成多个窗格（window），每个窗格运行不同的命令。以下命令都是在Tmux窗口中执行。

### 划分窗格[¶](https://docs.hpc.sjtu.edu.cn/login/tmux.html#id15)

`tmux split-window`命令用来划分窗格。

```shell
# 划分上下两个窗格
$ tmux split-window

# 划分左右两个窗格
$ tmux split-window -h
```

![../_images/tmux_2.png](https://docs.hpc.sjtu.edu.cn/_images/tmux_2.png)

对应快捷键为`Ctrl+b "`和`Ctrl+b %`

### 移动光标[¶](https://docs.hpc.sjtu.edu.cn/login/tmux.html#id16)

`tmux select-pane`命令用来移动光标位置。

```shell
# 光标切换到上方窗格
$ tmux select-pane -U

# 光标切换到下方窗格
$ tmux select-pane -D

# 光标切换到左边窗格
$ tmux select-pane -L

# 光标切换到右边窗格
$ tmux select-pane -R
```

对应快捷键为`Ctrl+b ↑`、`Ctrl+b ↓`、`Ctrl+b ←`、`Ctrl+b →`。

### 窗格快捷键[¶](https://docs.hpc.sjtu.edu.cn/login/tmux.html#id17)

```shell
$ Ctrl+b %：划分左右两个窗格。
$ Ctrl+b "：划分上下两个窗格。
$ Ctrl+b <arrow key>：光标切换到其他窗格。<arrow key>是指向要切换到的窗格的方向键，比如切换到下方窗格，就按方向键↓。
$ Ctrl+b ;：光标切换到上一个窗格。
$ Ctrl+b o：光标切换到下一个窗格。
$ Ctrl+b {：当前窗格左移。
$ Ctrl+b }：当前窗格右移。
$ Ctrl+b Ctrl+o：当前窗格上移。
$ Ctrl+b Alt+o：当前窗格下移。
$ Ctrl+b x：关闭当前窗格。
$ Ctrl+b !：将当前窗格拆分为一个独立窗口。
$ Ctrl+b z：当前窗格全屏显示，再使用一次会变回原来大小。
$ Ctrl+b Ctrl+<arrow key>：按箭头方向调整窗格大小。
$ Ctrl+b q：显示窗格编号。
```