package main

import (
	"fmt"
	"log"
	"math/rand"
	"time"
)

func producer(header string, channel chan<- string) {
	for {
		channel <- fmt.Sprintf("%s:%v", header, rand.Int31())
		time.Sleep(time.Second)
		fmt.Println(time.Now())
	}
}

func customer(channel <-chan string) {
	log.Println("123123123")
	for {
		message := <-channel
		fmt.Println(message)
	}
}

func main() {
	channel := make(chan string)

	go producer("cat", channel)
	go producer("dog", channel)
	customer(channel)

	go producer("asdfasd", channel)

}
