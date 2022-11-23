### 文件操作相关API

```go
//获取当前工作目录的根路径
func Getwd() (dir string, err error)

//将工作目录修改为dir
func Chdir(dir string) error

//修改name文件或文件夹的权限（对应linux的chmod命令）
func Chmod(name string, mode FileMode) error

//修改name文件或文件夹的用户和组（对应linux的chmod命令）
func Chown(name string, uid, gid int) error

//使用指定的权限和名称创建一个文件夹（对于linux的mkdir命令）
func Mkdir(name string, perm FileMode) error

//使用指定的权限和名称创建一个文件夹，并自动创建父级目录（对于linux的mkdir -p目录）
func MkdirAll(path string, perm FileMode) error

//修改一个文件或文件夹的文字（对应linux的mv命令）
func Rename(oldpath, newpath string) error

//删除指定的文件夹或者目录，不能递归删除，只能删除一个空文件夹或一个文件（对应linux的 rm 命令）
func Remove(name string) error

//递归删除文件夹或者文件（对应linux的 rm -rf 命令）
func RemoveAll(path string) error

//根据提供的文件名创建新的文件，返回一个文件对象，默认权限是0666
func Create(name string) (file *File, err Error)

//根据文件描述符创建相应的文件，返回一个文件对象
func NewFile(fd uintptr, name string) *File

//获取文件的名称
func (f *File) Name() string

//获取文件的信息，里面有文件的名称，大小，修改时间等
func (f *File) Stat() (fi FileInfo, err error)

//只读方式打开一个名称为name的文件，返回一个*File和一个err
func Open(name string) (file *File, err Error)

//打开名称为name的文件，flag是打开的方式，只读、读写等，perm是权限
func OpenFile(name string, flag int, perm uint32) (file *File, err Error)

//写入byte类型的信息到文件
func (file *File) Write(b []byte) (n int, err Error)

//在指定位置开始写入byte类型的信息
func (file *File) WriteAt(b []byte, off int64) (n int, err Error)

//写入string信息到文件
func (file *File) WriteString(s string) (ret int, err Error)

//读取数据到b中
func (file *File) Read(b []byte) (n int, err Error)

//从off开始读取数据到b中
func (file *File) ReadAt(b []byte, off int64) (n int, err Error)

复制代码
```

## 示例

### 文件操作

```go
func main() {
    wd, _ := os.Getwd()
    println("当前工作目录的根路径:", wd)
 
    os.Chdir("/var") //将工作目录修改为/var
    w, _ := os.Getwd()
    println("x修改后的当前工作目录的根路径:", w)
	
    os.Chdir(wd) //将工作目录改回原来的目录
    os.Chmod(wd+"/src/a.sh", 0777) // 修改文件的权限
}
复制代码
```

### 获取文件信息

```go
func main() {
  wd, _ := os.Getwd() //获取当前工作目录的根路径
	fileInfo,err := os.Stat(wd + "/test.txt") //test.txt内容为“test”
	if err != nil {
		fmt.Println(err)
		return
	}
	//%T打印值的类型; %v值的默认格式表示
	fmt.Printf("%T: %v\n",fileInfo,fileInfo)
	fmt.Println("文件的名字:", fileInfo.Name())
	fmt.Println("是否是一个目录:", fileInfo.IsDir())
	fmt.Println("文件的大小:", fileInfo.Size())
	fmt.Println("文件的权限:", fileInfo.Mode())
	fmt.Println("文件的修改时间:", fileInfo.ModTime())
}
复制代码
```

运行结果：

```shell
*os.fileStat: &{test.txt 32 {2405860976 30934330} {2939839054 30934330} {2939839054 30934330} 0 4 0 0 {0 0} E:\WWW\zzztest/test.txt 0 0 0 false}
文件的名字: test.txt
是否是一个目录: false
文件的大小: 4
文件的权限: -rw-rw-rw-
文件的修改时间: 2022-01-09 17:24:21.3510734 +0800 CST
复制代码
```

### 读文件

```go
func main() {
    // 打开文件
    file, err := os.Open("./test.txt")
    if err != nil {
        fmt.Println("open file err :", err)
        return
    }
    defer file.Close() // 关闭文件
    // 定义接收文件读取的字节数组
    var buf [128]byte
    var content []byte
    for {
        n, err := file.Read(buf[:])
        if err == io.EOF {
            // 读取结束
            break
        }
        if err != nil {
            fmt.Println("read file err ", err)
            return
        }
        content = append(content, buf[:n]...)
    }
    fmt.Println(string(content)) //test
}
复制代码
```

