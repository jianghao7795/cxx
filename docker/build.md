# 前言

之前项目部署都在运维直接处理，一直没有详细的了解部署，于是最近就好好的研究下Go项目的部署，本文主要记录一下使用 Docker 部署 Go 项目的流程。需要的朋友可以参考以下内容，希望对大家有帮助。

# 环境准备

- go项目
- Docker，如果之前没有用过docker的小伙伴可以参考[www.runoob.com/docker/dock…](https://link.juejin.cn?target=https%3A%2F%2Fwww.runoob.com%2Fdocker%2Fdocker-tutorial.html)

# 构建项目

首先在本地正常的创建一个go项目，这里以gin为例。为了省时间就用之前建的一个demo为例：

git下载源码：[github.com/mwqnice/gin…](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fmwqnice%2Fgin-demo)

# 编写Dockerfile

```bash
bash复制代码#依赖镜像
FROM golang:1.15-alpine

#作者信息
MAINTAINER "mwqnice"

# 配置模块代理
ENV GO111MODULE=on
ENV GOPROXY=https://goproxy.cn,direct

#工作目录
WORKDIR /opt
ADD .  /opt

#在Docker工作目录下执行命令
RUN go build -o main ./main.go

#暴露端口
EXPOSE 8080

#执行项目的命令
CMD ["/opt/main"]
```

说明：

- `FROM golang:1.15-alpine `：将golang:1.15-alpine用作此Docker构建的基础镜像，和自己使用的go版本进行统一。
- `WORKDIR` 是将项目放到容器中的位置
- `ADD ./opt` 将项目中的所有文件放入容器的opt文件下
- `RUN go build -o main ./main.go` 生成二进制文件
- `EXPOSE 8888` 暴露端口
- `CMD ["/opt/main"]` 执行项目的命令

# 构建镜像

基本语法：

```shell
docker build -t [镜像名] [Dockerfile所在目录]
```

具体示例：

```erlang
erlang
复制代码docker build -t gin-demo .
```

# 运行容器

```arduino
arduino
复制代码docker run -d -p 8080:8080 gin-demo 
```

成功执行后，该命令会返回类似af233da7afe9e330f119a834119eff74c2c7e3c4e908dde8c89f41c903f6d531这样的字符串，这个是运行的容器的ID，也叫container id。

# 测试

浏览器访问：[http://localhost:8080/b](https://link.juejin.cn?target=http%3A%2F%2Flocalhost%3A8080%2Fb)

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9799712dbc0b4bd0b1d9370ac63b607b~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

ok 大功告成！

# 小结

通过以上的内容我们可以总结docker构建go项目的基本流程如下：

1. 环境准备
2. 编写go项目代码，并通过可用性测试。
3. 编写Dockerfile文件。
4. 使用Dockerfile构建Docker镜像
5. 查看构建结果并运行
6. 测试新建的Docker镜像



, personalAccessToken: '${CD_PERSONAL_ACCESS_TOKEN}'