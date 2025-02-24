### **常用选项速查表**

| 选项             | 用途                              |
| :--------------- | :-------------------------------- |
| `-X <METHOD>`    | 指定 HTTP 方法（如 GET/POST/PUT） |
| `-d <DATA>`      | 发送 POST 数据                    |
| `-H <HEADER>`    | 添加请求头                        |
| `-o <FILE>`      | 输出到文件                        |
| `-O`             | 下载文件并保留远程文件名          |
| `-L`             | 自动跟随重定向                    |
| `-b <COOKIE>`    | 发送 Cookies                      |
| `-c <FILE>`      | 保存 Cookies 到文件               |
| `-u <USER:PASS>` | 基本认证                          |
| `-v`             | 显示详细通信过程                  |
| `-k`             | 忽略 SSL 错误                     |

**示例场景**：

```shell
# 下载文件并保存为自定义名称
curl -o image.jpg https://example.com/photo.jpg

# 发送带 JSON 头的 POST 请求，并跟随重定向
curl -d '{"query":"hello"}' -H "Content-Type: application/json" -L -X POST https://api.example.com/search

# 使用代理和 Cookie 访问需要登录的页面
curl -x http://proxy:8080 -b cookies.txt https://example.com/profile
```

### **1. 基础请求**

- **GET 请求**（默认方法）：

  bash

  复制

  ```shell
  curl https://example.com
  ```

- **保存响应到文件**：

  bash

  复制

  ```shell
  curl -o output.html https://example.com  # 指定文件名
  curl -O https://example.com/file.zip     # 保留远程文件名
  ```

------

### **2. POST 请求**

- **发送表单数据**（`Content-Type: application/x-www-form-urlencoded`）：

  bash

  复制

  ```shell
  curl -d "name=John&age=30" -X POST https://example.com/submit
  ```

- **发送 JSON 数据**（需手动设置头）：

  bash

  复制

  ```shell
  curl -d '{"key":"value"}' -H "Content-Type: application/json" -X POST https://example.com/api
  ```

- **从文件读取 POST 数据**：

  bash

  复制

  ```shell
  curl -d "@data.json" -X POST https://example.com/submit
  ```

------

### **3. 设置请求头**

- **自定义请求头**：

  bash

  复制

  ```shell
  curl -H "Authorization: Bearer token123" -H "User-Agent: MyApp/1.0" https://api.example.com
  ```

------

### **4. 处理 Cookies**

- **保存响应中的 Cookies 到文件**：

  bash

  复制

  ```shell
  curl -c cookies.txt https://example.com/login
  ```

- **使用 Cookies 发送后续请求**：

  bash

  复制

  ```shell
  curl -b cookies.txt https://example.com/dashboard
  ```

------

### **5. 认证**

- **基本认证（用户名密码）**：

  bash

  复制

  ```shell
  curl -u username:password https://api.example.com
  ```

- **Bearer Token 认证**：

  bash

  复制

  ```shell
  curl -H "Authorization: Bearer YOUR_TOKEN" https://api.example.com/data
  ```

------

### **6. 处理重定向**

- **自动跟随重定向**：

  bash

  复制

  ```shell
  curl -L https://example.com  # 默认不跟随，-L 启用
  ```

------

### **7. 调试与详细信息**

- **显示请求详情**（包括请求头/响应头）：

  bash

  复制

  ```shell
  curl -v https://example.com
  ```

- **仅显示响应头**：

  bash

  复制

  ```shell
  curl -I https://example.com
  ```

------

### **8. 文件上传**

- **上传文件（表单）**：

  bash

  复制

  ```sh
  curl -F "file=@/path/to/file.jpg" https://example.com/upload
  ```

- **上传文件（二进制 PUT）**：

  bash

  复制

  ```sh
  curl -T file.txt https://example.com/upload
  ```

------

### **9. 代理设置**

- **通过代理发送请求**：

  bash

  复制

  ```sh
  curl -x http://proxy-server:8080 https://example.com
  ```

------

### **10. 忽略 SSL 证书验证**（测试环境用）

bash

复制

```sh
curl -k https://example.com  # 跳过证书验证（不安全！）
```