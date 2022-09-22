curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun // 自动安装源

docker run -i -t ubuntu:15.10 /bin/bash  //运行交互式的容器

启动容器（后台模式）
docker run -d ubuntu:15.10 /bin/sh -c "while true; do echo hello world; sleep 1; done"


docker ps // 查看容器

CONTAINER ID: 容器 ID。

IMAGE: 使用的镜像。

COMMAND: 启动容器时运行的命令。

CREATED: 容器的创建时间。

STATUS: 容器状态。
状态
created（已创建）
restarting（重启中）
running 或 Up（运行中）
removing（迁移中）
paused（暂停）
exited（停止）
dead（死亡）

docker images // 镜像

docker search // 搜索

docker ps -aq // 列出所有容器ID
docker ps -a // 查看所有运行或者不运行容器

删除images（镜像），通过image的id来指定删除谁 docker rmi <image id> 


docker exec -it mynginx bash // 进入运行的容器
-i: 交互式操作。
-t: 终端。
mynginx ubuntu:15.10: 这是指用 ubuntu 15.10 版本镜像为基础来启动容器。
bash：放在镜像名后的是命令，这里我们希望有个交互式 Shell，因此用的是 /bin/bash。

docker run -d -p80:80 --name mynginx nginx // 下载镜像 运行容器 重命名文 --name name

docker-compose
url:https://www.bilibili.com/video/BV1Wt411w72h
docker-compose up -d

docker tag : 标记本地镜像，将其归入某一仓库。


docker build 命令用于使用 Dockerfile 创建镜像。
语法： docker build [OPTIONS] PATH | URL | -

-f :指定要使用的Dockerfile路径；
 -t: 镜像的名字及标签，通常 name:tag 或者 name 格式；可以在一次构建中为一个镜像设置多个标签。

 docker push : 将本地的镜像上传到镜像仓库
 
 docker run -i -t 运行交互式的容器
 docker run -d 启动容器（后台模式）
  docker ps 查看运行的容器
  
  # 进入容器
docker exec -it mysql bash

docker start 容器ID 启动容器
docker run -itd --name ubuntu-test<NAMES> ubuntu<IMAGE> /bin/bash 后台运行容器
docker stop <容器 ID> 停止容器
docker restart <容器 ID> 重启容器
docker attach <容器 ID> 进入容器
docker exec -it <容器 ID> /bin/bash 进入容器

导出和导入容器

如果要导出本地某个容器，可以使用 docker export 命令
docker export <容器 ID> ubuntu.tar

拖取镜像
docker pull 镜像名
删除镜像
docker rmi 镜像名