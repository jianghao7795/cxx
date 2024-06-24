2.创建并运行容器

docker run --name mysql01 -d -p 3306:3306 -v /home/mysql/conf:/etc/mysql/conf.d -v /home/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 mysql:5.7
sudo docker run --name mariadb -d -p 3310:3306 -v /home/mysql/conf:/etc/mysql/conf.d -v /home/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 mariadb

docker run --name mysql -d -p 3306:3306 -v /root/mysql/conf:/etc/mysql/conf.d -v /root/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 mysql

 docker run -itd --name redis -p 6379:6379 redis

docker run --name mysql8 -d -e MYSQL_ROOT_PASSWORD=123456 -p 3316:3306 mysql:latest

解析：

--name mysql01 # 对容器的命名
-d #后台运行
-p 3310:3306 #对外暴露端口号 3310
-v /home/mysql/conf:/etc/mysql/conf.d #配置文件挂载到当前宿主机的/home/mysql/conf
-v /home/mysql/data:/var/lib/mysql #数据挂载到当前宿主机的 /home/mysql/data
-e MYSQL_ROOT_PASSWORD=123456 #设置 mysql 的 root 用户的密码是：·123456

mysql:latest #镜像 REPOSTORY:TAG

docker inspect mysql8 | grep Mounts -A 20

**docker inspect :** 获取容器/镜像的元数据。

**docker inspect :** 获取容器/镜像的元数据。

### 语法

```
docker inspect [OPTIONS] NAME|ID [NAME|ID...]
```

OPTIONS 说明：

- **-f :**指定返回值的模板文件。
- **-s :**显示总的文件大小。
- **--type :**为指定类型返回 JSON。

### 实例

获取镜像 mysql:5.6 的元信息。

```shell
runoob@runoob:~$ docker inspect mysql:5.6
[
    {
        "Id": "sha256:2c0964ec182ae9a045f866bbc2553087f6e42bfc16074a74fb820af235f070ec",
        "RepoTags": [
            "mysql:5.6"
        ],
        "RepoDigests": [],
        "Parent": "",
        "Comment": "",
        "Created": "2016-05-24T04:01:41.168371815Z",
        "Container": "e0924bc460ff97787f34610115e9363e6363b30b8efa406e28eb495ab199ca54",
        "ContainerConfig": {
            "Hostname": "b0cf605c7757",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "ExposedPorts": {
                "3306/tcp": {}
            },
...
```

获取正在运行的容器 mymysql 的 IP。

```shell
runoob@runoob:~$ docker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' mymysql
172.17.0.3
```
