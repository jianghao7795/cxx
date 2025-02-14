**下面看下nginx.conf长啥样并对一些指令做个解释：**

```shell
shell

 代码解读
复制代码# 注意：有些指令是可以在不同指令块使用的（需要时可以去官网看看对应指令的作用域）。我这里只是演示
# 这里我以/usr/local/nginx/conf/nginx.conf文件为例

[root@localhost /usr/local/nginx]# cat /usr/local/nginx/conf/nginx.conf

#user  nobody; # 指定Nginx Worker进程运行用户以及用户组，默认由nobody账号运行
worker_processes  1;  # 指定工作进程的个数，默认是1个。具体可以根据服务器cpu数量进行设置， 比如cpu有4个，可以设置为4。如果不知道cpu的数量，可以设置为auto。 nginx会自动判断服务器的cpu个数，并设置相应的进程数
#error_log  logs/error.log;  # 用来定义全局错误日志文件输出路径，这个设置也可以放入http块，server块，日志输出级别有debug、info、notice、warn、error、crit可供选择，其中，debug输出日志最为最详细，而crit输出日志最少。
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info; # 指定error日志位置和日志级别
#pid        logs/nginx.pid;  # 用来指定进程pid的存储文件位置

events {
    accept_mutex on;   # 设置网路连接序列化，防止惊群现象发生，默认为on
    
    # Nginx支持的工作模式有select、poll、kqueue、epoll、rtsig和/dev/poll，其中select和poll都是标准的工作模式，kqueue和epoll是高效的工作模式，不同的是epoll用在Linux平台上，而kqueue用在BSD系统中，对于Linux系统，epoll工作模式是首选
    use epoll;
    
    # 用于定义Nginx每个工作进程的最大连接数，默认是1024。最大客户端连接数由worker_processes和worker_connections决定，即Max_client=worker_processes*worker_connections在作为反向代理时，max_clients变为：max_clients = worker_processes *worker_connections/4。进程的最大连接数受Linux系统进程的最大打开文件数限制，在执行操作系统命令“ulimit -n 65536”后worker_connections的设置才能生效
    worker_connections  1024; 
}

# 对HTTP服务器相关属性的配置如下
http {
    include       mime.types; # 引入文件类型映射文件 
    default_type  application/octet-stream; # 如果没有找到指定的文件类型映射 使用默认配置 
    # 设置日志打印格式
    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';
    # 
    #access_log  logs/access.log  main; # 设置日志输出路径以及 日志级别
    sendfile        on; # 开启零拷贝 省去了内核到用户态的两次copy故在文件传输时性能会有很大提升
    #tcp_nopush     on; # 数据包会累计到一定大小之后才会发送，减小了额外开销，提高网络效率
    keepalive_timeout  65; # 设置nginx服务器与客户端会话的超时时间。超过这个时间之后服务器会关闭该连接，客户端再次发起请求，则需要再次进行三次握手。
    #gzip  on; # 开启压缩功能，减少文件传输大小，节省带宽。
    sendfile_max_chunk 100k; #每个进程每次调用传输数量不能大于设定的值，默认为0，即不设上限。
    
    # 配置你的上游服务（即被nginx代理的后端服务）的ip和端口/域名
    upstream backend_server { 
        server 172.30.128.65:8080;
        server 172.30.128.65:8081 backup; #备机
    }

    server {
        listen       80; #nginx服务器监听的端口
        server_name  localhost; #监听的地址 nginx服务器域名/ip 多个使用英文逗号分割
        #access_log  logs/host.access.log  main; # 设置日志输出路径以及 级别，会覆盖http指令块的access_log配置
        
        # location用于定义请求匹配规则。 以下是实际使用中常见的3中配置（即分为：首页，静态，动态三种）
       
        # 第一种：直接匹配网站根目录，通过域名访问网站首页比较频繁，使用这个会加速处理，一般这个规则配成网站首页，假设此时我们的网站首页文件就是： usr/local/nginx/html/index.html
        location = / {  
            root   html; # 静态资源文件的根目录 比如我的是 /usr/local/nginx/html/
            index  index.html index.htm; # 静态资源文件名称 比如：网站首页html文件
        }
        # 第二种：静态资源匹配（静态文件修改少访问频繁，可以直接放到nginx或者统一放到文件服务器，减少后端服务的压力），假设把静态文件我们这里放到了 usr/local/nginx/webroot/static/目录下
        location ^~ /static/ {
            alias /webroot/static/; 访问 ip:80/static/xxx.jpg后，将会去获取/url/local/nginx/webroot/static/xxx.jpg 文件并响应
        }
        # 第二种的另外一种方式：拦截所有 后缀名是gif,jpg,jpeg,png,css.js,ico这些 类静态的的请求，让他们都去直接访问静态文件目录即可
        location ~* \.(gif|jpg|jpeg|png|css|js|ico)$ {
            root /webroot/static/;
        }
        # 第三种：用来拦截非首页、非静态资源的动态数据请求，并转发到后端应用服务器 
        location / {
            proxy_pass http://backend_server; #请求转向 upstream是backend_server 指令块所定义的服务器列表
            deny 192.168.3.29; #拒绝的ip （黑名单）
            allow 192.168.5.10; #允许的ip（白名单）
        }
        
        # 定义错误返回的页面，凡是状态码是 500 502 503 504 总之50开头的都会返回这个 根目录下html文件夹下的50x.html文件内容
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
        
    }
    # 其余的server配置 ,如果有需要的话
    #server {
        ......
    #    location / {
               ....
    #    }
    #}
    
    # include /etc/nginx/conf.d/*.conf;  # 一般我们实际使用中有很多配置，通常的做法并不是将其直接写到nginx.conf文件，
    # 而是写到新文件 然后使用include指令 将其引入到nginx.conf即可，这样使得主配置nginx.conf文件更加清晰。
    
}
```

以上就是nginx.conf文件的配置了