.tmux.conf文件

```perl
set -g base-index 1
#允许鼠标操作
set -g mouse on  
set -g status-right "#{?pane_synchronized,[S],}[#(date)]" 
set -g status-interval 1
setw -g monitor-activity on
set -g history-limit 10000
set -g default-terminal "screen-256color"
#去除默认的前置键 ctrl + b
unbind C-b
#绑定前置键为 Alt + b
set -g prefix M-b
bind M-b send-prefix
#set -g set-remain-on-exit on
bind z confirm-before -p"kill-session #S? (y/n)" kill-session
#m键最大化窗口
bind m resize-pane -Z
# use twice to clear all buffer
#bind ` send C-l \; clearhist
bind -T root WheelUpPane copy-mode -e \; send-keys -M
#bind -t emacs-copy MouseDown3Pane cancel
unbind -n MouseDown3Pane
bind -T root MouseDown3Pane if-shell -F -t = "#{pane_in_mode}" "send-keys -M" "paste-buffer"
#+ 键将当前窗口分成4个窗口
bind + splitw -vp 50 \; splitw -hdp 50 \; selectp -U \; splitw -hdp 50
# | 垂直分割
bind | split-window -h
# - 水平分割
bind - split-window -v
# u 删除所有窗口
bind u killp -a -t 0
#bind r respawnp -k
#reload tmux config file
bind r source-file ~/.tmux.conf
bind F11 splitw -hp 67 \; splitw -hp 50
bind F10 splitw -vdp 50 \; splitw -hp 67 \; splitw -hp 50 \; selectp -U \; splitw -hp 67 \; splitw -hp 50
bind -T root C-F1 send 'tcpdump -i eth2 port 80 or 8080 or 443 -Sn' Enter
bind -T root F12  if -F "#{pane_synchronized}" "setw synchronize-panes off" "setw synchronize-panes on"
bind -T root C-6  send 'systemctl -l status nodesupervisor' Enter
setw -g mode-keys vi
# Vim style pane selection

bind h select-pane -L
bind j select-pane -D
bind k select-pane -U
bind l select-pane -R
# Use Alt-vim keys without prefix key to switch panes
# Alt + h 光标左移到左边窗口,无需提前按Alt + b
bind -n M-h select-pane -L
bind -n M-j select-pane -D
bind -n M-k select-pane -U
bind -n M-l select-pane -R
# Use Alt-arrow keys without prefix key to switch panes
bind -n M-Left select-pane -L
bind -n M-Right select-pane -R
bind -n M-Up select-pane -U
bind -n M-Down select-pane -D

bind P paste-buffer
#bind-key -t vi-copy 'v' begin-selection
#bind-key -t vi-copy 'y' copy-selection
#bind-key -t vi-copy 'r' rectangle-toggle

# Shift arrow to switch windows
bind -n M-q  previous-window
bind -n M-w next-window

#alt +b, alt+K 键上移窗口
bind -r K resizep -U 10 # upward (prefix Ctrl+k)
bind -r J resizep -D 10 # downward (prefix Ctrl+j)
bind -r H resizep -L 10 # to the left (prefix Ctrl+h)
bind -r L resizep -R 10 # to the right (prefix Ctrl+l)

set -wg allow-rename off
set -wg automatic-rename off
```