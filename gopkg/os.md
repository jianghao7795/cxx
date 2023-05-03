API

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
```

## 示例



文件操作

```go
func main() {
    os.Getwd()
}
```

