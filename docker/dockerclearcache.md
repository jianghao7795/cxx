# Docker 深度清除镜像缓存

一般情况下，运维清理镜像是通过命令 docker rm i 删除镜像的。但是这条命令不会删除docker build命令产生的缓存文件。这个时候需要使用 docker system 的系列命令来做相关处理。

```shell
shell复制代码docker system --help
# 输出
Usage:  docker system COMMAND

Manage Docker

Commands:
  df          Show docker disk usage
  events      Get real time events from the server
  info        Display system-wide information
  prune       Remove unused data

Run 'docker system COMMAND --help' for more information on a command.
```

## 操作流程

例如，我们先使用命令查看一下缓存情况：

```bash
bash

复制代码docker system df 
```

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bfb4c89828be485ea28246beaa093eed~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

可以发现，存在大量使用 docker build 命令时产生的镜像缓存 (Build Cache) ，下面使用命令 prune 将其彻底清理。

```shell
shell复制代码docker system prune --help
# 输出
Flag shorthand -h has been deprecated, please use --help

Usage:  docker system prune [OPTIONS]

Remove unused data

Options:
  -a, --all             Remove all unused images not just dangling ones
      --filter filter   Provide filter values (e.g. 'label=<key>=<value>')
  -f, --force           Do not prompt for confirmation
      --volumes         Prune volumes
```

执行命令

```css
css

复制代码docker system prune -a --force
```

对应 -a 删除全部未使用的镜像，-f 或 --force 不经过确认强行删除。

再检查一下缓存情况，使用命令

```bash
bash

复制代码docker system df
```

输出

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/864bd754bb694a2aa4c68a371e2f6024~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

我们看到，Build Cache 已被完全清除，达成目的。

## 后续优化策略：

1. 运维可以将本条命令写入定时任务，比如每周清除一次，减轻磁盘压力。
2. 可以使用 --filter 指定变量，定向清除对应 label 的镜像缓存，可以参考官方文档。



作者：huaiby
链接：https://juejin.cn/post/7041119023286730782
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。Docker 深度清除镜像缓存

一般情况下，运维清理镜像是通过命令 docker rm i 删除镜像的。但是这条命令不会删除docker build命令产生的缓存文件。这个时候需要使用 docker system 的系列命令来做相关处理。

```shell
shell复制代码docker system --help
# 输出
Usage:  docker system COMMAND

Manage Docker

Commands:
  df          Show docker disk usage
  events      Get real time events from the server
  info        Display system-wide information
  prune       Remove unused data

Run 'docker system COMMAND --help' for more information on a command.
```

## 操作流程

例如，我们先使用命令查看一下缓存情况：

```bash
bash

复制代码docker system df 
```

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bfb4c89828be485ea28246beaa093eed~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

可以发现，存在大量使用 docker build 命令时产生的镜像缓存 (Build Cache) ，下面使用命令 prune 将其彻底清理。

```shell
shell复制代码docker system prune --help
# 输出
Flag shorthand -h has been deprecated, please use --help

Usage:  docker system prune [OPTIONS]

Remove unused data

Options:
  -a, --all             Remove all unused images not just dangling ones
      --filter filter   Provide filter values (e.g. 'label=<key>=<value>')
  -f, --force           Do not prompt for confirmation
      --volumes         Prune volumes
```

执行命令

```css
css

复制代码docker system prune -a --force
```

对应 -a 删除全部未使用的镜像，-f 或 --force 不经过确认强行删除。

再检查一下缓存情况，使用命令

```bash
bash

复制代码docker system df
```

输出

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/864bd754bb694a2aa4c68a371e2f6024~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

我们看到，Build Cache 已被完全清除，达成目的。

## 后续优化策略：

1. 运维可以将本条命令写入定时任务，比如每周清除一次，减轻磁盘压力。
2. 可以使用 --filter 指定变量，定向清除对应 label 的镜像缓存，可以参考官方文档。