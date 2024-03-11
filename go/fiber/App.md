# 🚀 App

App 实例通常表示 Fiber 应用程序。

## Static

使用 **Static** 方法来服务静态文件，例如 **images**，**CSS,** 和 **JavaScript**。

> 提示：默认情况下，**Static** 将在响应目录上的请求时提供 `index.html` 文件。

**签名：**

```go
func (app *App) Static(prefix, root string, config ...Static) Router
```

使用以下代码在名为`./public` 的目录中提供文件

**示例：**

```go
app.Static("/", "./public")

// => http://localhost:3000/hello.html
// => http://localhost:3000/js/jquery.js
// => http://localhost:3000/css/style.css
```

**示例：**

```go
// Serve files from multiple directories
app.Static("/", "./public")

// Serve files from "./files" directory:
app.Static("/", "./files")
```

你可以为由**静态**方法提供的文件使用任何虚拟路径前缀（*该路径在文件系统中实际不存在*），为静态目录指定一个前缀路径，如下所示:

**示例：**

```go
app.Static("/static", "./public")

// => http://localhost:3000/static/hello.html
// => http://localhost:3000/static/js/jquery.js
// => http://localhost:3000/static/css/style.css
```

如果您希望对提供静态文件的设置有一点控制。您可以使用 `fiber.Static` 结构体来实现特定设置。

**`fiber.static {}`**

```go
//静态定义定义静态资产时的配置选项。
type Static struct {
    //设置为true时，服务器尝试通过缓存压缩文件最小化CPU使用率。
    //这与Github.com/gofiber/Compression中间件不同。
    //可选，默认值False.
     Compress bool `json:"compress"`

    //设置为true时，启用字节范围请求。
    //可选，默认值False.
    ByteRange bool `json:"byte_range"`

    //设置为true时，启用目录浏览。
    //可选，默认值false。
    Browse bool `json:"browse"`

    //用于服务目录的索引文件的名称。
    //可选，默认值“index.html”。
    Index string `json:"index"`

    //非活动文件处理程序的失效持续时间。
    //使用否定时间。要禁用它。
    //
    // 可选，默认值10 * time.second。
      CacheDuration time.Duration `json:"cache_duration"`

    //缓存控制http-head的值
    //设置在文件响应上。 maxage在几秒钟内定义。
    //
    //可选，默认值0。
     MaxAge int `json:"max_age"`

    // next定义返回true时跳过此中间件的函数。
    //
    // 可选，默认值：nil.
    Next func(c *Ctx) bool
}
```

**示例：**

```go
//自定义配置
app.Static("/", "./public", fiber.Static{
  Compress:      true,
  ByteRange:     true,
  Browse:        true,
  Index:         "john.html"
  CacheDuration: 10 * time.Second,
  MaxAge:        3600,
})
```

## Route Handlers

