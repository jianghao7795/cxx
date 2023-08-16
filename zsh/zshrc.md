# Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zshrc.

# Initialization code that may require console input (password prompts, [y/n]

# confirmations, etc.) must go above this block; everything else may go below.

# if [[-r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"]]; then

# source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"

# fi

# If you come from bash you might have to change your $PATH.

# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.

export ZSH="/home/jianghao/.oh-my-zsh"
export PYTHON_CONFIGURE_OPTS="--enable-shared"

# Set name of the theme to load --- if set to "random", it will

# load a random theme each time oh-my-zsh is loaded, in which case,

# to know which specific one was loaded, run: echo $RANDOM_THEME

# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes

# ZSH_THEME="powerlevel10k/powerlevel10k"

ZSH_THEME="geoffgarside"

# POWERLEVEL9K_MODE="nerdfont-complete"

# Set list of themes to pick from when loading at random

# Setting this variable when ZSH_THEME=random will cause zsh to load

# a theme from this variable instead of looking in $ZSH/themes/

# If set to an empty array, this variable will have no effect.

# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

# Uncomment the following line to use case-sensitive completion.

# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion.

# Case-sensitive completion must be off. \_ and - will be interchangeable.

# HYPHEN_INSENSITIVE="true"

# Uncomment one of the following lines to change the auto-update behavior

# zstyle ':omz:update' mode disabled # disable automatic updates

# zstyle ':omz:update' mode auto # update automatically without asking

# zstyle ':omz:update' mode reminder # just remind me to update when it's time

# Uncomment the following line to change how often to auto-update (in days).

# zstyle ':omz:update' frequency 13

# Uncomment the following line if pasting URLs and other text is messed up.

# DISABLE_MAGIC_FUNCTIONS="true"

# Uncomment the following line to disable colors in ls.

# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.

# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.

# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.

# You can also set it to another string to have that shown instead of the default red dots.

# e.g. COMPLETION_WAITING_DOTS="%F{yellow}waiting...%f"

# Caution: this setting can cause issues with multiline prompts in zsh < 5.7.1 (see #5765)

# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files

# under VCS as dirty. This makes repository status check for large repositories

# much, much faster.

# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time

# stamp shown in the history command output.

# You can set one of the optional three formats:

# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"

# or set a custom format using the strftime function format specifications,

# see 'man strftime' for details.

# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?

# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load?

# Standard plugins can be found in $ZSH/plugins/

# Custom plugins may be added to $ZSH_CUSTOM/plugins/

# Example format: plugins=(rails git textmate ruby lighthouse)

# Add wisely, as too many plugins slow down shell startup.

plugins=(git autojump zsh-autosuggestions zsh-syntax-highlighting)

source $ZSH/oh-my-zsh.sh

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment

# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions

# if [[-n $SSH_CONNECTION]]; then

# export EDITOR='vim'

# else

# export EDITOR='mvim'

# fi

# Compilation flags

# export ARCHFLAGS="-arch x86_64"

# Set personal aliases, overriding those provided by oh-my-zsh libs,

# plugins, and themes. Aliases can be placed here, though oh-my-zsh

# users are encouraged to define aliases within the ZSH_CUSTOM folder.

# For a full list of active aliases, run `alias`.

#

# Example aliases

# alias zshconfig="mate ~/.zshrc"

# alias ohmyzsh="mate ~/.oh-my-zsh"

alias cls='clear'
alias ll='ls -l -h'
alias la='ls -a'
alias vi='vim'
alias javac="javac -J-Dfile.encoding=utf8"
alias grep="grep --color=auto"
alias -s html=mate # 在命令行直接输入后缀为 html 的文件名，会在 TextMate 中打开
alias -s rb=mate # 在命令行直接输入 ruby 文件，会在 TextMate 中打开
alias -s py=vi # 在命令行直接输入 python 文件，会用 vim 中打开，以下类似
alias -s js=vi
alias -s c=vi
alias -s java=vi
alias -s txt=vi
alias -s gz='tar -xzvf'
alias -s tgz='tar -xzvf'
alias -s zip='unzip'
alias -s bz2='tar -xjvf'
alias cp="cp -i"
alias python="/usr/local/bin/python3"

# alias git="LANG=en_US git"

[[-s ~/.autojump/etc/profile.d/autojump.sh]] && . ~/.autojump/etc/profile.d/autojump.sh
export PATH=$PATH:/usr/local/go/bin:~/.cargo/bin:~/go/bin
export GO111MODULE=auto
export GOPATH=~/go
export GOROOT=/usr/local/go
export GOPROXY=https://proxy.golang.com.cn,direct
export GONOPROXY=https://turing.haplox.net
export GOPRIVATE=turing.haplox.net

# export PNPM_HOME="/home/jianghao/.local/share/pnpm"

# export PATH="$PNPM_HOME:$PATH"

# Add RVM to PATH for scripting. Make sure this is the last PATH variable change.

CHROME_EXECUTABLE=/opt/apps/cn.google.chrome/files/chrome
export CHROME_EXECUTABLE
export PATH="$PATH:$HOME/.rvm/bin:$HOME/.rvm/scripts/rvm"
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
export PATH=$HOME/flutter/flutter/bin:$PATH

# pnpm

export PNPM_HOME="/home/jianghao/.local/share/pnpm"
export PATH="$PNPM_HOME:$PATH"

# pnpm end



LANGUAGE=en_US
LANG=en_US.UTF-8

# 检查系统是否完全运行
systemctl is-system-running

# 关闭并停止系统
sudo systemctl halt
# 关闭并切断系统电源
sudo systemctl poweroff
# 关闭并重启系统
sudo systemctl reboot
# 用 kexec 关闭并重启系统
sudo systemctl kexec

# 暂停系统
sudo systemctl suspend
# 使系统休眠
sudo systemctl hibernate
# 休眠并暂停系统休眠并暂停系统
sudo systemctl hybrid-sleep
# 暂停系统，在一段时间后唤醒，然后休眠
sudo systemctl suspend-then-hibernate

# 进入系统默认模式
sudo systemctl default
# 进入系统救援模式
sudo systemctl rescue
# 进入系统紧急模式
sudo systemctl emergency
