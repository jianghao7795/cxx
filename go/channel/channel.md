在 Go 语言中，提倡使用通信来共享内存，而不是通过共享内存来通信，这里的通信就是通过 channel 发送接收消息的方式进行数据传递，而不是通过修改同一个变量。所以在数据流动、传递的场景中要考虑优先使用 channel，它是并发安全的，性能也不错。

# channel 声明

```go
ch := make(chan string)
复制代码
```

- 使用 make 函数
- chan 是关键字，表示 channel 类型，chan 是一个集合类型
- string 表示 channel 里存放数据的类型

在声明 channel 时，需要指定被共享的数据类型，其中可以通过 channel 共享的类型有 内置类型、命名类型、结构类型和引用类型的值或指针。

# channel 使用

chan 只有发送和接收两种操作：

发送：`<-chan` //向chan内发送数据 接收：`chan->` //从chan中获取数据

channel 分为有缓冲和无缓冲两种，下面来分别介绍下。

## 无缓冲 channel

无缓冲 channel，通道的容量是0，它不能存储数据，只是起到了传输的作用，所以无缓冲 channel 的发送和接收操作是同时进行的。

示例：

```go
package main

import (
 "fmt"
)

func main() {
 ch := make(chan string)
 go func(){
  fmt.Println("微客鸟窝")
  ch <- "执行完毕"
 }()

 fmt.Println("我是无尘啊")
 value := <-ch
 fmt.Println("获取的chan的值为：",value)
}
复制代码
```

运行结果：

```go
我是无尘啊
微客鸟窝
获取的chan的值为： 执行完毕
复制代码
```

## 有缓冲 channel

在声明的时候，我们可以传入第二个参数，即「channel容量大小」，这样就是创建了一个有缓冲 channel。

- 有缓冲 channel 内部有一个队列
- 发送操作是向队列尾部追加元素，如果队列满了，则阻塞等待，直到接收操作从队列中取走元素。
- 接收操作是从队列头部取走元素，如果队列为空，则阻塞等待，直到发送操作向队列追加了元素。
- 可以通过内置函数 `cap()` 来获取 channel 的容量，通过内置函数 `len()` 获取 channel 中元素个数。

```go
ch := make(chan int,3)
ch <- 1
ch <- 2
fmt.Println("容量为",cap(ch),"元素个数为：",len(ch))
//打印结果：容量为 3 元素个数为：2
复制代码
```

# 关闭 channel

使用内置函数 `close(ch)`

对端可以判断channel是否关闭

```go
if num,ok := <- ch;ok == true{
	//如果对端已经关闭，ok-->false
	//如果对端没有关闭，ok-->true
}
复制代码
```

也可以使用range 替代ok

```go
//当channel关闭时，range方式会将里面剩余的数据全部读取完成，再退出
//ch不能替换为<-ch ; 
for num := range ch{
  fmt.Println("读到数据：",num)
}
复制代码
```

channel 关闭了就不能再向其发送数据了，否则会引起 panic 异常。 可以从关闭了的 channel 中接收数据，如果没数据，则接收到的是元素类型的零值。

# 单向 channel

只能发送或者只能接收的 channel 为单向 channel。

```go
send := make(ch<- int) //只能发送数据给channel
receive := make(<-ch int) //只能从channel中接收数据
复制代码
```

示例：

```go
package main

import (
 "fmt"
)
//只能发送通道
func send(s chan<- string){
 s <- "微客鸟窝"
}
//只能接收通道
func receive(r <-chan string){
 str := <-r
 fmt.Println("str:",str)
}
func main() {
 //创建一个双向通道
 ch := make(chan string)
 go send(ch)
 receive(ch)
}

//运行结果: str: 微客鸟窝
复制代码
```

# 实战技巧

## 控制 goroutine 并发的数量

```go
func main(){
	m1 := make(chan bool)
	go func() {
			for{
			select {
			case <-m1:
				fmt.Println("close")
				return
			case <-time.After(time.Millisecond*10000):
				fmt.Println("-----")
			}
		}
	}()

	// 控制 goroutine 并发的数量
	limit := make(chan bool,3)
	wg := sync.WaitGroup{}
	for i :=0;i<10;i++{
		limit <- true
		wg.Add(1)
		go func(i int) {
			defer func() {
				<- limit
				wg.Done()
			}()
			//HandleLogic()
			fmt.Println(i)
		}(i)
	}
	wg.Wait()

	m1 <- true
	close(m1)
}
复制代码
```

## for select 无限循环模式

一般是和 channel 组合完成任务，格式为：

```go
for { //for 无限循环，或者使用 for range 循环
  select {
    //通过 channel 控制
    case <-done:
      return
    default:
      //执行具体的任务
  }
}
复制代码
```

这种是 `for + select` 多路复用的并发模式，哪个 case 满足条件就执行对应的分支，直到有满足退出的条件，才会退出循环。没有退出条件满足时，则会一直执行 default 分支。

## select timeout 模式

假如一个请求需要访问服务器获取数据，但是可能因为网络问题而迟迟获取不到响应，这时候就需要设置一个超时时间：

```go
package main

import (
 "fmt"
 "time"
)

func main() {
 result := make(chan string)
 timeout := time.After(3 * time.Second) //3秒后超时
 go func() {
  //模拟网络访问
  time.Sleep(5 * time.Second)
  result <- "服务端结果"
 }()
 for {
  select {
  case v := <-result:
   fmt.Println(v)
  case <-timeout:
   fmt.Println("网络访问超时了")
   return
  default:
   fmt.Println("等待...")
   time.Sleep(1 * time.Second)
  }
 }
}
复制代码
```

运行结果：

```go
等待...
等待...
等待...
网络访问超时了
复制代码
```

select timeout 模式核心是通过 time.After 函数设置的超时时间，防止因为异常造成 select 语句无限等待。
 注意：不要写成这样 `case <- time.After(time.Second)`, 这样是本次监听动作的超时时间，意思就说，只有在本次 select 操作中会有效，再次 select 又会重新开始计时，但是有default ，每次都会走到 default，那case 超时操作，肯定执行不到了。