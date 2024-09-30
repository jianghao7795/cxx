[tmux-Productive-Mouse-Free-Development_zh](https://www.gitbook.com/book/aquaregia/tmux-productive-mouse-free-development_zh)[本书简介](https://aquaregia.gitbooks.io/tmux-productive-mouse-free-development_zh/content/index.html)[**1.** 致谢](https://aquaregia.gitbooks.io/tmux-productive-mouse-free-development_zh/content/book-content/Acknowledgments.html)[**2.** 前言](https://aquaregia.gitbooks.io/tmux-productive-mouse-free-development_zh/content/book-content/Preface.html)[**3.** 第1章 基础知识](https://aquaregia.gitbooks.io/tmux-productive-mouse-free-development_zh/content/book-content/Chapter1.html)[**4.** 第2章 配置 tmux](https://aquaregia.gitbooks.io/tmux-productive-mouse-free-development_zh/content/book-content/Chapter2.html)[**5.** 第3章 脚本定制 tmux 环境](https://aquaregia.gitbooks.io/tmux-productive-mouse-free-development_zh/content/book-content/Chapter3.html)[**6.** 第4章 文本和缓冲区](https://aquaregia.gitbooks.io/tmux-productive-mouse-free-development_zh/content/book-content/Chapter4.html)[**7.** 第5章 使用 tmux 结对编程](https://aquaregia.gitbooks.io/tmux-productive-mouse-free-development_zh/content/book-content/Chapter5.html)[**8.** 第6章 工作流](https://aquaregia.gitbooks.io/tmux-productive-mouse-free-development_zh/content/book-content/Chapter6.html)[**9.** 附录 配置文件](https://aquaregia.gitbooks.io/tmux-productive-mouse-free-development_zh/content/book-content/Appendix.html)

[Powered by **GitBook**](https://www.gitbook.com/?utm_source=public_site_legacy&utm_medium=referral&utm_campaign=trademark&utm_term=aquaregia&utm_content=powered_by)

# [tmux-Productive-Mouse-Free-Development_zh](https://aquaregia.gitbooks.io/tmux-productive-mouse-free-development_zh/content/)

# 第 2 章 配置 tmux

tmux 默认的快捷键对我们来说并不友好。许多重要而且有用的功能都使用了一些很难操作的组合键或是冗长的命令字符串。而且 tmux 默认的配色方案眼睛看起来也不舒服。在本章节中，我们会为 tmux 构建一个基本的配置文件并在本书的剩余章节一直使用。首先我们会从定制屏幕导航以及创建、调整面板大小开始，然后讨论如何处理一些更高级的设置。确保你的终端配置正确，这样我们设置的一些 tmux 外观属性也能在你的屏幕上正常显示。完成这些之后，你就会对 tmux 的可扩展性有了更深的理解，然后你可以定制一个你独有的 tmux。下面，我们先从如何配置 tmux 开始。

## 2.1 介绍 .tmux.conf 文件

在默认情况下，tmux 会在两个位置查找配置文件。首先查找 `/etc/tmux.conf` 作为系统配置，然后在当前用户的主目录下查找 `.tmux.conf` 文件（~/.tmux.conf 优先级更高，译者注）。如果这两个文件都不存在，tmux 就会使用默认配置。我们并不需要使用系统配置，所以只需要在主目录下创建一个新的配置文件即可（即 `~/.tmux.conf` 文件）。命令如下：

```
$ touch ~/.tmux.conf
```

在这个文件里可以做任何想让 tmux 做的事情，比如定义新的快捷键，配置一个包含多个窗口、面板，运行着程序的 tmux 默认环境等。我们先从一些基本的选项做起，令 tmux 使用更简单。

### 重新映射大写锁定键（`CAPS LOCK` 键，译者注）

```
在很多键盘上，CAPS LOCK 键就在 a 键旁边。如果把这个键映射为 CTRL 键，你会在使用快捷键时更加方便。

在 OS X 系统中，可以在偏好设置的键盘选项面板里重新映射 CAPS LOCK 键。
你只要按下 Modifier Keys 按钮然后把 CAPS LOCK 键的动作变为 Control。

在 Linux 系统中，这个过程会因你的操作系统而变得稍有些复杂，不过你可以在 Emacs 的维基百科中找到办法。

这个小小的改变为你节省的时间远超你的想象。
```

[Emacs 维基百科](http://www.emacswiki.org/emacs/MovingTheCtrlKey)

### 定义更方便的前缀键

你在之前已经知道 tmux 默认使用 `CTRL-b` 键作为它的命令前缀键。许多使用过 GNU-Screen 的 tmux 用户都是使用 `CTRL-a` 键作为命令前缀键，使用 `CTRL-a` 键是个非常不错的选择因为它更容易同时按下，尤其是如果你把 `CAPS LOCK` 键重新映射为 `CTRL` 键之后，`CTRL-a` 就更容易按下了。它能让你的手常位于键盘的主按键区。

在 `.tmux.conf` 文件里，我们使用 `set-option` 命令来设置选项，可以缩写为 `set`。下面我们就通过命令重新定义命令前缀键：

```
set -g prefix C-a
```

在这个例子里，我们使用了 `-g` 选项，也就是全局配置（global），它能让设置的选项在所有创建的 tmux 会话里生效。

尽管不是必须的，我们可以通过 `unbind-key` 命令或 `unbind` 命令移除之前绑定的组合键。可以在配置文件里输入以下内容来释放 `CTRL-b` 组合键：

```
unbind C-b
```

tmux 并不会实时地自动从配置文件读取你所做的修改。因此如果你在使用 tmux 的过程中修改了 `.tmux.conf` 文件，要想让所做的配置修改生效的话，你需要关闭所有的 tmux 会话，或者在 tmux 命令模式输入 `PREFIX :` 命令然后输入以下内容：

```
source-file ~/.tmux.conf
```

现在就可以使用 `CTRL-a` 键作为命令前缀键了。在剩余章节中，我们还是会继续把它称为 `PREFIX` 键。

### 修改默认延时

当我们向 tmux 发送命令时，tmux 增加了一个小小的延时（也就是在松开 `PREFIX` 键和按下命令键之间的时间，译者注），这个延时是很有可能妨碍其它程序的运行，比如 Vim 编辑器。可以通过设置这个延时而让 tmux 响应地更快。在配置文件中增加下面的内容，将延时设置为 1ms：

```
set -sg escape-time 1
```

当重新载入配置文件后，我们就可以向 tmux 更快地发送快捷键了。

### 设置窗口和面板索引

在第一章里，我们讨论了窗口以及在一个会话里创建多个窗口时如何通过索引切换当前的窗口。这个索引是从 0 开始的，感觉似乎有点恶心（程序员貌似还比较习惯从 0 开始的索引 =。=，译者注）。通过在配置文件里添加下面的内容可以让窗口的索引从 1 开始：

```
set -g base-index 1
```

也就是说，我们可以使用 `PREFIX 1` 快捷键来切换到第一个窗口，而不是 `PREFIX 0`。

还可以通过 `pane-base-index` 选项来设置面板的初始索引。我们把下面这行添加到配置文件中，好让窗口和面板的初始索引保持一致：

```
setw -g pane-base-index 1
```

到目前为止，我们已经学会了使用 `set` 命令来配置 tmux 会话。如果需要配置与窗口进行交互的选项，需要使用 `set-window-option` 命令，可以简写为 `setw` 。在本书中，为了让配置的例子能够在一行内显示，因此我使用的都是命令的简写，你在使用简写时要特别小心，因为一不小心，你就有可能把 `set` 和 `setw` 搞混了。

现在我们再来创建几个更有用的快捷键来加速你的操作。

## 2.2 定制键、命令和用户输入

tmux 里的许多默认快捷键无论是在生理上还是在心理上来说都有些过于延展了。拿 `PREFIX %` 键来说，它不光在键盘上不好按，而且如果不看命令参考的话，你几乎记不住它是用来做什么的。

在本节中，我们将会定义或者重定义一些最常用的 tmux 命令。我们先从自定义一个重新加载 tmux 配置文件的快捷键开始。

### 创建重新加载配置的快捷键

每次我们对配置文件做修改之后，要想让新的配置文件生效，要么关掉所有的 tmux 会话然后重新打开它，要么就要在 tmux 会话里发送一个命令来重新加载配置文件。现在我们来自定义一个快捷键来让它重新加载配置文件。

我们使用 `bind` 命令来定义新的快捷键。先指定要按下的键，后面跟着它要执行的命令。 对于我们的第一个快捷键，我们设置为 `PREFIX r`，让它重新加载当前 tmux 会话的 `.tmux.conf` 配置文件，就像这样：

```
bind r source-file ~/.tmux.conf
```

尽管上面的命令里没有 `PREFIX`，但是在使用 `bind` 命令定义快捷键之后，还是需要在实际中先按下 `PREFIX` 键，然后再按下 `r` 键。虽然我们刚才自定义了重新加载配置文件的快捷键，但是在新的配置文件被加载前我们还是不能使用它，因此还需要再使用一次 `PREFIX :` 快捷键进入命令模式，然后输入以下命令重新加载配置文件：

```
source-file ~/.tmux.conf
```

重新加载配置文件后，tmux 并不会提示配置是否有所改变，可以使用 `display` 命令让 tmux 在状态栏输出一个消息。我们修改一下刚才定义的快捷键，让它能够在配置文件加载后显示一个消息“Reloaded!”：

```
bind r source-file ~/.tmux.conf \; display "Reloaded!"
```

通过在多个命令之间添加 `\;` 符号可以使一个键可以绑定执行多个命令。 通过刚才定义的快捷键，我们就可以在修改配置文件后按下 `PREFIX r` 键让新的配置快速生效。

### 提问：我能定义一个不需要前缀的快捷键吗？

```
当前可以！在 bind 命令后面添加 -n 参数就可以通知 tmux 这个快捷键不需要按下前缀键。例如：

bind-key -n C-r source-file ~/.tmux.conf

通过上面的配置，你就可以使用 CTRL-r 键来重新加载配置文件了。
但是，这么做会让 tmux 会话里的任何程序或命令都禁用组合键，所以使用这种做法时你要特别小心。
```

### 发送前缀键到其它程序

我们在前面把命令前缀键重新映射到了 `CTRL-a` 键，但是例如 Vim、Emacs 甚至是 Bash 终端也会经常用到这个组合键。我们需要配置 tmux，把这个组合键发送给需要的程序中。可以定义一个快捷键来发送 `send-prefix` 命令，就像这样：

```
bind C-a send-prefix
```

在配置生效后，你只需要按两次 `CTRL-a` 键就可以把 `CTRL-a` 命令发送给 tmux 里的程序了。

### 分割面板

tmux 里分割面板的默认键比较难记，所以我们来重新定义为易记的快捷键。我们把水平分割定义为 `PREFIX |` 键，把垂直分割定义为 `PREFIX -` 键：

```
bind | split-window -h
bind - split-window -v
```

乍一看，你可能觉得这两个键搞反了。`split-window` 命令的 `-v` 参数和 `-h` 参数分别代表“垂直（vertical）”分割和“水平（horizontal）”分割，但是对于 tmux 来说，垂直分割表示在当前面板之下创建一个新的面板，所以垂直分割之后的两个面板会上下叠在一起。而水平分割表示在当前面板旁边创建一个新的面板，因此两个面板时左右并排显示在屏幕上的。因此，要想垂直地分割窗口，就要使用“水平”分割；要想水平地分割窗口，就要使用“垂直”分割。

使用新的快捷键会让我们联想起来更加符合视觉感受。如果想要分割窗口，只需现在脑袋里想象你要把窗口分割成什么样子然后按下快捷键。

### 重新映射移动键

使用 `PREFIX o` 键在面板之间移动有点让人讨厌，但是要是使用箭头键（上下左右键，译者注）就意味着必须把手从键盘的主操作区拿开。如果你使用过 Vim 编辑器，你可能会比较熟悉使用 `h`，`j`，`k` 和 `l` 键来回移动。可以把 tmux 里的移动键映射为 Vim 的操作方式。

```
bind h select-pane -L
bind j select-pane -D
bind k select-pane -U
bind l select-pane -R
```

另外，还可以定义 `PREFIX CTRL-h` 键和 `PREFIX CTRL-l` 键在窗口之间循环切换：

```
bind -r C-h select-window -t :-
bind -r C-l select-window -t :+
```

如果你已经把 `CAPS LOCK` 键重新映射到 `CTRL` 键，你现在就可以在窗口和面板之间来回切换而不必把手移出键盘的主操作区。

### 调整面板大小

要调整面板大小，可以进入命令模式然后输入`resize-pane -D` 命令让一个面板向下调整一行的距离。我们可以通过在调整方向的后面添加一个数字来指定要调整的大小，比如 `resize-pane -D 5`。但是这个命令有些啰嗦，我们来定义几个快捷键使得调整面板大小更方便些。

我们在之前使用了 Vim 的移动键来调整窗口大小。现在我们来使用 `PREFIX H`，`PREFIX J`，`PREFIX K` 和 `PREFIX L` 键调整面板的尺寸：

```
bind H resize-pane -L 5
bind J resize-pane -D 5
bind K resize-pane -U 5
bind L resize-pane -R 5
```

注意，上面的配置使用的是大写字母。tmux 是对大小写敏感的，大写字母和小写字母分别表示不同的快捷键。你需要使用 `SHIFT` 键来触发大写字母的快捷键。

使用这样的移动键会帮助我们始终跟随窗口移动的方向。比如，如果有一个分割为两个水平面板的窗口，就像这样：

```
-------------------
|                   |
|      Pane 1       |
|                   |
-------------------
|                   |
|      Pane 2       |
|                   |
-------------------
```

如果想要增加 Pane 1 的大小，那么就可以把光标移动到 Pane 1 里然后按下 `PREFIX J` 键，那么水平分割线就会向下移动。如果按下 `PREFIX K`，就会让水平分割线向上移动。

我们通过逐渐增加的方式来调整面板大小，也就是说每次想要调整面板大小的时候，就需要先按下前缀键。但是如果使用了 `-r` 参数，那么就可以让这个快捷键变为“可重复的（repeatable）”，这意味着只需要按下前缀键一次，然后就可以在最大重复限制范围内持续地按下定义的命令键。修改后的配置如下：

```
bind -r H resize-pane -L 5
bind -r J resize-pane -D 5
bind -r K resize-pane -U 5
bind -r L resize-pane -R 5
```

默认的最大重复限制为 500 毫秒，可以通过设置 `repeat-time` 选项把这个时间改为更大的数值。

现在我们把注意力转移到 tmux 如何与鼠标配合使用。

### 处理鼠标

虽然 tmux 的设计目标是纯键盘操作，但是你会发现有时候使用鼠标更加方便。如果你的终端配置支持使用鼠标的向前单击和滚动切换程序，那么你就可以告诉 tmux 如何处理这些鼠标事件。

有时你可能需要使用鼠标滚轮在终端的缓冲区里向上滚屏，或者你刚开始使用 tmux 时想用鼠标选择窗口和面板。要想在 tmux 里使用鼠标，需要打开鼠标模式：

```
setw -g mode-mouse on
```

还可以配置 tmux，让它能够使用鼠标选择一个面板、调整面板大小或者让我们在窗口列表里选择一个窗口。我们需要配置与刚才类似的配置，就像这样：

```
set -g mouse-select-pane on
set -g mouse-resize-pane on
set -g mouse-select-window on
```

把这些配置添加到配置文件里非常方便，但是你要记住，在 tmux 里使用鼠标会让你的操作速度变慢。尽管使用滚屏和单击功能似乎是个好主意，但是你还是应该学会通过相应的键盘操作切换面板或是在缓冲区里向前或向后移动。所以，在我们的配置文件里会把鼠标选项禁用。可以像这样明确地指明：

```
setw -g mode-mouse off
set -g mouse-select-pane off
set -g mouse-resize-pane off
set -g mouse-select-window off
```

或是简单地禁用全部鼠标选项：

```
setw -g mode-mouse off
```

注: 在新的版本里这一块被重构了, 所以从 2.1 开始只有一个开头, 之前的那些开头都没有用了. 如下:

```
set -g mouse on
```

这样设置可以防止不小心使用鼠标选中了终端窗口而导致的误操作，而且它会使我们更加专注于键盘操作。

tmux 提供的高扩展性配置系统可以高度自定义我们与界面交互的方式，还可以配置它的外观，让它看起来更舒适一些，而且在一些情境中，它还能展示给我们更多的信息。

## 2.3 视图风格

tmux 提供了相当多的方法来定制外观。在本节中，我们会讨论如何配置这些选项，包括配置状态栏和其它面板。我们先配置不同的颜色，然后把乏味的状态栏变成能展示重要信息的工具。

### 配置颜色

为了让 tmux 具有最佳的视觉体验，首先要确保终端和 tmux 都运行在 256 色模式里。我们先来配置终端。

可以使用一个简单的 Perl 脚本来测试终端的色彩模式。命令如下：

```
$ wget http://www.vim.org/scripts/download_script.php?src_id=4568 -O colortest
$ perl colortest -w
```

如果你的配置正确的话，你应该看到终端类似于图5（终端正确显示 256 色）所示。

![图5 - 终端正确显示 256 色](https://aquaregia.gitbooks.io/tmux-productive-mouse-free-development_zh/content/book-content/figure5.jpg)

图5 - 终端正确显示 256 色

如果你使用的是 Linux 系统，你可能需要把下面内容添加到你的 `~/.bashrc` 文件里才能运行一个 256 色的终端：

```
[ -z "$TMUX" ] && export TERM=xterm-256color
```

这个条件语句会确保 `TERM` 变量只在 tmux 外运行，因为 tmux 会自己设置它所在的终端。

如果你使用的是 Mac ，你应该知道在雪豹系统里终端只会显示 16 色。你需要另外安装一个终端，比如 iTerm2 才能得到全色彩支持。

如果无法看见颜色的正确编号，你需要配置你的终端使用 xterm 的 256 色模式。在 iTerm2 终端里，你可以编辑默认的配置文件找到这个选项，然后把终端模式设置为 xterm-256color，就如图6（为 tmux 配置 iTerm2）所示：

![图6 - 为 tmux 配置 iTerm2](https://aquaregia.gitbooks.io/tmux-productive-mouse-free-development_zh/content/book-content/figure6.jpg)

图6 - 为 tmux 配置 iTerm2

另外，你还要保证你的终端模拟器支持显示 UTF-8 字符，只有这样才能让譬如面板分割线的可视元素显示为虚线。

为了让 tmux 以 256 色模式显示内容，需要把下面内容添加到我们的 `.tmux.conf` 文件里：

```
set -g default-terminal "screen-256color"
```

当色彩配置正确配置后，你会发现在 tmux 里运行例如 Vim 之类的程序更加方便了，尤其是如果语法高亮使用了更加丰富的配色方案。你可以在图7（Vim 里 16 色和 256 色对比）里看出差别来。现在就可以来配置 tmux 组件的外观了，我们先从配色开始。

![图7 - Vim 里 16 色和 256 色对比](https://aquaregia.gitbooks.io/tmux-productive-mouse-free-development_zh/content/book-content/figure7.jpg)

图7 - Vim 里 16 色和 256 色对比

### 改变配色

我们可以改变 tmux 交互界面的多个部分的颜色，包括状态栏，窗口列表，命令区域甚至是面板分割线。

tmux 提供了特定颜色的变量，包括 `black`（黑，译者注），`red`（红，译者注），`green`（绿，译者注），`yellow`（黄，译者注），`blue`（蓝，译者注），`magenta`（品红，译者注），`cyan`（蓝绿，译者注），或 `white`（白，译者注）。我们可以使用在 256 色调色板中的 `colour0` 到 `colour255`。如果你再看看 `colortest` 程序的输出结果，你会看到这些颜色的编号。你还可以运行这个简单的 shell 脚本来选择你需要的颜色：

```
for i in {0..255} ; do
    printf "\x1b[38;5;${i}mcolour${i}\n"
done
```

tmux 有特定的配置选项可以更改每个组件的前景色和背景色。我们先从定制状态栏的颜色开始探索。

#### 改变状态栏的颜色

状态栏的默认配色是在亮绿色的背景上显示黑色字体。这看起来有些太乏味了。我们让它变成默认为黑色背景上显示白色的字体。

使用 `status-bg` 和 `status-fg` 选项来设置状态栏的背景色和前景色，可以像这样配置：

```
set -g status-fg white
set -g status-bg black
```

在后面我们会定制状态栏内条目（items）的颜色。现在先来配置窗口列表的颜色。

#### 改变窗口列表配色

我们想让当前活动的窗口显示的更加明显可以设置当前活动窗口的颜色为红色，不活动窗口的颜色为蓝绿色。使用 `set-window-option` 选项来配置普通窗口（regular window）的样式，就像这样：

```
setw -g window-status-fg cyan
setw -g window-status-bg default
setw -g window-status-attr dim
```

可以使用 `default` 作为一个默认值那么这个值就会继承状态栏的颜色。 要配置活动窗口（active window）的样式，可以使用相似的配置：

```
setw -g window-status-current-fg white
setw -g window-status-current-bg red
setw -g window-status-current-attr bright
```

这样就定制了窗口列表的颜色，还可以定制面板分隔符（pane dividers）的颜色。

#### 改变面板分隔符配色

可以指定面板分隔符的颜色，更棒的是，还可以通过定义颜色让当前活动面板变得更显眼，就像图8（活动面板）所示。 ![图8 - 活动面板](https://aquaregia.gitbooks.io/tmux-productive-mouse-free-development_zh/content/book-content/figure8.jpg)

图8 - 活动面板

面板也有前景色和背景色之分，所以我们设置相应的变量：

```
set -g pane-border-fg color
set -g pane-border-bg color

set -g pane-active-border-fg color
set -g pane-active-border-bg color
```

一个面板的前景色就是组成边界的虚线颜色。默认的背景色是黑色，如果让它标记出当前活动面板，就可以让活动面板显得相当突出：

```
set -g pane-border-fg green
set -g pane-border-bg black
set -g pane-active-border-fg white
set -g pane-active-border-bg yellow
```

在修改状态栏前，我们先来润色一下 tmux 命令行。

#### 定制命令行

在 tmux 的命令模式输入 tmux 命令也能看到警告信息，当然也可以定制它的配色。配置方法几乎和配置状态栏相同。

我们把背景色改为黑色，文字颜色设置为白色。当有消息提示时设置它的颜色为亮白色。配置如下：

```
set -g message-fg white
set -g message-bg black
set -g message-attr bright
```

就是这么简单。现在我们来为窗口列表两边的状态栏区域配色。

## 2.4 定制状态栏

tmux 的状态栏能显示非常多的信息。可以通过执行 shell 命令使用预定义的组件（components）或者创建我们自己的组件。

默认的状态栏显示的信息，看起来像是这样：

```
[development] 0:bash* "example.local" 00:44 02-Nov-1
```

在左侧，先看到 tmux 会话的名称，然后后面跟着窗口列表。窗口列表先是显示当前窗口的索引值，然后跟着窗口的名称。在右侧，可以看到服务器的主机名（或者是本机的主机名，译者注），后面跟着日期和时间。下面我们来自定义状态栏的的内容。

### 配置状态栏条目

状态栏包含 3 个组件：一个左面板，窗口列表和一个右面板。我们可以改变状态栏里左侧或右侧面板的内容，这需要使用一个文本和变量的组合。表1（状态栏变量）列出了状态栏里可能用到的变量。

表1 - 状态栏变量

| 变量               | 描述                          |
| ------------------ | ----------------------------- |
| `#H`               | 本地主机的主机名              |
| `#h`               | 本地主机的主机名，没有 domain |
| `#F`               | 当前窗口的标签                |
| `#I`               | 当前窗口的索引                |
| `#P`               | 当前面板的索引                |
| `#S`               | 当前会话的名称                |
| `#T`               | 当前窗口的标题                |
| `#W`               | 当前窗口的名称                |
| `##`               | 一个 # 符号                   |
| `#(shell-command)` | shell 命令的第一行输出        |
| `#[attributes]`    | 要改变的颜色或属性            |

例如，如果想要在左侧显示当前 tmux 会话的名称，就需要使用 `set-option -g status-left` 选项，后面跟着 `#S` 值，就像这样：

```
set -g status-left "#S"
```

还可以通过设置前景色让它显示地更明显，像这样：

```
set -g status-left "#[fg=green]#S"
```

可以向状态栏里添加任何想要的属性和条目。为了便于展示，我们修改了左侧的状态栏，让它显示绿色的会话名称，黄色的窗口编号，以及蓝绿色的当前面板。配置如下：

```
set -g status-left "#[fg=green]#S #[fg=yellow]#I #[fg=cyan]#P"
```

也可以向状态栏里添加任意文字。我们现在添加一些文字，让会话、窗口和面板显示地更突出，像这样：

```
set -g status-left-length 40
set -g status-left "#[fg=green]Session: #S #[fg=yellow]#I #[fg=cyan]#P"
```

我们设置了 `status-left-length` 选项因为指定的输出对默认长度来说太长了，所以我们让那个区域更宽一些。

还可以配置右侧的状态栏。现在我们向它添加当前日期和时间：

```
set -g status-right "#[fg=cyan]%d %b %R"
```

这样配置的日期格式是“13-Jan 13:45”，你可以让它显示任意你想要的格式，可以使用许多编程语言通用的 `strftime()` 时间格式化机制。

在状态栏里开启 UTF-8 支持是个不错的注意，尤其是如果你特别喜欢使用这些字符。

```
set -g status-utf8 on
```

还可以更进一步，通过使用 `#(shell-command)` 变量把 shell 命令加入到状态栏中，在状态栏显示该命令的返回结果。在后续章节会详细介绍这个功能。

### 让状态栏实时更新信息

我们已经把当前时间和一些其它动态信息添加到了状态栏，这时需要告诉 tmux 这些信息的刷新周期。默认配置下，tmux 会每 15 秒刷新一次状态栏。可以通过使用 `set-option -g status-interval` 命令后面加上刷新周期（以秒为单位，译者注）来指定 tmux 的刷新时间，就像这样：

```
set -g status-interval 60
```

这样就会让 tmux 每 60 秒刷新一次状态栏。注意，如果你在状态栏里添加了 shell 命令，这些命令也会在每次状态栏刷新时执行一遍，所以要注意不要加载太多资源密集型的脚本。

### 让窗口列表居中显示

我们还能控制窗口列表显示的位置。默认的，窗口列表是靠左对齐的，通过简单的配置就可以让窗口列表在左右面板之间居中显示：

```
set -g status-justify centre
```

这样配置就会让窗口列表居中显示。创建新窗口时，窗口列表会相应地变换位置，让整个窗口列表显示在状态栏正中间。

### 窗口活动通知

同样的，我们希望如果当前会话的其他窗口里有一些事件发生时我们能够注意到这些事件，那么我们就可以快速响应那个窗口。可以通过增加一个可视化的通知（visual notification）实现这个功能，像这样：

```
setw -g monitor-activity on
set -g visual-activity on
```

现在呢，如果其它窗口里有一些活动，它就会使用蓝绿色的背景色突出显示，就像这里的 webserver 窗口： ![图8-2 - 活动窗口](https://aquaregia.gitbooks.io/tmux-productive-mouse-free-development_zh/content/book-content/figure8-2.jpg)

## 2.5 接下来做什么？

在本章，我们已经构建了一个相当实用的配置文件。你可以在附录 1（本书使用的配置文件）里查看完整的 `~/.tmux.conf` 文件。

在 `~/.tmux.conf` 文件里可以定义许多附加选项。例如，在第 3 章我们会讨论如何使用特定项目的配置文件（project-specific configuration files）设置一个自定义的工作环境。

另外，你可以为你的系统定制一个默认配置，它位于 `/etc/tmux.conf`。如果你配置了一个共享服务器让你的团队成员可以合作，或者只是想让系统的每个用户都有一些预设配置时，这时定制一个系统配置文件最好不过了。

现在我们已经有了一个定义好的配置，让我们回顾一下是如何通过脚本创建我们自己的开发环境的，而且设置好之后一劳永逸，无需每次重新配置。

### 以备查阅

| 命令                                  | 描述                                                         |
| ------------------------------------- | ------------------------------------------------------------ |
| `set -g prefix C-a`                   | 设置前缀键为 CTRL-a                                          |
| `set -sg escape-time n`               | 设置 tmux 等待前缀键和命令键之间的时间间隔（毫秒）           |
| `source-file [file]`                  | 加载一个配置文件。重新加载当前配置文件或以后加入附加配置选项。 |
| `bind C-a send-prefix`                | 两次按下 `PREFIX` 键后向 tmux 发送组合键                     |
| `bind-key [key] [command]`            | 新建一个快捷键，执行指定的 command。可简写为 `bind`          |
| `bind-key -r [key] [command]`         | 新建一个可重复的快捷键，就是说只需按下一次 `PREFIX` 键之后就可以重复地按下命令键。当你想要在元素之间循环移动或调整面板大小时非常有用。可简写为 `bind` |
| `unbind-key [key]`                    | 移除一个定义的快捷键，让它绑定到其它命令。可简写为 `unbind`  |
| `display-message` 或 `display`        | 在状态消息里显示给定的文字                                   |
| `set-option [flags] [option] [value]` | 配置会话选项。使用 `-g` 选项可作为全局配置                   |
| `set-window-option [option] [value]`  | 配置窗口选项，例如活动通知，光标移动，或其它与窗口和面板相关的元素 |
| `set -a`                              | 把值添加到当前选项而不是替换选项的值                         |

