log

```go
func Fatal(v ...interface{})
func Fatalf(format string, v ...interface{})
func Fatalln(v ...interface{})
func Panic(v ...interface{})
func Panicf(format string, v ...interface{})
func Panicln(v ...interface{})
func Print(v ...interface{})
func Printf(format string, v ...interface{})
func Println(v ...interface{})
```

示例

```go
//l.Output(2, fmt.Sprintf(format, v...))
	v := "普通"
	log.Printf("一条%s日志。\n", v)
	
	//l.Output(2, fmt.Sprintln(v...))
	log.Println("一条一条普通日志。")
	
	//l.Output(2, fmt.Sprintln(v...))
	//os.Exit(1)
	log.Fatalln("一条触发fatal的日志。")
	
	//s := fmt.Sprintln(v...)
	//l.Output(2, s)
	//panic(s)
	log.Panicln("一条触发panic的日志。")
```

