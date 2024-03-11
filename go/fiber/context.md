# 🧠 Context

CTX 结构表示保存 HTTP 请求和响应的上下文。它有用于请求查询字符串，参数，正文，HTTP 标头等方法。

## Accepts

检查，如果指定的 **extensions** 或 **content** **types** 是可接受的。

> 提示：基于请求的 [Accept](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept) HTTP 标头。

**签名:**

```go
func (c *Ctx) Accepts(offers ...string)          string
func (c *Ctx) AcceptsCharsets(offers ...string)  string
func (c *Ctx) AcceptsEncodings(offers ...string) string
func (c *Ctx) AcceptsLanguages(offers ...string) string
```

**示例:**

```go
// Accept: text/*, application/json

app.Get("/", func(c *fiber.Ctx) error {
  c.Accepts("html")             // "html"
  c.Accepts("text/html")        // "text/html"
  c.Accepts("json", "text")     // "json"
  c.Accepts("application/json") // "application/json"
  c.Accepts("image/png")        // ""
  c.Accepts("png")              // ""
  // ...
})
```

Fiber 为其他接受标题提供类似的功能。

```go
// Accept-Charset: utf-8, iso-8859-1;q=0.2
// Accept-Encoding: gzip, compress;q=0.2
// Accept-Language: en;q=0.8, nl, ru

app.Get("/", func(c *fiber.Ctx) error {
  c.AcceptsCharsets("utf-16", "iso-8859-1") 
  // "iso-8859-1"

  c.AcceptsEncodings("compress", "br") 
   //“压缩”

  c.AcceptsLanguages("pt", "nl", "ru") 
  // "nl"
  // ...
})
```

## Append

将指定的 **value** 追加到 HTTP 响应标题字段。

> 提示：如果标题为 **not**，则已设置，它会创建具有指定值的标题。

**签名:**

```go
func (c *Ctx) Append(field string, values ...string)
```

**示例:**

```go
app.Get("/", func(c *fiber.Ctx) error {
  c.Append("Link", "http://google.com", "http://localhost")
  // => Link: http://localhost, http://google.com

  c.Append("Link", "Test")
  // => Link: http://localhost, http://google.com, Test

  // ...
})
```

## Attachment

设置 HTTP 响应 [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) 标头字段到 `attachment`。

**签名:**

```go
func (c *Ctx) Attachment(filename ...string)
```

**示例:**

```go
app.Get("/", func(c *fiber.Ctx) error {
  c.Attachment()
   // =>内容处理：附件

  c.Attachment("./upload/images/logo.png")
  // =>内容处理：attachment; filename =“logo.png”
  // =>内容类型：image/png

  // ...
})
```

## App

