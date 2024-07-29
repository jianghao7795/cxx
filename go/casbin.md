## 简介

权限管理在几乎每个系统中都是必备的模块。如果项目开发每次都要实现一次权限管理，无疑会浪费开发时间，增加开发成本。因此，`casbin`库出现了。`casbin`是一个强大、高效的访问控制库。支持常用的多种访问控制模型，如`ACL/RBAC/ABAC`等。可以实现灵活的访问权限控制。同时，`casbin`支持多种编程语言，`Go/Java/Node/PHP/Python/.NET/Rust`。我们只需要**一次学习，多处运用**。

## 快速使用

我们依然使用 Go Module 编写代码，先初始化：

| `1 2 ` | `$ mkdir casbin && cd casbin $ go mod init github.com/darjun/go-daily-lib/casbin ` |
| ------ | ------------------------------------------------------------ |
|        |                                                              |

然后安装`casbin`，目前是`v2`版本：

| `1 ` | `$ go get github.com/casbin/casbin/v2 ` |
| ---- | --------------------------------------- |
|      |                                         |

权限实际上就是控制**谁**能对**什么资源**进行什么操作。`casbin`将访问控制模型抽象到一个基于 PERM（Policy，Effect，Request，Matchers） 元模型的配置文件（模型文件）中。因此切换或更新授权机制只需要简单地修改配置文件。

`policy`是策略或者说是规则的定义。它定义了具体的规则。

`request`是对访问请求的抽象，它与`e.Enforce()`函数的参数是一一对应的

`matcher`匹配器会将请求与定义的每个`policy`一一匹配，生成多个匹配结果。

`effect`根据对请求运用匹配器得出的所有结果进行汇总，来决定该请求是**允许**还是**拒绝**。

下面这张图很好地描绘了这个过程：