### 写文件

```go
func main() {
    // 新建文件
    file, err := os.Create("./xxx.txt")
    if err != nil {
        fmt.Println(err)
        return
    }
    defer file.Close()
    for i := 0; i < 5; i++ {
        file.WriteString("ab\n")
        file.Write([]byte("cd\n"))
    }
}
复制代码
```

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f36a78f7709b410eb84a692640af96bd~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

# 获取信息

```go
//获取主机名
func Hostname() (name string, err error)

//返回表示环境变量的格式为”key=value”的字符串的切片拷贝
func Environ() []string 

//获取某个环境变量
func Getenv(key string) string 

//设置一个环境变量,失败返回错误，经测试当前设置的环境变量只在 当前进程有效（当前进程衍生的所以的go程都可以拿到，子go程与父go程的环境变量可以互相获取）；进程退出消失
func Setenv(key, value string) error 

//删除当前程序已有的所有环境变量。不会影响当前电脑系统的环境变量，这些环境变量都是对当前go程序而言的
func Clearenv()

//让当前程序以给出的状态码（code）退出。一般来说，状态码0表示成功，非0表示出错。程序会立刻终止，defer的函数不会被执行。
func Exit(code int)  

//获取调用者的用户id
func Getuid() int 

//获取调用者的有效用户id
func Geteuid() int 

//获取调用者的组id
func Getgid() int 

//获取调用者的有效组id
func Getegid() int 

//获取调用者所在的所有组的组id
func Getgroups() ([]int, error) 

//获取调用者所在进程的进程id
func Getpid() int  

//获取调用者所在进程的父进程的进程id
func Getppid() int 

//返回一个用于保管临时文件的默认目录
func TempDir() string 
复制代码
```

## 示例

```go
func main() {
	hostname, _ := os.Hostname()
	println("主机名:", hostname)
 
	println("gopath环境变量:", os.Getenv("GOPATH"))
 
	os.Setenv("test", "test") // 设置环境变量
	println("上一步设置的test环境变量:", os.Getenv("test"))
 
	os.Clearenv() // 清除当前程序的所以环境变量
	println("清理后的环境变量test和GOPATH:", os.Getenv("test"), os.Getenv("GOPATH"))
 
	println("调用者的用户id:", os.Getuid())
	println("调用者的有效用户id:", os.Geteuid())
	println("调用者的组id:", os.Getgid())
	println("调用者的有效组id:", os.Getegid())
 
	sli, _ := os.Getgroups()
	println("调用者所在的所有组的组id:", sli) //
 
	println("调用者所在进程的进程id:", os.Getpid())
	println("调用者所在进程的父进程的进程id:", os.Getppid())
}
```

运行结果：

```shell
主机名: DESKTOP-2DE401V
gopath环境变量: E:\WWW\GolangPro
上一步设置的test环境变量: test
清理后的环境变量test和GOPATH:
调用者的用户id: -1
调用者的有效用户id: -1
调用者的组id: -1
调用者的有效组id: -1
调用者所在的所有组的组id: [0/0]0x0
调用者所在进程的进程id: 4364
调用者所在进程的父进程的进程id: 6176
```

# 一些判断方法（不常用）

- `func IsPathSeparator(c uint8) bool`
   判断字c是否是一个路径分隔符
- `func IsExist(err error) bool`
   判断一个错误是否表示一个文件或文件夹是否已存在，ErrExist和一些系统调用错误会使它返回真。
- `func IsNotExist(err error) bool`
   判断一个错误是否表示一个文件或文件夹是否不存在，ErrNotExist和一些系统调用错误会使它返回真。
- `func IsPermission(err error) bool`
   判断一个错误是否表示权限不足，ErrPermission和一些系统调用错误会使它返回真。

## 示例

```go
func main() {
    print("判断 / \\ : 是否是路径分隔符: ")
    println(os.IsPathSeparator('/'), os.IsPathSeparator('\\'), os.IsPathSeparator(':'))
 
    print("判断系统的ErrExist和我们自己创建的error是不是表示文件或文件夹已存在: ")
    println(os.IsExist(os.ErrExist), os.IsExist(errors.New("file already exists")))
 
}
```

运行结果：

```text
判断 / \ : 是否是路径分隔符: true true false
判断系统的ErrExist和我们自己创建的error是不是表示文件或文件夹已存在: true false
```