返回 [*App](https://github.com/gofiber/docs/blob/master/api/ctx.md) 引用，因此您可以轻松访问所有应用程序设置。

**签名:**

```go
func (c *Ctx) App() *App
```

**示例:**

```go
app.Get("/stack", func(c *fiber.Ctx) error {
  return c.JSON(c.App().Stack())
})
```

## BaseURL

返回基本 URL (**protocol** + **host**) 作为 `string`。

**Signature:**

```go
func (c *Ctx) BaseURL() string
```

**Example:**

```go
// GET https://example.com/page#chapter-1

app.Get("/", func(c *fiber.Ctx) error {
  c.BaseURL() // https://example.com
  // ...
})
```

## Body

返回原始请求 **body**。

**签名：**

```go
func (c *Ctx) Body() []byte
```

**示例:**

```go
// curl -X POST http://localhost:8080 -d user=john

app.Post("/", func(c *fiber.Ctx) error {
  //从POST请求获取原始BODY：
  return c.Send(c.Body()) // []byte("user=john")
})
```

> *返回值仅在处理程序中有效。不要存储任何引用。
> 制作副本或使用* [***`Immutable`\***](https://github.com/gofiber/docs/blob/master/api/ctx.md) *设置 。* [*阅读更多…*](https://github.com/gofiber/docs/blob/master/#zero-allocation)

## BodyParser

将请求正文绑定到结构。`bodyParser` 支持基于 `content-type` 标题来解码解码查询参数和以下内容类型：

- `application/json`
- `application/xml`
- `application/x-www-form-urlencoded`
- `multipart/form-data`

**签名:**

```go
func (c *Ctx) BodyParser(out interface{}) error
```

**示例:**

```go
//字段名称应以大写字母开头
type Person struct {
    Name string `json:"name" xml:"name" form:"name"`
    Pass string `json:"pass" xml:"pass" form:"pass"`
}

app.Post("/", func(c *fiber.Ctx) error {
        p := new(Person)

        if err := c.BodyParser(p); err != nil {
            return err
        }

        log.Println(p.Name) // john
        log.Println(p.Pass) // doe

        // ...
})

//使用以下curl命令运行测试

// curl -X POST -H "Content-Type: application/json" --data "{\"name\":\"john\",\"pass\":\"doe\"}" localhost:3000

// curl -X POST -H "Content-Type: application/xml" --data "<login><name>john</name><pass>doe</pass></login>" localhost:3000

// curl -X POST -H "Content-Type: application/x-www-form-urlencoded" --data "name=john&pass=doe" localhost:3000

// curl -X POST -F name=john -F pass=doe http://localhost:3000

// curl -X POST "http://localhost:3000/?name=john&pass=doe"
```

> *返回值仅在处理程序中有效。不要存储任何引用。
> 制作副本或使用* [***`Immutable`\***](https://github.com/gofiber/docs/blob/master/api/ctx.md) *设置。* [*阅读更多…*](https://github.com/gofiber/docs/blob/master/#zero-allocation)

## ClearCookie

清除客户端 Cookie (*或所有 cookie 过期，如果留空)*

**签名：**

```go
func (c *Ctx) ClearCookie(key ...string)
```

**示例:**

```go
app.Get("/", func(c *fiber.Ctx) error {
  //清除所有cookie：
  c.ClearCookie()

  //按名称过期特定cookie：
  c.ClearCookie("user")

  //按名称过期多个cookie：
  c.ClearCookie("token", "session", "track_id", "version")
  // ...
})
```

> 提示：Web 浏览器和其他浏览器只有在给定的选项与创建 cookie 时的选项相同 (不包括 expires 和 maxAge) 时，兼容客户端才会清除 cookie。ClearCookie 不会为您设置这些值 - 应该使用类似于下面所示的技术来确保删除您的 cookie

**示例:**

```go
app.Get("/set", func(c *fiber.Ctx) error {
    c.Cookie(&fiber.Cookie{
        Name:     "token",
        Value:    "randomvalue",
        Expires:  time.Now().Add(24 * time.Hour),
        HTTPOnly: true,
        SameSite: "lax",
    })

    // ...
})

app.Get("/delete", func(c *fiber.Ctx) error {
    c.Cookie(&fiber.Cookie{
        Name:     "token",
        // Set expiry date to the past
        Expires:  time.Now().Add(-(time.Hour * 2)),
        HTTPOnly: true,
        SameSite: "lax",
    })

    // ...
})
```

## Context

返回 [*fasthttp.RequestCtx*](https://godoc.org/github.com/valyala/fasthttp#RequestCtx)，它与 context.Context 接口兼容，需要一个截止日期，一个取消信号，以及其他跨越 API 边界的值。

**签名:**

```go
func (c *Ctx) Context() *fasthttp.RequestCtx
```

> 提示：请阅读 [Fasthttp Documentation](https://pkg.go.dev/github.com/valyala/fasthttp?tab=doc) 了解更多信息。

## Cookie

设置 Cookie

**签名:**

```go
func (c *Ctx) Cookie(cookie *Cookie)
type Cookie struct {
    Name     string    `json:"name"`
    Value    string    `json:"value"`
    Path     string    `json:"path"`
    Domain   string    `json:"domain"`
    MaxAge   int       `json:"max_age"`
    Expires  time.Time `json:"expires"`
    Secure   bool      `json:"secure"`
    HTTPOnly bool      `json:"http_only"`
    SameSite string    `json:"same_site"`
}
```

**示例:**

```go
app.Get("/", func(c *fiber.Ctx) error {
  // Create cookie
  cookie := new(fiber.Cookie)
  cookie.Name = "john"
  cookie.Value = "doe"
  cookie.Expires = time.Now().Add(24 * time.Hour)

  // Set cookie
  c.Cookie(cookie)
  // ...
})
```

## Cookies

按键获取 cookie 值，您可以传递一个可选的默认值，如果 cookie 键不存在，将返回该值

**签名**

```go
func (c *Ctx) Cookies(key string, defaultValue ...string) string
```

**示例：**

```go
app.Get("/", func(c *fiber.Ctx) error {
  // Get cookie by key:
  c.Cookies("name")         // "john"
  c.Cookies("empty", "doe") // "doe"
  // ...
})
```

> *返回值仅在处理程序中有效。不要存储任何引用。
> 复制或使用* [***`Immutable`\***](https://github.com/gofiber/docs/blob/master/api/ctx.md) *改为设置* [*阅读更多…*](https://github.com/gofiber/docs/blob/master/#zero-allocation)

## Download

将文件作为 `attachment` 从路径传输

通常，浏览器会提示用户下载。默认情况下，[Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) header `filename=` 参数是文件路径 (*通常出现在浏览器对话框*)。

使用 **filename** 参数覆盖此默认值

**签名:**

```go
func (c *Ctx) Download(file string, filename ...string) error
```

**示例:**

```go
app.Get("/", func(c *fiber.Ctx) error {
  return c.Download("./files/report-12345.pdf");
  // => Download report-12345.pdf

  return c.Download("./files/report-12345.pdf", "report.pdf");
  // => Download report.pdf
})
```

## Request

请求返回 [*fasthttp.Request](https://godoc.org/github.com/valyala/fasthttp#Request) 指针

**签名**

```go
func (c *Ctx) Request() *fasthttp.Request
```

**示例**

```go
app.Get("/", func(c *fiber.Ctx) error {
  c.Request().Header.Method()
  // => []byte("GET")
})
```

## Response

响应返回 [*fasthttp.Response](https://godoc.org/github.com/valyala/fasthttp#Response) 指针

**签名**

```go
func (c *Ctx) Response() *fasthttp.Response
```

**示例**

```go
app.Get("/", func(c *fiber.Ctx) error {
  c.Response().Write([]byte("Hello, World!"))
  // => "Hello, World!"
})
```

## Format

对 [Accept](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept) 的 HTTP 头进行内容协商。使用 [Accepts](https://github.com/gofiber/docs/blob/master/api/ctx.md#accepts) 格式来选择合适的格式

> 提示：如果头部为 **未** 指定或者 **没有** 正确的格式，则使用.**text/plain** 格式。

**签名:**

```go
func (c *Ctx) Format(body interface{}) error
```

**示例:**

```go
app.Get("/", func(c *fiber.Ctx) error {
  // Accept: text/plain
  c.Format("Hello, World!")
  // => Hello, World!

  // Accept: text/html
  c.Format("Hello, World!")
  // => <p>Hello, World!</p>

  // Accept: application/json
  c.Format("Hello, World!")
  // => "Hello, World!"
  // ..
})
```

## FormFile

可以通过名称检索 MultipartForm 文件，返回来自给定键的**第一个**文件。

**签名:**

```go
func (c *Ctx) FormFile(key string) (*multipart.FileHeader, error)
```

**示例:**

```go
app.Post("/", func(c *fiber.Ctx) error {
  // 从表单字段 "document"获取第一个文件:
  file, err := c.FormFile("document")

  // 保存文件到根目录:
  return c.SaveFile(file, fmt.Sprintf("./%s", file.Filename))
})
```

## FormValue

任何形式的值都可以通过名称来检索，从给定的键中返回的**第一个**值。

**签名:**

```go
func (c *Ctx) FormValue(key string, defaultValue ...string) string
```

**示例:**

```go
app.Post("/", func(c *fiber.Ctx) error {
  // 从表单字段 "name"获取第一个值:
  c.FormValue("name")
  // => "john" or "" if not exist

  // ..
})
```

> *返回值仅在处理程序内有效。请勿保存任何引用。
> 复制或改用* [***`Immutable`\***](https://github.com/gofiber/docs/blob/master/api/ctx.md) *设置.* [*阅读更多…*](https://github.com/gofiber/docs/blob/master/#zero-allocation)

## Fresh

[expressjs.com/en/4x/api.html#req.f...](https://expressjs.com/en/4x/api.html#req.fresh)

**签名:**

```go
func (c *Ctx) Fresh() bool
```

## Get

返回字段指定的 HTTP 请求标头。

> 提示：匹配是 **大小写不敏感**。

**签名:**

```go
func (c *Ctx) Get(key string, defaultValue ...string) string
```

**示例:**

```go
app.Get("/", func(c *fiber.Ctx) error {
  c.Get("Content-Type")       // "text/plain"
  c.Get("CoNtEnT-TypE")       // "text/plain"
  c.Get("something", "john")  // "john"
  // ..
})
```

> *返回值仅在处理程序中有效。不要保存任何引用。
> 制作副本或使用* [***`Immutable`\***](https://github.com/gofiber/docs/blob/master/api/ctx.md) *设置.* [*阅读更多…*](https://github.com/gofiber/docs/blob/master/#zero-allocation)

## GetRespHeader

返回字段指定的 HTTP 响应标题。

> 提示：匹配是 **大小写不敏感**。

**签名:**

```go
func (c *Ctx) GetRespHeader(key string, defaultValue ...string) string
```

**示例:**

```go
app.Get("/", func(c *fiber.Ctx) error {
  c.GetRespHeader("X-Request-Id")       // "8d7ad5e3-aaf3-450b-a241-2beb887efd54"
  c.GetRespHeader("Content-Type")       // "text/plain"
  c.GetRespHeader("something", "john")  // "john"
  // ..
})
```

> *返回值仅在处理程序中有效。不要保存任何引用。
> M 制作副本或使用* [***`Immutable`\***](https://github.com/gofiber/docs/blob/master/api/ctx.md) *设置。* [*阅读更多…*](https://github.com/gofiber/docs/blob/master/#zero-allocation)

## Hostname

返回从 [Host](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host) HTTP 标题中派生的主机名。

**签名:**

```go
func (c *Ctx) Hostname() string
```

**示例:**

```go
// GET http://google.com/search

app.Get("/", func(c *fiber.Ctx) error {
  c.Hostname() // "google.com"

  // ...
})
```

> *返回值仅在处理程序中有效。不要保存任何引用。
> 制作副本或使用* [***`Immutable`\***](https://github.com/gofiber/docs/blob/master/api/ctx.md) *设置。* [*阅读更多…*](https://github.com/gofiber/docs/blob/master/#zero-allocation)

## IP

返回请求的远程 IP 地址。

**签名:**

```go
func (c *Ctx) IP() string
```

**示例:**

```go
app.Get("/", func(c *fiber.Ctx) error {
  c.IP() // "127.0.0.1"

  // ...
})
```

## IPs

返回 [X-Forwarded-For](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For) 请求标题中指定的 IP 地址数组。

**签名:**

```go
func (c *Ctx) IPs() []string
```

**示例:**

```go
// X-Forwarded-For: proxy1, 127.0.0.1, proxy3

app.Get("/", func(c *fiber.Ctx) error {
  c.IPs() // ["proxy1", "127.0.0.1", "proxy3"]

  // ...
})
```

## Is

返回匹配 **content type**, 如果传入请求的 [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) HTTP http header 字段匹配 [MIME type](https://developer.mozilla.org/ru/docs/Web/HTTP/Basics_of_HTTP/MIME_types) 由 type 参数指定。

提示：如果请求**没**有 body，则返回 ** false **。

**签名:**

```go
func (c *Ctx) Is(extension string) bool
```

**示例:**

```go
// Content-Type: text/html; charset=utf-8

app.Get("/", func(c *fiber.Ctx) error {
  c.Is("html")  // true
  c.Is(".html") // true
  c.Is("json")  // false

  // ...
})
```

## JSON

使用 [segmentio/encoding](https://github.com/segmentio/encoding ) 包将任何 **interface** 或 **string** 转换为 JSON。

> 提示：JSON 还将内容标头设置为 **application/json**。

**签名:**

```go
func (c *Ctx) JSON(data interface{}) error
```

**示例:**

```go
type SomeStruct struct {
  Name string
  Age  uint8
}

app.Get("/json", func(c *fiber.Ctx) error {
  //创建数据结构：
  data := SomeStruct{
    Name: "Grame",
    Age:  20,
  }

  return c.JSON(data)
  // => Content-Type: application/json
  // => "{"Name": "Grame", "Age": 20}"

  return c.JSON(fiber.Map{
    "name": "Grame",
    "age": 20,
  })
  // => Content-Type: application/json
  // => "{"name": "Grame", "age": 20}"
})
```

## JSONP

发送带有 JSONP 支持的 JSON 响应。此方法与 [JSON](https://github.com/gofiber/docs/blob/master/api/ctx.md#json) 相同，但它选择了 JSONP 回调支持。默认情况下，回调名称仅为 callback

通过在方法中传递 **named string** 来覆盖此属性

**签名:**

```go
func (c *Ctx) JSONP(data interface{}, callback ...string) error
```

**示例:**

```go
type SomeStruct struct {
  name string
  age  uint8
}

app.Get("/", func(c *fiber.Ctx) error {
  //创建数据结构：
  data := SomeStruct{
    name: "Grame",
    age:  20,
  }

  return c.JSONP(data)
  // => callback({"name": "Grame", "age": 20})

  return c.JSONP(data, "customFunc")
  // => customFunc({"name": "Grame", "age": 20})
})
```

## Links

连接属性后面的链接，以填充响应的 [Link](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link) HTTP 头字段.

**签名:**

```go
func (c *Ctx) Links(link ...string)
```

**示例:**

```go
app.Get("/", func(c *fiber.Ctx) error {
  c.Links(
    "http://api.example.com/users?page=2", "next",
    "http://api.example.com/users?page=5", "last",
  )
  // Link: <http://api.example.com/users?page=2>; rel="next",
  //       <http://api.example.com/users?page=5>; rel="last"

  // ...
})
```

## Locals

一种方法，用于存储限定于请求范围的变量，因此仅对与请求匹配的路由可用

> 提示：如果要将某些 **specific** 数据传递给下一个中间件，则此选项非常有用

**签名:**

```go
func (c *Ctx) Locals(key string, value ...interface{}) interface{}
```

**示例:**

```go
app.Use(func(c *fiber.Ctx) error {
  c.Locals("user", "admin")
  return c.Next()
})

app.Get("/admin", func(c *fiber.Ctx) error {
  if c.Locals("user") == "admin" {
    return c.Status(fiber.StatusOK).SendString("Welcome, admin!")
  }
  return c.SendStatus(fiber.StatusForbidden)

})
```

## Location

设置响应 [Location](https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Location) 指定路径参数的 HTTP 头

**签名:**

```go
func (c *Ctx) Location(path string)
```

**示例:**

```go
app.Post("/", func(c *fiber.Ctx) error {
  return c.Location("http://example.com")

  return c.Location("/foo/bar")
})
```

## Method

返回与请求的 HTTP 方法相对应的字符串： `GET`，`POST` 等等
可选地，您可以通过传递字符串来覆盖该方法。

**签名:**

```go
func (c *Ctx) Method(override ...string) string
```

**示例:**

```go
app.Post("/", func(c *fiber.Ctx) error {
  c.Method() // "POST"

  c.Method("GET")
  c.Method() // GET

  // ...
})
```

## MultipartForm

要访问多部分表单条目， 可以使用 `MultipartForm()` 解析二进制文件。这将返回一个 `map[string][]string`， 因此给定一个键，该值将是一个字符串片段。

**签名:**

```go
func (c *Ctx) MultipartForm() (*multipart.Form, error)
```

**示例:**

```go
app.Post("/", func(c *fiber.Ctx) error {
  // 分析多部分表单：
  if form, err := c.MultipartForm(); err == nil {
    // => *multipart.Form

    if token := form.Value["token"]; len(token) > 0 {
      //获取键值：
      fmt.Println(token[0])
    }

    // 从"documents" 键获取所有的文件:
    files := form.File["documents"]
    // => []*multipart.FileHeader

    //循环文件：
    for _, file := range files {
      fmt.Println(file.Filename, file.Size, file.Header["Content-Type"][0])
      // => "tutorial.pdf" 360641 "application/pdf"

      //将文件保存到磁盘：
      if err := c.SaveFile(file, fmt.Sprintf("./%s", file.Filename)); err != nil {
        return err
      }
    }
  }

  return err
})
```

## Next

调用 **Next**，它会执行堆栈中与当前路由匹配的下一个方法。 你可以在方法中传递一个错误结构，该结构将结束连锁，并调用 [error handler](https://docs.gofiber.io/guide/error-handling).

**签名:**

```go
func (c *Ctx) Next() error
```

**示例:**

```go
app.Get("/", func(c *fiber.Ctx) error {
  fmt.Println("1st route!")
  return c.Next()
})

app.Get("*", func(c *fiber.Ctx) error {
  fmt.Println("2nd route!")
  return c.Next()
})

app.Get("/", func(c *fiber.Ctx) error {
  fmt.Println("3rd route!")
  return c.SendString("Hello, World!")
})
```

## OriginalURL

返回原始请求的 URL。

**签名：**

```go
func (c *Ctx) OriginalURL() string
```

**示例:**

```go
// GET http://example.com/search?q=something

app.Get("/", func(c *fiber.Ctx) error {
  c.OriginalURL() // "/search?q=something"

  // ...
})
```

> *返回的值只在处理程序中有效。不要存储任何引用。
> 复制或使用* [***`Immutable`\***](https://github.com/gofiber/docs/blob/master/api/ctx.md)*设置代替。* [*阅读更多…*](https://github.com/gofiber/docs/blob/master/#zero-allocation)

## Params

方法可以用来获取路由参数，你可以传递一个可选的默认值，如果参数键不存在，将被返回。

> 提示：默认为空字符串（`""`），如果参数**不**存在。

**签名：**

```go
func (c *Ctx) Params(key string, defaultValue ...string) string
```

**示例：**

```go
// GET http://example.com/user/fenny
app.Get("/user/:name", func(c *fiber.Ctx) error {
  c.Params("name") // "fenny"

  // ...
})

// GET http://example.com/user/fenny/123
app.Get("/user/*", func(c *fiber.Ctx) error {
  c.Params("*") // "fenny/123"
  c.Params("*1") // "fenny/123"

  // ...
})
```

未命名的路由参数 `(*, +)` 可以通过路由中的**字符**和**计数器**来获取。

**示例：**

```go
// ROUTE: /v1/*/shop/*
// GET:   /v1/brand/4/shop/blue/xs
c.Params("*1") // "brand/4"
c.Params("*2") // "blue/xs"
```

出于**向下兼容**的原因，参数字符的第一个参数段也可以不带计数器地访问。

**示例：**

```go
app.Get("/v1/*/shop/*", func(c *fiber.Ctx) error {
  c.Params("*") // 输出第一个通配符段的值
})
```

> *返回的值只在处理程序中有效。不要存储任何引用。
> 制作副本或使用* [***`Immutable`\***](https://github.com/gofiber/docs/blob/master/api/ctx.md) *设置代替。* [*阅读更多…*](https://github.com/gofiber/docs/blob/master/#zero-allocation)

## ParamsInt

方法可用于从路由参数中获取一个整数。请注意，如果该参数不在请求中，将返回 0。如果该参数不是一个数字，将返回 0 和一个错误。

> 提示：如果参数 ** 不存在，则默认为空字符串（`""`）。

**签名：**

```go
func (c *Ctx) Params(key string) (int, error)
```

**示例：**

```go
// GET http://example.com/user/123
app.Get("/user/:id", func(c *fiber.Ctx) error {
  id, err := c.ParamsInt("id") // int 123 and no error

  // ...
})
```

这个方法相当于使用 ctx.Params 的 `atoi`。

## Path

包含请求 URL 的路径部分。你可以选择通过传递一个字符串来覆盖路径。

**签名：**

```go
func (c *Ctx) Path(override ...string) string
```

**示例:**

```go
// GET http://example.com/users?sort=desc

app.Get("/users", func(c *fiber.Ctx) error {
  c.Path() // "/users"

  c.Path("/john")
  c.Path() // "/john"

  // ...
})
```

## Protocol

包含请求协议的字符串。 `http` 或 `https` 用于 **TLS** 请求。

**签名：**

```undefined
func (c *Ctx) Protocol() string
```

**示例:**

```go
// GET http://example.com

app.Get("/", func(c *fiber.Ctx) error {
  c.Protocol() // "http"

  // ...
})
```

## Query

这个属性是一个对象，包含了路由中每个查询字符串参数的属性，你可以传递一个可选的默认值，如果查询键不存在，将被返回。

> 提示：如果**没有**查询字符串，它会返回一个**空字符串**。

**签名：**

```go
func (c *Ctx) Query(key string, defaultValue ...string) string
```

**示例：**

```go
// GET http://example.com/shoes?order=desc&brand=nike

app.Get("/", func(c *fiber.Ctx) error {
  c.Query("order") // "desc"
  c.Query("brand") // "nike"
  c.Query("empty", "nike") // "nike"

  // ...
})
```

> *返回的值只在处理程序中有效。不要存储任何引用。
> 制作副本或使用* [***`Immutable`\***](https://github.com/gofiber/docs/blob/master/api/ctx.md) *设置来代替。* [*阅读更多…*](https://github.com/gofiber/docs/blob/master/#zero-allocation)

## QueryParser

这个方法类似于 [BodyParser](https://github.com/gofiber/docs/blob/master/api/ctx.md#bodyparser)，但适用于查询参数。

**签名：**

```go
func (c *Ctx) QueryParser(out interface{}) error
```

**示例:**

```go
// 字段名应该以大写字母开头
type Person struct {
    Name     string     `query:"name"`
    Pass     string     `query:"pass"`
    Products []string   `query:"products"`
}
app.Get("/", func(c *fiber.Ctx) error {
        p := new(Person)

        if err := c.QueryParser(p); err != nil {
             return err
        }

        log.Println(p.Name) // john
        log.Println(p.Pass) // doe
        log.Println(p.Products) // [shoe, hat] // ...

        // ...
})
// 使用以下 curl 命令运行测试

// curl "http://localhost:3000/?name=john&pass=doe&products=shoe,hat"
```

## SetParserDecoder

允许你配置 BodyParser/QueryParser 解码器，基于模式的选项，提供添加自定义类型暂停的可能性。

**签名：**

```go
func SetParserDecoder(parserConfig fiber.ParserConfig{
  IgnoreUnknownKeys bool,
  ParserType        []fiber.ParserType{
      Customtype interface{},
      Converter  func(string) reflect.Value,
  },
  ZeroEmpty         bool,
  SetAliasTag       string,
})
```

**示例：**

```go
type CustomTime time.Time

// String() 返回字符串中的时间
func (ct *CustomTime) String() string {
    t := time.Time(*ct).String()
    return t
}

// 为CustomTime类型格式注册转换器为2006-01-02
var timeConverter = func(value string) reflect.Value {
  fmt.Println("timeConverter", value)
  if v, err := time.Parse("2006-01-02", value); err == nil {
    return reflect.ValueOf(v)
  }
  return reflect.Value{}。
}

customTime := fiber.ParserType{
  Customtype: CustomTime{},
  Converter:  timeConverter,
} 

// 给解码器添加设置
fiber.SetParserDecoder(fiber.ParserConfig{
  IgnoreUnknownKeys: true,
  ParserType:        []fiber.ParserType{customTime},
  ZeroEmpty: true,
})

// 使用CustomType的例子，你暂停了RFC3339中没有的自定义时间格式
type Demo struct {
    Date  CustomTime `form:"date" query:"date"`
    Title string     `form:"title" query:"title"`
    Body  string     `form:"body" query:"body"`
}

app.Post("/body", func(c *fiber.Ctx) error {
    var d Demo
    c.BodyParser(&d)
    fmt.Println("d.Date", d.Date.String())
    return c.JSON(d)
})

app.Get("/query", func(c *fiber.Ctx) error {
    var d Demo
    c.QueryParser(&d)
    fmt.Println("d.Date", d.Date.String())
    return c.JSON(d)
})


// curl -X POST -F title=title -F body=body -F date=2021-10-20 http://localhost:3000/body

// curl -X GET "http://localhost:3000/query?title=title&body=body&date=2021-10-20"
```

## Range

将返回一个包含类型和范围片断的结构。

**签名：**

```go
func (c *Ctx) Range(size int) (Range, error)
```

**示例:**

```go
// Range: bytes=500-700, 700-900
app.Get("/", func(c *fiber.Ctx) error {
  b := c.Range(1000)
  if b.Type == "bytes" {
      for r := range r.Ranges {
      fmt.Println(r)
      // [500, 700]
    }
  }
})
```

## Redirect

重定向到从指定路径导出的 URL，并指定状态，一个正整数，对应于 HTTP 状态代码。

> 提示：如果**没**有指定，状态默认为 **302 Found**。

**签名：**

```go
func (c *Ctx) Redirect(location string, status ...int) error
```

**示例：**

```go
app.Get("/coffee", func(c *fiber.Ctx) error {
  return c.Redirect("/teapot")
})

app.Get("/teapot", func(c *fiber.Ctx) error {
  return c.Status(fiber.StatusTeapot).Send("🍵 Short and Stout 🍵" )
})
```

**更多的例子**

```go
app.Get("/", func(c *fiber.Ctx) error {
  return c.Redirect("/foo/bar")
  return c.Redirect(".../login")
  return c.Redirect("http://example.com")
  return c.Redirect("http://example.com", 301)
})
```

## Render

用数据渲染一个视图，并发送一个 `text/html` 响应。默认情况下，`Render` 使用默认的 [**Go Template engine**](https://golang.org/pkg/html/template/)。如果你想使用另一个视图引擎，请看看我们的[**模板中间件**](https://github.com/gofiber/template)。

**签名：**

```go
func (c *Ctx) Render(name string, bind interface{}, layouts ...string) error
```

## Route

返回匹配的 [Route](https://pkg.go.dev/github.com/gofiber/fiber?tab=doc#Route) 结构。

**特征：**

```go
func (c *Ctx) Route() *Route
```

**示例:**

```go
// http://localhost:8080/hello

app.Get("/hello/:name", func(c *fiber.Ctx) error {
  r := c.Route()
  fmt.Println(r.Method, r.Path, r.Params, r.Handlers)
  // GET /hello/:name handler [name] 

  // ...
})
```

> 提示：在中间件中不要依赖 `c.Route()`，然后再 **before** 调用 `c.Next()`-`c.Route()` 返回 **最后执行的路由**。

**示例：**

```go
func MyMiddleware() fiber.Handler {
  return func(c *fiber.Ctx) error {
    beforeNext := c.Route().Path // 将是'/'。
    err := c.Next()
    afterNext := c.Route().Path // 将是'/hello/:name'。
    return err
  }
}
```

## SaveFile

方法用于将 **any** 的多部分文件保存到磁盘。

**签名：**

```go
func (c *Ctx) SaveFile(fh *multipart.FileHeader, path string) error
```

**示例：**

```go
app.Post("/", func(c *fiber.Ctx) error {
  // 解析多部分表单。
  if form, err := c.MultipartForm(); err == nil {
    // => *multipart.Form

    // 从 "文档 "键中获取所有文件。
    files := form.File["documents"]
    // => []*multipart.FileHeader

    // 循环浏览文件。
    for _, file := range files {
      fmt.Println(file.Filename, file.Size, file.Header["Content-Type"][0])
      // => "tutorial.pdf" 360641 "application/pdf"

      // 保存文件到磁盘。
      if err := c.SaveFile(file, fmt.Sprintf("./%s", file.Filename)); err != nil {
        return  err
      }
    }
    return err
  }
})
```

## Secure

一个布尔属性，如果建立了 **TLS** 连接，则为 `true`。

**签名：**

```go
func (c *Ctx) Secure() bool
```

**示例：**

```go
// Secure()方法等同于。
c.Protocol() == "https"
```

## Send

设置 HTTP 响应体。

**签名：**

```undefined
func (c *Ctx) Send(body []byte) error
```

**示例：**

```go
app.Get("/", func(c *fiber.Ctx) error {
  return c.Send([]byte("Hello, World!")) // => "Hello, World!"
})
```

Fiber 还为原始输入提供了 `SendString` 和 `SendStream` 方法。

> 提示：如果你**不需要**类型断言，就使用这个方法，建议使用这个方法以获得**更快的**性能。

**签名：**

```go
func (c *Ctx) SendString(body string) error
func (c *Ctx) SendStream(stream io.Reader, size ...int) error
```

**示例：**

```go
app.Get("/", func(c *fiber.Ctx) error {
  return c.SendString("Hello, World!")
  // => "Hello, World!"

  return c.SendStream(bytes.NewReader([]byte("Hello, World!")))
  // => "Hello, World!"
})
```

## SendFile

从给定的路径传输文件。根据 **filenames** 扩展名设置 [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) 响应 HTTP 头域。

> 提示：该方法默认不使用 **gzipping**，将其设置为 **true** 以启用。

**签名：**

```go
func (c *Ctx) SendFile(file string, compress ...bool) error
```

**示例：**

```go
app.Get("/not-found", func(c *fiber.Ctx) error {
  return c.SendFile("./public/404.html");

  // 禁用压缩
  return c.SendFile("./static/index.html", false);
})
```

## SendStatus

设置状态代码和正文中正确的状态信息，如果响应正文是**空的**。

> 提示：你可以找到所有使用的状态代码和信息[这里](https://github.com/gofiber/fiber/blob/dffab20bcdf4f3597d2c74633a7705a517d2c8c2/utils.go#L183-L244)。

**签名：**

```go
func (c *Ctx) SendStatus(status int) error
```

**例子：**

```go
app.Get("/not-found", func(c *fiber.Ctx) error {
  return c.SendStatus(415)
  // => 415 "不支持的媒体类型"

  c.SendString("Hello, World!")
  return c.SendStatus(415)
  // => 415 "Hello, World!"
})
```

## Set

将响应的 HTTP 头域设置为指定的 `key`, `value`.

**特征：**

```sourece-go
func (c *Ctx) Set(key string, val string)
```

**示例：**

```go
app.Get("/", func(c *fiber.Ctx) error {
  c.Set("Content-Type", "text/plain")
  // => "Content-type: text/plain"

  // ...
})
```

## SetUserContext

为上下文接口设置用户指定的实现。

**签名：**

```go
func (c *Ctx) SetUserContext(ctx context.Context)
```

**示例:**

```go
app.Get("/", func(c *fiber.Ctx) error {
  ctx := context.Background()
  c.SetUserContext(ctx)
  // 这里ctx可以是任何上下文的实现

  // ...
})
```

## Stale

[expressjs.com/en/4x/api.html#req.s...](https://expressjs.com/en/4x/api.html#req.stale)

**签名：**

```go
func (c *Ctx) Stale() bool
```

## Status

设置响应的 HTTP 状态。

> 提示：方法是一个**链式的**。

**签名：**

```go
func (c *Ctx) Status(status int) *Ctx
```

**示例：**

```go
app.Get("/fiber", func(c *fiber.Ctx) error {
  c.Status(fiber.StatusOK)
  return nil
}

app.Get("/hello", func(c *fiber.Ctx) error {
  return c.Status(fiber.StatusBadRequest).SendString("Bad Request")
}

app.Get("/world", func(c *fiber.Ctx) error {
  return c.Status(fiber.StatusNotFound).SendFile("./public/gopher.png")
})
```

## Subdomains

返回请求的域名中的子域的字符串片断。

应用属性子域偏移量，默认为 `2`，用于确定子域段的开始。

**签名：**

```go
func (c *Ctx) Subdomains(offset ...int) []string
```

**示例:**

```go
// 主机。"tobi.ferrets.example.com"

app.Get("/", func(c *fiber.Ctx) error {
  c.Subdomains() // ["fielrets", "tobi"] 。
  c.Subdomains(1) // ["tobi"] 。

  // ...
})
```

## Type

将 [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type)HTTP 头设置为[此处](https://github.com/nginx/nginx/blob/master/conf/mime.types)列出的 MIME 类型，由文件**扩展名**指定。

**签名：**

```go
func (c *Ctx) Type(ext string, charset ...string) *Ctx
```

**示例：**

```go
app.Get("/", func(c *fiber.Ctx) error {
  c.Type(".html") // => "text/html"
  c.Type("html") // => "text/html"
  c.Type("png") // => "image/png"

  c.Type("json", "utf-8") // => "application/json; charset=utf-8"

  // ...
})
```

## UserContext

UserContext 返回用户先前设置的上下文实现，如果先前没有设置，则返回一个非零的空上下文。

**特征：**

```go
func (c *Ctx) UserContext() context.Context
```

**示例：**

```go
app.Get("/", func(c *fiber.Ctx) error {
  ctx := c.UserContext()
  // ctx是由用户设置的上下文实现

  // ...
})
```

## Vary

将给定的头域添加到 [Vary](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary) 响应头中。这将追加该头，如果还没有列出的话，否则将把它列在当前位置。

> 提示：多个字段是**允许**的。

**签名：**

```go
func (c *Ctx) Vary(field ...string)
```

**例子：**

```go
app.Get("/", func(c *fiber.Ctx) error {
  c.Vary("Origin") // => Vary: 原产地
  c.Vary("User-Agent") // => Vary: Origin, User-Agent

  // 没有重复的内容
  c.Vary("Origin") // => Vary: Origin, User-Agent

  c.Vary("Accept-Encoding", "Accept")
  // => Vary: Origin, User-Agent, Accept-Encoding, Accept

  // ...
})
```

## Write

Write 采用 Writer 接口

**签名：**

```go
func (c *Ctx) Write(p []byte) (n int, err error)
```

**示例：**

```go
app.Get("/", func(c *fiber.Ctx) error {
  c.Write([]byte("Hello, World!") // => "Hello, World!"

  fmt.Fprintf(c, "%s\n", "Hello, World!") // "Hello, World！Hello, World！"
})
```

## XHR

一个布尔属性，如果请求的 [X-Requested-With](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) 头域是 [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)，则为 `true`，表明该请求是由一个客户端库发出的（例如 [jQuery](https://api.jquery.com/jQuery.ajax/)）。

**签名：**

```go
func (c *Ctx) XHR() bool
```

**示例：**

``` Context 对象
// X-Requested-With: XMLHttpRequest

app.Get("/", func(c *fiber.Ctx) error {
  c.XHR() // true

  // ...
})
```