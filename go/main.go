package main

import (
	"fmt"
	"github.com/gomodule/redigo/redis"
	"os"
	"strings"
	"time"
)

func testRedis() bool {
	// e.g. REDIS_PORT = tcp://172.17.0.89:6379
	// time.Unix()
	fmt.Println("REDIS_PORT", os.Getenv("REDIS_PORT"))
	addr := strings.Split(os.Getenv("REDIS_PORT"), "://")
	conn, err := redis.DialTimeout(addr[0], addr[1], 0, 1*time.Second, 1*time.Second)
	if err != nil {
		fmt.Println(err)
		return false
	}
	defer conn.Close()

	size, err := conn.Do("DBSIZE")
	if err != nil {
		fmt.Println(err)
		return false
	}
	fmt.Printf("DB size is %d \n", size)

	_, err = conn.Do("SET", "user:user0", 123)
	_, err = conn.Do("SET", "user:user1", 456)
	_, err = conn.Do("APPEND", "user:user0", 87)

	user0, err := redis.Int(conn.Do("GET", "user:user0"))
	user1, err := redis.Int(conn.Do("GET", "user:user1"))

	fmt.Printf("user0 is %d , user1 is %d \n", user0, user1)
	return true
}

func main() {
	fmt.Println(time.Now(), "[Redis test start]")
	fmt.Println("dfasdfasdfasd")

	if testRedis() {
		fmt.Println("[Redis test ok]")
	} else {
		fmt.Println("[Redis test failed]")
	}
}
