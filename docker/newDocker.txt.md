导出mysql 数据
 sudo docker exec -it mysql57 mysqldump -uroot -p123456 gva > /home/jianghao/gva.sql

sudo docker exec -it  mysql_server【docker容器名称/ID】 mysqldump -uroot -p123456【数据库密码】 test_db【数据库名称】 > /opt/sql_bak/test_db.sql【导出表格路径】

导入
docker exec -i  mysql_server【docker容器名称/ID】 mysqltest_db_copy【数据库名称】 < /opt/sql_bak/test_db.sql【本地数据表路径】



**1. 查看Docker版本**

```shell
$ docker version
Shell
```

它用于查看Docker的客户端和服务器版本。如下图所示。

**2. 从Docker文件构建Docker映像**

```shell
$ docker build -t image-name docker-file-location
Shell

docker build -t server .
```

*-t*：它用于指定使用提供的名称来标记Docker映像。

**3. 运行Docker映像**

```shell
$ docker run -d image-name
Shell
```

*-d*：用于创建守护程序进程。

**4. 查看可用的Docker映像**

```shell
$ docker images
Shell
```

**5. 查看最近的运行容器**

```shell
$ docker ps -l
Shell
```

*-l*：它用于显示最新的可用容器。

**6. 查看所有正在运行的容器**

```shell
$ docker ps -a
Shell
```

*-a*：它用于显示所有可用的容器。

**7. 停止运行容器**

```shell
$ docker stop container_id
Shell
```

*container_id*：由Docker分配给容器的Id。

**8. 删除一个映像**

```shell
$ docker rmi image-name
Shell
```

**9. 删除所有映像**

```shell
$ docker rmi $(docker images -q)
Shell
```

**10. 强制删除所有映像**

```shell
$ docker rmi -r $(docker images -q)
Shell
```

*-r*：用于强制删除映像。

**11. 删除所有容器**

```shell
$ docker rm $(docker ps -a -q)
Shell
```

**12. 进入Docker容器**

```shell
$ docker exec -it container-id bash
```



获取镜像

```shell
docker pull [选项] [Docker Registry 地址[:端口号]/]仓库名[:标签]
```

镜像体积

```shell
docker system df
```