注册绑定到特定 [HTTP method](https://developer.mozilla.org/en-us/docs/web/http/methods) 的路由。

**签名**

```go
// http方法
func (app *App) Get(path string, handlers ...Handler) Router
func (app *App) Head(path string, handlers ...Handler) Router
func (app *App) Post(path string, handlers ...Handler) Router
func (app *App) Put(path string, handlers ...Handler) Router
func (app *App) Delete(path string, handlers ...Handler) Router
func (app *App) Connect(path string, handlers ...Handler) Router
func (app *App) Options(path string, handlers ...Handler) Router
func (app *App) Trace(path string, handlers ...Handler) Router
func (app *App) Patch(path string, handlers ...Handler) Router

//添加允许您将方法指定为值
func (app *App) Add(method, path string, handlers ...Handler) Router

//所有人都将在所有HTTP方法上注册路由
//几乎与app.USE相同但不符合前缀
func (app *App) All(path string, handlers ...Handler) Router
```

**示例：**

```go
//简单GET 处理
app.Get("/api/list", func(c *fiber.Ctx)error{
  return c.SendString("I'm a GET request!")
})

// 简单POST处理
app.Post("/api/register", func(c *fiber.Ctx) error {
  return c.SendString("I'm a POST request!")
})
```

**使用**可用于中间件包和前缀捕集器。这些路由只会匹配每个路径的开头，即 `/john` 将匹配 `/john /doe`，`/johnnnn` 等

**签名**

```go
func (app *App) Use(args ...interface{}) Router
```

**示例：**

```go
//匹配任何请求
app.Use(func(c *fiber.Ctx) error {
    return c.Next()
})

//匹配请求以/api开始
app.Use("/api", func(c *fiber.Ctx) error {
    return c.Next()
})

//附加多个处理程序
app.Use("/api",func(c *fiber.Ctx) error {
  c.Set("X-Custom-Header", random.String(32))
    return c.Next()
}, func(c *fiber.Ctx) error {
    return c.Next()
})
```

## Mount

您可以通过创建 `* mount` 来挂载 Fiber 实例

**签名**

```go
func (a *App) Mount(prefix string, app *App) Router
```

**示例**

```go
func main() {
    micro := fiber.New()
    micro.Get("/doe", func(c *fiber.Ctx) error {
        return c.SendStatus(fiber.StatusOK)
    })

    app := fiber.New()
    app.Mount("/john", micro) // GET /john/doe -> 200 OK

    log.Fatal(app.Listen(":3000"))
}
```

## Group

您可以通过创建 `* group` 结构体来创建群组路由。

**签名**

```go
func (app *App) Group(prefix string, handlers ...Handler) Router
```

**示例**

```go
func main() {
  app := fiber.New()

  api := app.Group("/api", handler)  // /api

  v1 := api.Group("/v1", handler)   // /api/v1
  v1.Get("/list", handler)          // /api/v1/list
  v1.Get("/user", handler)          // /api/v1/user

  v2 := api.Group("/v2", handler)   // /api/v2
  v2.Get("/list", handler)          // /api/v2/list
  v2.Get("/user", handler)          // /api/v2/user

  log.Fatal(app.Listen(":3000"))
}
```

## Server

服务器返回底层 [fasthttp Server](https://godoc.org/github.com/valyala/fasthttp#Server)

```go
func (app *App) Server() *fasthttp.Server
func main() {
    app := fiber.New()

    app.Server().MaxConnsPerIP = 1

    // ...
}
```

## Stack

此方法返回原始路由器堆栈

**签名:**

```go
func (app *App) Stack() [][]*Route
```

**示例:**

```go
var handler = func(c *fiber.Ctx) error { return nil }

func main() {
    app := fiber.New()

    app.Get("/john/:age", handler)
    app.Post("/register", handler)

    data, _ := json.MarshalIndent(app.Stack(), "", "  ")
    fmt.Println(string(data))

    app.Listen(":3000")
}
```

**结果**

```js
[
  [
    {
      "method": "GET",
      "path": "/john/:age",
      "params": [
        "age"
      ]
    }
  ],
  [
    {
      "method": "HEAD",
      "path": "/john/:age",
      "params": [
        "age"
      ]
    }
  ],
  [
    {
      "method": "POST",
      "path": "/register",
      "params": null
    }
  ]
]
```

## Config

Config 将 App Config 返回为值 (只读)。

**签名:**

```go
func (app *App) Config() Config
```

## Handler

处理程序返回可用于服务自定义 * fasthttp.RequestCtx 请求的服务器处理程序。

**签名:**

```go
func (app *App) Handler() fasthttp.RequestHandler
```

## Listen

收听来自给定地址的 HTTP 请求。

**签名:**

```go
func (app *App) Listen(addr string) error
```

**示例**

```go
// 监听端口 :8080 
app.Listen(":8080")

// 自定义主机
app.Listen("127.0.0.1:8080")
```

## ListenTLS

ListenTLS 使用 certfile 和 keyfile 路径从给定地址提供 HTTPS 请求，以作为 TLS 证书和密钥文件。

**签名:**

```go
func (app *App) ListenTLS(addr, certFile, keyFile string) error
```

**示例**

```go
app.ListenTLS(":443", "./cert.pem", "./cert.key");
```

使用 `ListenTLS` 默认值到以下配置 (使用 `Listener` 提供自己的配置)

\* *默认* tls.Config**

```go
&tls.Config{
    MinVersion:               tls.VersionTLS12,
    PreferServerCipherSuites: true,
    Certificates: []tls.Certificate{
        cert,
    },
}
```

## Listener

您可以使用 `Listener` 方法传递自己的 [`net.listener`](https://golang.org/pkg/net/#listener)。此方法可用于使用自定义 tls.config 启用 **TLS/HTTPS**。

**签名:**

```go
func (app *App) Listener(ln net.Listener) error
```

**示例:**

```go
ln, _ := net.Listen("tcp", ":3000")

cer, _:= tls.LoadX509KeyPair("server.crt", "server.key")

ln = tls.NewListener(ln, &tls.Config{Certificates: []tls.Certificate{cer}})

app.Listener(ln)
```

## Test

使用 **Test** 方法进行测试程序。使用此方法来创建`_test.go` 文件或者当您需要调试路由逻辑时。如果要完全禁用超时，则默认超时为 `1s`，将 `-1` 作为第二个参数。

**签名:**

```go
func (app *App) Test(req *http.Request, msTimeout ...int) (*http.Response, error)
```

**示例:**

```go
//创建带有测试方法的路由：
app.Get("/", func(c *fiber.Ctx) error {
  fmt.Println(c.BaseURL())              // => http://google.com
  fmt.Println(c.Get("X-Custom-Header")) // => hi

  return c.SendString("hello, World!")
})

// http.Request
req := httptest.NewRequest("GET", "http://google.com", nil)
req.Header.Set("X-Custom-Header", "hi")

// http.Response
resp, _ := app.Test(req)

// 用结果做点什么：
if resp.StatusCode == fiber.StatusOK {
  body, _ := ioutil.ReadAll(resp.Body)
  fmt.Println(string(body)) // => Hello, World!
}
```