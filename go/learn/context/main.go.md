```go
package main

import (
	"context"
	"fmt"
	"time"
)

func main() {
	ctx, cancel := context.WithCancel(context.Background())
	// flag := make(chan bool)
	message := make(chan int)
	go son(ctx, message)
	for i := 0; i < 10; i++ {
		message <- i
	}
	cancel()
	// flag <- true
	time.Sleep(time.Second)

	// go func() {
	// 	for {
	// 		select {
	// 		case <-ctx.Done():

	// 		}
	// 	}
	// }()
}

func son(ctx context.Context, msg chan int) {
	t := time.Tick(time.Second)
	for range t {
		select {
		case m := <-msg:
			fmt.Printf("接收: %d\n", m)
		case <-ctx.Done():
			fmt.Println("结束")
			return
		}
	}
}
```