![img](https://darjun.github.io/img/in-post/godailylib/casbin1.png#center)

我们首先编写模型文件：

| ` 1 2 3 4 5 6 7 8 9 10 11 ` | `[request_definition] r = sub, obj, act [policy_definition] p = sub, obj, act [matchers] m = r.sub == p.sub && r.obj == p.obj && r.act == p.act [policy_effect] e = some(where (p.eft == allow)) ` |
| --------------------------- | ------------------------------------------------------------ |
|                             |                                                              |

上面模型文件规定了权限由`sub,obj,act`三要素组成，只有在策略列表中有和它完全相同的策略时，该请求才能通过。匹配器的结果可以通过`p.eft`获取，`some(where (p.eft == allow))`表示只要有一条策略允许即可。

然后我们策略文件（即谁能对什么资源进行什么操作）：

| `1 2 ` | `p, dajun, data1, read p, lizi, data2, write ` |
| ------ | ---------------------------------------------- |
|        |                                                |

上面`policy.csv`文件的两行内容表示`dajun`对数据`data1`有`read`权限，`lizi`对数据`data2`有`write`权限。

接下来就是使用的代码：

| ` 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 ` | `package main import (  "fmt"  "log"   "github.com/casbin/casbin/v2" ) func check(e *casbin.Enforcer, sub, obj, act string) {  ok, _ := e.Enforce(sub, obj, act)  if ok {    fmt.Printf("%s CAN %s %s\n", sub, act, obj)  } else {    fmt.Printf("%s CANNOT %s %s\n", sub, act, obj)  } } func main() {  e, err := casbin.NewEnforcer("./model.conf", "./policy.csv")  if err != nil {    log.Fatalf("NewEnforecer failed:%v\n", err)  }   check(e, "dajun", "data1", "read")  check(e, "lizi", "data2", "write")  check(e, "dajun", "data1", "write")  check(e, "dajun", "data2", "read") } ` |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              |                                                              |

代码其实不复杂。首先创建一个`casbin.Enforcer`对象，加载模型文件`model.conf`和策略文件`policy.csv`，调用其`Enforce`方法来检查权限。运行程序：

| `1 2 3 4 5 ` | `$ go run main.go dajun CAN read data1 lizi CAN write data2 dajun CANNOT write data1 dajun CANNOT read data2 ` |
| ------------ | ------------------------------------------------------------ |
|              |                                                              |

请求必须完全匹配某条策略才能通过。`("dajun", "data1", "read")`匹配`p, dajun, data1, read`，`("lizi", "data2", "write")`匹配`p, lizi, data2, write`，所以前两个检查通过。第 3 个因为`"dajun"`没有对`data1`的`write`权限，第 4 个因为`dajun`对`data2`没有`read`权限，所以检查都不能通过。输出结果符合预期。

`sub/obj/act`依次对应传给`Enforce`方法的三个参数。实际上这里的`sub/obj/act`和`read/write/data1/data2`是我自己随便取的，你完全可以使用其它的名字，只要能前后一致即可。

上面例子中实现的就是`ACL`（access-control-list，访问控制列表）。`ACL`显示定义了每个主体对每个资源的权限情况，未定义的就没有权限。我们还可以加上超级管理员，超级管理员可以进行任何操作。假设超级管理员为`root`，我们只需要修改匹配器：

| `1 2 ` | `[matchers] e = r.sub == p.sub && r.obj == p.obj && r.act == p.act || r.sub == "root" ` |
| ------ | ------------------------------------------------------------ |
|        |                                                              |

只要访问主体是`root`一律放行。

验证：

| ` 1 2 3 4 5 6 7 8 9 10 11 ` | `func main() {  e, err := casbin.NewEnforcer("./model.conf", "./policy.csv")  if err != nil {    log.Fatalf("NewEnforecer failed:%v\n", err)  }   check(e, "root", "data1", "read")  check(e, "root", "data2", "write")  check(e, "root", "data1", "execute")  check(e, "root", "data3", "rwx") } ` |
| --------------------------- | ------------------------------------------------------------ |
|                             |                                                              |

因为`sub = "root"`时，匹配器一定能通过，运行结果：

| `1 2 3 4 5 ` | `$ go run main.go root CAN read data1 root CAN write data2 root CAN execute data1 root CAN rwx data3 ` |
| ------------ | ------------------------------------------------------------ |
|              |                                                              |

## RBAC 模型

`ACL`模型在用户和资源都比较少的情况下没什么问题，但是用户和资源量一大，`ACL`就会变得异常繁琐。想象一下，每次新增一个用户，都要把他需要的权限重新设置一遍是多么地痛苦。`RBAC`（role-based-access-control）模型通过引入角色（`role`）这个中间层来解决这个问题。每个用户都属于一个角色，例如开发者、管理员、运维等，每个角色都有其特定的权限，权限的增加和删除都通过角色来进行。这样新增一个用户时，我们只需要给他指派一个角色，他就能拥有该角色的所有权限。修改角色的权限时，属于这个角色的用户权限就会相应的修改。

在`casbin`中使用`RBAC`模型需要在模型文件中添加`role_definition`模块：

| `1 2 3 4 5 ` | `[role_definition] g = _, _ [matchers] m = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act ` |
| ------------ | ------------------------------------------------------------ |
|              |                                                              |

`g = _,_`定义了用户——角色，角色——角色的映射关系，前者是后者的成员，拥有后者的权限。然后在匹配器中，我们不需要判断`r.sub`与`p.sub`完全相等，只需要使用`g(r.sub, p.sub)`来判断请求主体`r.sub`是否属于`p.sub`这个角色即可。最后我们修改策略文件添加用户——角色定义：

| `1 2 3 4 5 ` | `p, admin, data, read p, admin, data, write p, developer, data, read g, dajun, admin g, lizi, developer ` |
| ------------ | ------------------------------------------------------------ |
|              |                                                              |

上面的`policy.csv`文件规定了，`dajun`属于`admin`管理员，`lizi`属于`developer`开发者，使用`g`来定义这层关系。另外`admin`对数据`data`用`read`和`write`权限，而`developer`对数据`data`只有`read`权限。

| ` 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 ` | `package main import (  "fmt"  "log"   "github.com/casbin/casbin/v2" ) func check(e *casbin.Enforcer, sub, obj, act string) {  ok, _ := e.Enforce(sub, obj, act)  if ok {    fmt.Printf("%s CAN %s %s\n", sub, act, obj)  } else {    fmt.Printf("%s CANNOT %s %s\n", sub, act, obj)  } } func main() {  e, err := casbin.NewEnforcer("./model.conf", "./policy.csv")  if err != nil {    log.Fatalf("NewEnforecer failed:%v\n", err)  }   check(e, "dajun", "data", "read")  check(e, "dajun", "data", "write")  check(e, "lizi", "data", "read")  check(e, "lizi", "data", "write") } ` |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              |                                                              |

很显然`lizi`所属角色没有`write`权限：

| `1 2 3 4 ` | `dajun CAN read data dajun CAN write data lizi CAN read data lizi CANNOT write data ` |
| ---------- | ------------------------------------------------------------ |
|            |                                                              |

### 多个`RBAC`

`casbin`支持同时存在多个`RBAC`系统，即用户和资源都有角色：

| `1 2 3 4 5 6 ` | `[role_definition] g=_,_ g2=_,_ [matchers] m = g(r.sub, p.sub) && g2(r.obj, p.obj) && r.act == p.act ` |
| -------------- | ------------------------------------------------------------ |
|                |                                                              |

上面的模型文件定义了两个`RBAC`系统`g`和`g2`，我们在匹配器中使用`g(r.sub, p.sub)`判断请求主体属于特定组，`g2(r.obj, p.obj)`判断请求资源属于特定组，且操作一致即可放行。

策略文件:

| ` 1 2 3 4 5 6 7 8 9 10 11 ` | `p, admin, prod, read p, admin, prod, write p, admin, dev, read p, admin, dev, write p, developer, dev, read p, developer, dev, write p, developer, prod, read g, dajun, admin g, lizi, developer g2, prod.data, prod g2, dev.data, dev ` |
| --------------------------- | ------------------------------------------------------------ |
|                             |                                                              |

先看角色关系，即最后 4 行，`dajun`属于`admin`角色，`lizi`属于`developer`角色，`prod.data`属于生产资源`prod`角色，`dev.data`属于开发资源`dev`角色。`admin`角色拥有对`prod`和`dev`类资源的读写权限，`developer`只能拥有对`dev`的读写权限和`prod`的读权限。

| `1 2 3 4 5 ` | `check(e, "dajun", "prod.data", "read") check(e, "dajun", "prod.data", "write") check(e, "lizi", "dev.data", "read") check(e, "lizi", "dev.data", "write") check(e, "lizi", "prod.data", "write") ` |
| ------------ | ------------------------------------------------------------ |
|              |                                                              |

第一个函数中`e.Enforce()`方法在实际执行的时候先获取`dajun`所属角色`admin`，再获取`prod.data`所属角色`prod`，根据文件中第一行`p, admin, prod, read`允许请求。最后一个函数中`lizi`属于角色`developer`，而`prod.data`属于角色`prod`，所有策略都不允许，故该请求被拒绝：

| `1 2 3 4 5 ` | `dajun CAN read prod.data dajun CAN write prod.data lizi CAN read dev.data lizi CAN write dev.data lizi CANNOT write prod.data ` |
| ------------ | ------------------------------------------------------------ |
|              |                                                              |

### 多层角色

`casbin`还能为角色定义所属角色，从而实现多层角色关系，这种权限关系是可以传递的。例如`dajun`属于高级开发者`senior`，`seinor`属于开发者，那么`dajun`也属于开发者，拥有开发者的所有权限。我们可以定义开发者共有的权限，然后额外为`senior`定义一些特殊的权限。

模型文件不用修改，策略文件改动如下：

| `1 2 3 4 5 ` | `p, senior, data, write p, developer, data, read g, dajun, senior g, senior, developer g, lizi, developer ` |
| ------------ | ------------------------------------------------------------ |
|              |                                                              |

上面`policy.csv`文件定义了高级开发者`senior`对数据`data`有`write`权限，普通开发者`developer`对数据只有`read`权限。同时`senior`也是`developer`，所以`senior`也继承其`read`权限。`dajun`属于`senior`，所以`dajun`对`data`有`read`和`write`权限，而`lizi`只属于`developer`，对数据`data`只有`read`权限。

| `1 2 3 4 ` | `check(e, "dajun", "data", "read") check(e, "dajun", "data", "write") check(e, "lizi", "data", "read") check(e, "lizi", "data", "write") ` |
| ---------- | ------------------------------------------------------------ |
|            |                                                              |

### `RBAC` domain

在`casbin`中，角色可以是全局的，也可以是特定`domain`（领域）或`tenant`（租户），可以简单理解为**组**。例如`dajun`在组`tenant1`中是管理员，拥有比较高的权限，在`tenant2`可能只是个弟弟。

使用`RBAC domain`需要对模型文件做以下修改：

| ` 1 2 3 4 5 6 7 8 9 10 11 ` | `[request_definition] r = sub, dom, obj, act [policy_definition] p = sub, dom, obj, act [role_definition] g = _,_,_ [matchers] m = g(r.sub, p.sub, r.dom) && r.dom == p.dom && r.obj == p.obj && r.act == p.obj ` |
| --------------------------- | ------------------------------------------------------------ |
|                             |                                                              |

`g=_,_,_`表示前者在后者中拥有中间定义的角色，在匹配器中使用`g`要带上`dom`。

| `1 2 3 4 ` | `p, admin, tenant1, data1, read p, admin, tenant2, data2, read g, dajun, admin, tenant1 g, dajun, developer, tenant2 ` |
| ---------- | ------------------------------------------------------------ |
|            |                                                              |

在`tenant1`中，只有`admin`可以读取数据`data1`。在`tenant2`中，只有`admin`可以读取数据`data2`。`dajun`在`tenant1`中是`admin`，但是在`tenant2`中不是。

| ` 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 ` | `func check(e *casbin.Enforcer, sub, domain, obj, act string) {  ok, _ := e.Enforce(sub, domain, obj, act)  if ok {    fmt.Printf("%s CAN %s %s in %s\n", sub, act, obj, domain)  } else {    fmt.Printf("%s CANNOT %s %s in %s\n", sub, act, obj, domain)  } } func main() {  e, err := casbin.NewEnforcer("./model.conf", "./policy.csv")  if err != nil {    log.Fatalf("NewEnforecer failed:%v\n", err)  }   check(e, "dajun", "tenant1", "data1", "read")  check(e, "dajun", "tenant2", "data2", "read") } ` |
| ------------------------------------------------ | ------------------------------------------------------------ |
|                                                  |                                                              |

结果不出意料：

| `1 2 ` | `dajun CAN read data1 in tenant1 dajun CANNOT read data2 in tenant2 ` |
| ------ | ------------------------------------------------------------ |
|        |                                                              |

## ABAC

`RBAC`模型对于实现比较规则的、相对静态的权限管理非常有用。但是对于特殊的、动态的需求，`RBAC`就显得有点力不从心了。例如，我们在不同的时间段对数据`data`实现不同的权限控制。正常工作时间`9:00-18:00`所有人都可以读写`data`，其他时间只有数据所有者能读写。这种需求我们可以很方便地使用`ABAC`（attribute base access list）模型完成：

| ` 1 2 3 4 5 6 7 8 9 10 11 ` | `[request_definition] r = sub, obj, act [policy_definition] p = sub, obj, act [matchers] m = r.sub.Hour >= 9 && r.sub.Hour < 18 || r.sub.Name == r.obj.Owner [policy_effect] e = some(where (p.eft == allow)) ` |
| --------------------------- | ------------------------------------------------------------ |
|                             |                                                              |

该规则不需要策略文件：

| ` 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 ` | `type Object struct {  Name  string  Owner string } type Subject struct {  Name string  Hour int } func check(e *casbin.Enforcer, sub Subject, obj Object, act string) {  ok, _ := e.Enforce(sub, obj, act)  if ok {    fmt.Printf("%s CAN %s %s at %d:00\n", sub.Name, act, obj.Name, sub.Hour)  } else {    fmt.Printf("%s CANNOT %s %s at %d:00\n", sub.Name, act, obj.Name, sub.Hour)  } } func main() {  e, err := casbin.NewEnforcer("./model.conf", "./policy.csv")  if err != nil {    log.Fatalf("NewEnforecer failed:%v\n", err)  }   o := Object{"data", "dajun"}  s1 := Subject{"dajun", 10}  check(e, s1, o, "read")   s2 := Subject{"lizi", 10}  check(e, s2, o, "read")   s3 := Subject{"dajun", 20}  check(e, s3, o, "read")   s4 := Subject{"lizi", 20}  check(e, s4, o, "read") } ` |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              |                                                              |

显然`lizi`在`20:00`不能`read`数据`data`：

| `1 2 3 4 ` | `dajun CAN read data at 10:00 lizi CAN read data at 10:00 dajun CAN read data at 20:00 lizi CANNOT read data at 20:00 ` |
| ---------- | ------------------------------------------------------------ |
|            |                                                              |

我们知道，在`model.conf`文件中可以通过`r.sub`和`r.obj`，`r.act`来访问传给`Enforce`方法的参数。实际上`sub/obj`可以是结构体对象，得益于`govaluate`库的强大功能，我们可以在`model.conf`文件中获取这些结构体的字段值。如上面的`r.sub.Name`、`r.Obj.Owner`等。`govaluate`库的内容可以参见我之前的一篇文章[《Go 每日一库之 govaluate》](https://darjun.github.io/2020/04/01/godailylib/govaluate/)。

使用`ABAC`模型可以非常灵活的权限控制，但是一般情况下`RBAC`就已经够用了。

## 模型存储

上面代码中，我们一直将模型存储在文件中。`casbin`也可以实现在代码中动态初始化模型，例如`get-started`的例子可以改写为：

| ` 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 ` | `func main() {  m := model.NewModel()  m.AddDef("r", "r", "sub, obj, act")  m.AddDef("p", "p", "sub, obj, act")  m.AddDef("e", "e", "some(where (p.eft == allow))")  m.AddDef("m", "m", "r.sub == g.sub && r.obj == p.obj && r.act == p.act")   a := fileadapter.NewAdapter("./policy.csv")  e, err := casbin.NewEnforcer(m, a)  if err != nil {    log.Fatalf("NewEnforecer failed:%v\n", err)  }   check(e, "dajun", "data1", "read")  check(e, "lizi", "data2", "write")  check(e, "dajun", "data1", "write")  check(e, "dajun", "data2", "read") } ` |
| ------------------------------------------------ | ------------------------------------------------------------ |
|                                                  |                                                              |

同样地，我们也可以从字符串中加载模型：

| ` 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 ` | `func main() {  text := `  [request_definition]  r = sub, obj, act    [policy_definition]  p = sub, obj, act    [policy_effect]  e = some(where (p.eft == allow))    [matchers]  m = r.sub == p.sub && r.obj == p.obj && r.act == p.act  `   m, _ := model.NewModelFromString(text)  a := fileadapter.NewAdapter("./policy.csv")  e, _ := casbin.NewEnforcer(m, a)   check(e, "dajun", "data1", "read")  check(e, "lizi", "data2", "write")  check(e, "dajun", "data1", "write")  check(e, "dajun", "data2", "read") } ` |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              |                                                              |

但是这两种方式并不推荐。

## 策略存储

在前面的例子中，我们都是将策略存储在`policy.csv`文件中。一般在实际应用中，很少使用文件存储。`casbin`以第三方适配器的方式支持多种存储方式包括`MySQL/MongoDB/Redis/Etcd`等，还可以实现自己的存储。完整列表看这里https://casbin.org/docs/en/adapters。下面我们介绍使用`Gorm Adapter`。先连接到数据库，执行下面的`SQL`：

| ` 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 ` | `CREATE DATABASE IF NOT EXISTS casbin; USE casbin; CREATE TABLE IF NOT EXISTS casbin_rule (  p_type VARCHAR(100) NOT NULL,  v0 VARCHAR(100),  v1 VARCHAR(100),  v2 VARCHAR(100),  v3 VARCHAR(100),  v4 VARCHAR(100),  v5 VARCHAR(100) ); INSERT INTO casbin_rule VALUES ('p', 'dajun', 'data1', 'read', '', '', ''), ('p', 'lizi', 'data2', 'write', '', '', ''); ` |
| --------------------------------------------- | ------------------------------------------------------------ |
|                                               |                                                              |

然后使用`Gorm Adapter`加载`policy`，`Gorm Adapter`默认使用`casbin`库中的`casbin_rule`表：

| ` 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 ` | `package main import (  "fmt"   "github.com/casbin/casbin/v2"  gormadapter "github.com/casbin/gorm-adapter/v2"  _ "github.com/go-sql-driver/mysql" ) func check(e *casbin.Enforcer, sub, obj, act string) {  ok, _ := e.Enforce(sub, obj, act)  if ok {    fmt.Printf("%s CAN %s %s\n", sub, act, obj)  } else {    fmt.Printf("%s CANNOT %s %s\n", sub, act, obj)  } } func main() {  a, _ := gormadapter.NewAdapter("mysql", "root:12345@tcp(127.0.0.1:3306)/")  e, _ := casbin.NewEnforcer("./model.conf", a)   check(e, "dajun", "data1", "read")  check(e, "lizi", "data2", "write")  check(e, "dajun", "data1", "write")  check(e, "dajun", "data2", "read") } ` |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              |                                                              |

运行：

| `1 2 3 4 ` | `dajun CAN read data1 lizi CAN write data2 dajun CANNOT write data1 dajun CANNOT read data2 ` |
| ---------- | ------------------------------------------------------------ |
|            |                                                              |

## 使用函数

我们可以在匹配器中使用函数。`casbin`内置了一些函数`keyMatch/keyMatch2/keyMatch3/keyMatch4`都是匹配 URL 路径的，`regexMatch`使用正则匹配，`ipMatch`匹配 IP 地址。参见https://casbin.org/docs/en/function。使用内置函数我们能很容易对路由进行权限划分：

| `1 2 ` | `[matchers] m = r.sub == p.sub && keyMatch(r.obj, p.obj) && r.act == p.act ` |
| ------ | ------------------------------------------------------------ |
|        |                                                              |

| `1 2 ` | `p, dajun, user/dajun/*, read p, lizi, user/lizi/*, read ` |
| ------ | ---------------------------------------------------------- |
|        |                                                            |

不同用户只能访问其对应路由下的 URL：

| ` 1 2 3 4 5 6 7 8 9 10 ` | `func main() {  e, err := casbin.NewEnforcer("./model.conf", "./policy.csv")  if err != nil {    log.Fatalf("NewEnforecer failed:%v\n", err)  }   check(e, "dajun", "user/dajun/1", "read")  check(e, "lizi", "user/lizi/2", "read")  check(e, "dajun", "user/lizi/1", "read") } ` |
| ------------------------ | ------------------------------------------------------------ |
|                          |                                                              |

输出：

| `1 2 3 ` | `dajun CAN read user/dajun/1 lizi CAN read user/lizi/2 dajun CANNOT read user/lizi/1 ` |
| -------- | ------------------------------------------------------------ |
|          |                                                              |

我们当然也可以定义自己的函数。先定义一个函数，返回 bool：

| ` 1 2 3 4 5 6 7 8 9 10 11 12 ` | `func KeyMatch(key1, key2 string) bool {  i := strings.Index(key2, "*")  if i == -1 {    return key1 == key2  }   if len(key1) > i {    return key1[:i] == key2[:i]  }   return key1 == key2[:i] } ` |
| ------------------------------ | ------------------------------------------------------------ |
|                                |                                                              |

这里实现了一个简单的正则匹配，只处理`*`。

然后将这个函数用`interface{}`类型包装一层：

| `1 2 3 4 5 6 ` | `func KeyMatchFunc(args ...interface{}) (interface{}, error) {  name1 := args[0].(string)  name2 := args[1].(string)   return (bool)(KeyMatch(name1, name2)), nil } ` |
| -------------- | ------------------------------------------------------------ |
|                |                                                              |

然后添加到权限认证器中：

| `1 ` | `e.AddFunction("my_func", KeyMatchFunc) ` |
| ---- | ----------------------------------------- |
|      |                                           |

这样我们就可以在匹配器中使用该函数实现正则匹配了：

| `1 2 ` | `[matchers] m = r.sub == p.sub && my_func(r.obj, p.obj) && r.act == p.act ` |
| ------ | ------------------------------------------------------------ |
|        |                                                              |

接下来我们在策略文件中为`dajun`赋予权限：

| `1 ` | `p, dajun, data/*, read ` |
| ---- | ------------------------- |
|      |                           |

`dajun`对匹配模式`data/*`的文件都有`read`权限。

验证一下：

| `1 2 3 4 ` | `check(e, "dajun", "data/1", "read") check(e, "dajun", "data/2", "read") check(e, "dajun", "data/1", "write") check(e, "dajun", "mydata", "read") ` |
| ---------- | ------------------------------------------------------------ |
|            |                                                              |

`dajun`对`data/1`没有`write`权限，`mydata`不符合`data/*`模式，也没有`read`权限：

| `1 2 3 4 ` | `dajun CAN read data/1 dajun CAN read data/2 dajun CANNOT write data/1 dajun CANNOT read mydata ` |
| ---------- | ------------------------------------------------------------ |
|            |                                                              |

## 总结

`casbin`功能强大，简单高效，且多语言通用。值得学习。