# [Go操作Redis实战](https://www.cnblogs.com/itbsl/p/14198111.html)



目录

- 安装Redis客户端
  - [连接redis](https://www.cnblogs.com/itbsl/p/14198111.html#连接redis)
- 基本指令
  - [Keys():根据正则获取keys](https://www.cnblogs.com/itbsl/p/14198111.html#keys根据正则获取keys)
  - [Type():获取key对应值得类型](https://www.cnblogs.com/itbsl/p/14198111.html#type获取key对应值得类型)
  - [Del():删除缓存项](https://www.cnblogs.com/itbsl/p/14198111.html#del删除缓存项)
  - [Exists():检测缓存项是否存在](https://www.cnblogs.com/itbsl/p/14198111.html#exists检测缓存项是否存在)
  - [Expire(),ExpireAt():设置有效期](https://www.cnblogs.com/itbsl/p/14198111.html#expireexpireat设置有效期)
  - [TTL(),PTTL():获取有效期](https://www.cnblogs.com/itbsl/p/14198111.html#ttlpttl获取有效期)
  - [DBSize():查看当前数据库key的数量](https://www.cnblogs.com/itbsl/p/14198111.html#dbsize查看当前数据库key的数量)
  - [FlushDB():清空当前数据](https://www.cnblogs.com/itbsl/p/14198111.html#flushdb清空当前数据)
  - [FlushAll():清空所有数据库](https://www.cnblogs.com/itbsl/p/14198111.html#flushall清空所有数据库)
- 字符串(string)类型
  - [Set():设置](https://www.cnblogs.com/itbsl/p/14198111.html#set设置)
  - [SetEX():设置并指定过期时间](https://www.cnblogs.com/itbsl/p/14198111.html#setex设置并指定过期时间)
  - [SetNX():设置并指定过期时间](https://www.cnblogs.com/itbsl/p/14198111.html#setnx设置并指定过期时间)
  - [Get():获取](https://www.cnblogs.com/itbsl/p/14198111.html#get获取)
  - [GetRange():字符串截取](https://www.cnblogs.com/itbsl/p/14198111.html#getrange字符串截取)
  - [Incr():增加+1](https://www.cnblogs.com/itbsl/p/14198111.html#incr增加1)
  - [IncrBy():按指定步长增加](https://www.cnblogs.com/itbsl/p/14198111.html#incrby按指定步长增加)
  - [Decr():减少-1](https://www.cnblogs.com/itbsl/p/14198111.html#decr减少-1)
  - [DecrBy():按指定步长减少](https://www.cnblogs.com/itbsl/p/14198111.html#decrby按指定步长减少)
  - [Append():追加](https://www.cnblogs.com/itbsl/p/14198111.html#append追加)
  - [StrLen():获取长度](https://www.cnblogs.com/itbsl/p/14198111.html#strlen获取长度)
- 列表(list)类型
  - [LPush():将元素压入链表](https://www.cnblogs.com/itbsl/p/14198111.html#lpush将元素压入链表)
  - [LInsert():在某个位置插入新元素](https://www.cnblogs.com/itbsl/p/14198111.html#linsert在某个位置插入新元素)
  - [LSet():设置某个元素的值](https://www.cnblogs.com/itbsl/p/14198111.html#lset设置某个元素的值)
  - [LLen():获取链表元素个数](https://www.cnblogs.com/itbsl/p/14198111.html#llen获取链表元素个数)
  - [LIndex():获取链表下标对应的元素](https://www.cnblogs.com/itbsl/p/14198111.html#lindex获取链表下标对应的元素)
  - [LRange():获取某个选定范围的元素集](https://www.cnblogs.com/itbsl/p/14198111.html#lrange获取某个选定范围的元素集)
  - [从链表左侧弹出数据](https://www.cnblogs.com/itbsl/p/14198111.html#从链表左侧弹出数据)
  - [LRem():根据值移除元素](https://www.cnblogs.com/itbsl/p/14198111.html#lrem根据值移除元素)
- 集合(set)类型
  - [SAdd():添加元素](https://www.cnblogs.com/itbsl/p/14198111.html#sadd添加元素)
  - [SPop():随机获取一个元素](https://www.cnblogs.com/itbsl/p/14198111.html#spop随机获取一个元素)
  - [SRem():删除集合里指定的值](https://www.cnblogs.com/itbsl/p/14198111.html#srem删除集合里指定的值)
  - [SSMembers():获取所有成员](https://www.cnblogs.com/itbsl/p/14198111.html#ssmembers获取所有成员)
  - [SIsMember():判断元素是否在集合中](https://www.cnblogs.com/itbsl/p/14198111.html#sismember判断元素是否在集合中)
  - [SCard():获取集合元素个数](https://www.cnblogs.com/itbsl/p/14198111.html#scard获取集合元素个数)
  - [SUnion():并集,SDiff():差集,SInter():交集](https://www.cnblogs.com/itbsl/p/14198111.html#sunion并集sdiff差集sinter交集)
- 有序集合(zset)类型
  - [ZAdd():添加元素](https://www.cnblogs.com/itbsl/p/14198111.html#zadd添加元素)
  - [ZIncrBy():增加元素分值](https://www.cnblogs.com/itbsl/p/14198111.html#zincrby增加元素分值)
  - [ZRange()、ZRevRange():获取根据score排序后的数据段](https://www.cnblogs.com/itbsl/p/14198111.html#zrangezrevrange获取根据score排序后的数据段)
  - [ZRangeByScore()、ZRevRangeByScore():获取score过滤后排序的数据段](https://www.cnblogs.com/itbsl/p/14198111.html#zrangebyscorezrevrangebyscore获取score过滤后排序的数据段)
  - [ZCard():获取元素个数](https://www.cnblogs.com/itbsl/p/14198111.html#zcard获取元素个数)
  - [ZCount():获取区间内元素个数](https://www.cnblogs.com/itbsl/p/14198111.html#zcount获取区间内元素个数)
  - [ZScore():获取元素的score](https://www.cnblogs.com/itbsl/p/14198111.html#zscore获取元素的score)
  - [ZRank()、ZRevRank():获取某个元素在集合中的排名](https://www.cnblogs.com/itbsl/p/14198111.html#zrankzrevrank获取某个元素在集合中的排名)
  - [ZRem():删除元素](https://www.cnblogs.com/itbsl/p/14198111.html#zrem删除元素)
  - [ZRemRangeByRank():根据排名来删除](https://www.cnblogs.com/itbsl/p/14198111.html#zremrangebyrank根据排名来删除)
  - [ZRemRangeByScore():根据分值区间来删除](https://www.cnblogs.com/itbsl/p/14198111.html#zremrangebyscore根据分值区间来删除)
- 哈希(hash)类型
  - [HSet():设置](https://www.cnblogs.com/itbsl/p/14198111.html#hset设置)
  - [HMset():批量设置](https://www.cnblogs.com/itbsl/p/14198111.html#hmset批量设置)
  - [HGet():获取某个元素](https://www.cnblogs.com/itbsl/p/14198111.html#hget获取某个元素)
  - [HGetAll():获取全部元素](https://www.cnblogs.com/itbsl/p/14198111.html#hgetall获取全部元素)
  - [HDel():删除某个元素](https://www.cnblogs.com/itbsl/p/14198111.html#hdel删除某个元素)
  - [HExists():判断元素是否存在](https://www.cnblogs.com/itbsl/p/14198111.html#hexists判断元素是否存在)
  - [HLen():获取长度](https://www.cnblogs.com/itbsl/p/14198111.html#hlen获取长度)



## 安装Redis客户端

Go语言中使用第三方库https://github.com/go-redis/redis连接Redis数据库并进行操作。使用以下命令下载并安装:

```shell
go get github.com/go-redis/redis/v8
```

> 注:导入时指定了版本v8,忽略版本是一个常见错误

### 连接redis

> 说明：Background返回一个非空的Context。 它永远不会被取消，没有值，也没有期限。 它通常在main函数，初始化和测试时使用，并用作传入请求的顶级上下文。

示例：

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

//Background返回一个非空的Context。 它永远不会被取消，没有值，也没有期限。 
//它通常在main函数，初始化和测试时使用，并用作传入请求的顶级上下文。
var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	pong, err := rdb.Ping(ctx).Result()
	if err != nil {
		fmt.Printf("连接redis出错，错误信息：%v", err)
	}
    fmt.Println("成功连接redis")
}
```

## 基本指令

### Keys():根据正则获取keys

示例：

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	//*表示获取所有的key
	keys, err := rdb.Keys(ctx, "*").Result()
	if err != nil {
		panic(err)
	}
	fmt.Println(keys)
}
```

### Type():获取key对应值得类型

`Type()`方法用户获取一个key对应值的类型

示例：

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	vType, err := rdb.Type(ctx, "key").Result()
	if err != nil {
		panic(err)
	}
	fmt.Println(vType) //string
}
```

### Del():删除缓存项

示例：

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	n, err := rdb.Del(ctx, "key1", "key2").Result()
	if err != nil {
		panic(err)
	}
	fmt.Printf("成功删除了 %v 个\n", n)
}
```

### Exists():检测缓存项是否存在

`Exists()`方法用于检测某个key是否存在

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	n, err := rdb.Exists(ctx, "key1").Result()
	if err != nil {
		panic(err)
	}
	if n > 0 {
		fmt.Println("存在")
	} else {
		fmt.Println("不存在")
	}
}
```

> 注：Exists()方法可以传入多个key,返回的第一个结果表示存在的key的数量,不过工作中我们一般不同时判断多个key是否存在，一般就判断一个key,所以判断是否大于0即可，如果判断判断传入的多个key是否都存在，则返回的结果的值要和传入的key的数量相等

### Expire(),ExpireAt():设置有效期

需要在设置好了缓存项后，在设置有效期

`Expire()`方法是设置某个时间段(time.Duration)后过期，`ExpireAt()`方法是在某个时间点(time.Time)过期失效

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
	"time"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	res, err := rdb.Expire(ctx, "key", time.Minute * 2).Result()
	if err != nil {
		panic(err)
	}
	if res {
		fmt.Println("设置成功")
	} else {
		fmt.Println("设置失败")
	}
	
	res, err = rdb.ExpireAt(ctx, "key2", time.Now()).Result()
	if err != nil {
		panic(err)
	}
	if res {
		fmt.Println("设置成功")
	} else {
		fmt.Println("设置失败")
	}
}
```

### TTL(),PTTL():获取有效期

`TTL()`方法可以获取某个键的剩余有效期

示例：

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
	"time"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	//设置一分钟的有效期
	rdb.Expire(ctx, "key", time.Minute)

	//获取剩余有效期,单位:秒(s)
	ttl, err := rdb.TTL(ctx, "key").Result()
	if err != nil {
		panic(err)
	}
	fmt.Println(ttl)

	//获取剩余有效期,单位:毫秒(ms)
	pttl, err := rdb.PTTL(ctx, "key").Result()
	if err != nil {
		panic(err)
	}
	fmt.Println(pttl)
}
```

### DBSize():查看当前数据库key的数量

示例：

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	num, err := rdb.DBSize(ctx).Result()
	if err != nil {
		panic(err)
	}
	fmt.Printf("数据库有 %v 个缓存项\n", num)
}
```

### FlushDB():清空当前数据

示例：

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

    //清空当前数据库，因为连接的是索引为0的数据库，所以清空的就是0号数据库
	res, err := rdb.FlushDB(ctx).Result()
	if err != nil {
		panic(err)
	}
	fmt.Println(res)//OK
}
```

### FlushAll():清空所有数据库

示例：

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	res, err := rdb.FlushAll(ctx).Result()
	if err != nil {
		panic(err)
	}
	fmt.Println(res)//OK
}
```

## 字符串(string)类型

### Set():设置

仅仅支持字符串(包含数字)操作，不支持内置数据编码功能。如果需要存储Go的非字符串类型，需要提前手动序列化，获取时再反序列化。

示例：

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
	"time"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	_, err := rdb.Ping(ctx).Result()
	//fmt.Println(pong, err)
	if err != nil {
		fmt.Printf("连接redis出错，错误信息：%v", err)
		return
	}
	//Set方法的最后一个参数表示过期时间，0表示永不过期
	err = rdb.Set(ctx, "key1", "value1", 0).Err()
	if err != nil {
		panic(err)
	}

	//key2将会在两分钟后过期失效
	err = rdb.Set(ctx, "key2", "value2", time.Minute * 2).Err()
	if err != nil {
		panic(err)
	}
}
```

### SetEX():设置并指定过期时间

设置键的同时，设置过期时间

示例：

```go
package main

import (
	"context"
	"github.com/go-redis/redis/v8"
	"time"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	err := rdb.SetEX(ctx, "key", "value", time.Hour * 2).Err()
	if err != nil {
		panic(err)
	}
}
```

### SetNX():设置并指定过期时间

> 注：SetNX()与SetEX()的区别是，SexNX()仅当key不存在的时候才设置，如果key已经存在则不做任何操作，而SetEX()方法不管该key是否已经存在缓存中直接覆盖

介绍了`SetNX()`与`SetEX()`的区别后，还有一点需要注意的时候，如果我们想知道我们调用SetNX()是否设置成功了，可以接着调用Result()方法，返回的第一个值表示是否设置成功了，如果返回false,说明缓存Key已经存在，此次操作虽然没有错误，但是是没有起任何效果的。如果返回true，表示在此之前key是不存在缓存中的，操作是成功的

示例：

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
	"time"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})
	
	res, err := rdb.SetNX(ctx, "key", "value", time.Minute).Result()
	if err != nil {
		panic(err)
	}
	if res {
		fmt.Println("设置成功")
	} else {
		fmt.Printf("key已经存在缓存中，设置失败")
	}
}
```

### Get():获取

如果要获取的key在缓存中并不存在，`Get()`方法将会返回`redis.Nil`

示例：

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	err := rdb.Set(ctx, "key", "value", 0).Err()
	if err != nil {
		panic(err)
	}

	val, err := rdb.Get(ctx, "key").Result()
	if err != nil {
		panic(err)
	}
	fmt.Printf("key: %v\n", val)
	
	val2, err := rdb.Get(ctx, "key-not-exist").Result()
	if err == redis.Nil {
		fmt.Println("key不存在")
	} else if err != nil {
		panic(err)
	} else {
		fmt.Printf("值为: %v\n", val2)
	}
}
```

### GetRange():字符串截取

`GetRange()`方法可以用来截取字符串的部分内容,第二个参数是下标索引的开始位置，第三个参数是下标索引的结束位置(不是要截取的长度)

示例：

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	err := rdb.Set(ctx, "key", "Hello World!", 0).Err()
	if err != nil {
		panic(err)
	}

	val, err := rdb.GetRange(ctx, "key", 1, 4).Result()
	if err != nil {
		panic(err)
	}
	fmt.Printf("key: %v\n", val) //截取到的内容为: ello
}
```

> 注：即使key不存在，调用GetRange()也不会报错，只是返回的截取结果是空"",可以使用fmt.Printf("%q\n", val)来打印测试

### Incr():增加+1

`Incr()`、`IncrBy()`都是操作数字，对数字进行增加的操作，incr是执行`原子`加1操作，incrBy是增加指定的数

所谓原子操作是指不会被线程调度机制打断的操作：这种操作一旦开始，就一直运行到结束，中间不会有任何context witch(切换到另一个线程).

(1)在单线程中，能够在单条指令中完成的操作都可以认为是“原子操作”，因为中断只能发生于指令之间。

(2)在多线程中，不能被其它进程(线程)打算的操作叫原子操作。

Redis单命令的原子性主要得益于Redis的单线程

示例：

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	val, err := rdb.Incr(ctx, "number").Result()
	if err != nil {
		panic(err)
	}
	fmt.Printf("key当前的值为: %v\n", val)
}
```

### IncrBy():按指定步长增加

示例：

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	val, err := rdb.IncrBy(ctx, "number", 12).Result()
	if err != nil {
		panic(err)
	}
	fmt.Printf("key当前的值为: %v\n", val)
}
```

### Decr():减少-1

`Decr()`和`DecrBy()`方法是对数字进行减的操作，和Incr正好相反

示例：

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	val, err := rdb.Decr(ctx, "number").Result()
	if err != nil {
		panic(err)
	}
	fmt.Printf("key当前的值为: %v\n", val)
}
```

### DecrBy():按指定步长减少

示例：

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	val, err := rdb.DecrBy(ctx, "number", 12).Result()
	if err != nil {
		panic(err)
	}
	fmt.Printf("key当前的值为: %v\n", val)
}
```

### Append():追加

`Append()`表示往字符串后面追加元素，返回值是字符串的总长度

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	err := rdb.Set(ctx, "key", "hello", 0).Err()
	if err != nil {
		panic(err)
	}
	length, err := rdb.Append(ctx, "key", " world!").Result()
	if err != nil {
		panic(err)
	}
	fmt.Printf("当前缓存key的长度为: %v\n", length) //12
	val, err := rdb.Get(ctx, "key").Result()
	if err != nil {
		panic(err)
	}
	fmt.Printf("当前缓存key的值为: %v\n", val) //hello world!
}
```

### StrLen():获取长度

`StrLen()`方法可以获取字符串的长度

示例：

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	err := rdb.Set(ctx, "key", "hello world!", 0).Err()
	if err != nil {
		panic(err)
	}
	length, err := rdb.StrLen(ctx, "key").Result()
	if err != nil {
		panic(err)
	}
	fmt.Printf("当前缓存key的长度为: %v\n", length) //12
}
```

如上所述都是常用的字符串操作，此外，字符串(string)类型还有`MGet()`、`Mset()`、`MSetNX()`等同时操作多个key的方法，详见：https://pkg.go.dev/github.com/go-redis/redis/v8

## 列表(list)类型

### LPush():将元素压入链表

可以使用`LPush()`方法将数据从左侧压入链表

示例：

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	//返回值是当前列表元素的数量
	n, err := rdb.LPush(ctx, "list", 1, 2, 3).Result()
	if err != nil {
		panic(err)
	}
	fmt.Println(n)
}
```

也可以从右侧压如链表，对应的方法是`RPush()`

### LInsert():在某个位置插入新元素

位置的判断，是根据相对的参考元素判断

示例：

```go
package main

import (
	"context"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	//在名为key的缓存项值为100的元素前面插入一个值，值为123
	err := rdb.LInsert(ctx, "key", "before", "100", 123).Err()
	if err != nil {
		panic(err)
	}
}
```

> 注：即使key列表里有多个值为100的元素，也只会在第一个值为100的元素前面插入123，并不会在所有值为100的前面插入123,客户端还提供了从前面插入和从后面插入的LInsertBefore()和LInsertAfer()方法

### LSet():设置某个元素的值

示例：

```go
package main

import (
	"context"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	//下标是从0开始的
	err := rdb.LSet(ctx, "list", 1, 100).Err()
	if err != nil {
		panic(err)
	}
}
```

### LLen():获取链表元素个数

示例：

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	length, err := rdb.LLen(ctx, "list").Result()
	if err != nil {
		panic(err)
	}
	fmt.Printf("当前链表的长度为: %v\n", length)
}
```

### LIndex():获取链表下标对应的元素

示例：

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	val, err := rdb.LIndex(ctx, "list", 0).Result()
	if err != nil {
		panic(err)
	}
	fmt.Printf("下标为0的值为: %v\n", val)
}
```

### LRange():获取某个选定范围的元素集

示例：

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	vals, err := rdb.LRange(ctx, "list", 0, 2).Result()
	if err != nil {
		panic(err)
	}
	fmt.Printf("从下标0到下标2的值: %v\n", vals)
}
```

### 从链表左侧弹出数据

示例：

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	val, err := rdb.LPop(ctx, "list").Result()
	if err != nil {
		panic(err)
	}
	fmt.Printf("移除的元素为: %v\n", val)
}
```

与之相对的，从右侧弹出数据的方法为`RPop()`

### LRem():根据值移除元素

示例：

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	n, err := rdb.LRem(ctx, "list", 2, "100").Result()
	if err != nil {
		panic(err)
	}
	fmt.Printf("移除了: %v 个\n", n)
}
```

## 集合(set)类型

Redis set对外提供的功能与list类似是一个列表的功能，特殊之处在于set是可以自动排重的，当你需要存储一个列表数据，又不希望出现重复数据，set是一个很好的选择，并且set提供了判断某个成员是否在一个set集合内的接口，这是也是list所不能提供了。

Redis的Set是string类型的无序集合。它底层其实是一个value为null的hash表，所以添加、删除、查找的复杂度都是O(1)。

集合数据的特征：

1. 元素不能重复，保持唯一性
2. 元素无序，不能使用索引(下标)操作

### SAdd():添加元素

示例：

```go
package main

import (
	"context"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	rdb.SAdd(ctx, "team", "kobe", "jordan")
	rdb.SAdd(ctx, "team", "curry")
	rdb.SAdd(ctx, "team", "kobe") //由于kobe已经被添加到team集合中，所以重复添加时无效的
}
```

![img](https://img2020.cnblogs.com/blog/720430/202012/720430-20201227183018843-1310645998.png)

### SPop():随机获取一个元素

无序性，是随机的

`SPop()`方法是从集合中随机取出元素的，如果想一次获取多个元素，可以使用`SPopN()`方法

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	val, err := rdb.SPop(ctx, "team").Result()
	if err != nil {
		panic(err)
	}
	fmt.Println(val)
}
```

### SRem():删除集合里指定的值

示例：

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	n, err := rdb.SRem(ctx, "team", "kobe", "v2").Result()
	if err != nil {
		panic(err)
	}
	fmt.Println(n)
}
```

### SSMembers():获取所有成员

示例：

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	vals, err := rdb.SMembers(ctx, "team").Result()
	if err != nil {
		panic(err)
	}
	fmt.Println(vals)
}
```

### SIsMember():判断元素是否在集合中

示例：

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	exists, err := rdb.SIsMember(ctx, "team", "jordan").Result()
	if err != nil {
		panic(err)
	}
	if exists {
		fmt.Println("存在集合中")
	} else {
		fmt.Println("不存在集合中")
	}
}
```

### SCard():获取集合元素个数

获取集合中元素个数

示例：

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	total, err := rdb.SCard(ctx, "team").Result()
	if err != nil {
		panic(err)
	}
	fmt.Printf("集合总共有 %v 个元素\n", total)
}
```

### SUnion():并集,SDiff():差集,SInter():交集

示例：

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	rdb.SAdd(ctx, "setA", "a", "b", "c", "d")
	rdb.SAdd(ctx, "setB", "a", "d", "e", "f")

	//并集
	union, err := rdb.SUnion(ctx, "setA", "setB").Result()
	if err != nil {
		panic(err)
	}
	fmt.Println(union)

	//差集
	diff, err := rdb.SDiff(ctx, "setA", "setB").Result()
	if err != nil {
		panic(err)
	}
	fmt.Println(diff)

	//交集
	inter, err := rdb.SInter(ctx, "setA", "setB").Result()
	if err != nil {
		panic(err)
	}
	fmt.Println(inter)
}
```

![img](https://img2020.cnblogs.com/blog/720430/202012/720430-20201227183038266-1015436986.png)

## 有序集合(zset)类型

Redis 有序集合和集合一样也是string类型元素的集合,且不允许重复的成员。

不同的是每个元素都会关联一个double类型的分数。redis正是通过分数来为集合中的成员进行从小到大的排序。

有序集合的成员是唯一的,但`分数(score)`却可以重复。

集合是通过哈希表实现的，所以添加，删除，查找的复杂度都是O(1)。 集合中最大的成员数为 232 - 1 (4294967295, 每个集合可存储40多亿个成员)。

### ZAdd():添加元素

添加6个元素1~6,分值都是0

```go
package main

import (
	"context"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	rdb.ZAdd(ctx, "zSet", &redis.Z{
		Score: 0,
		Member: 1,
	})
	rdb.ZAdd(ctx, "zSet", &redis.Z{
		Score: 0,
		Member: 2,
	})
	rdb.ZAdd(ctx, "zSet", &redis.Z{
		Score: 0,
		Member: 3,
	})
	rdb.ZAdd(ctx, "zSet", &redis.Z{
		Score: 0,
		Member: 4,
	})
	rdb.ZAdd(ctx, "zSet", &redis.Z{
		Score: 0,
		Member: 5,
	})
	rdb.ZAdd(ctx, "zSet", &redis.Z{
		Score: 0,
		Member: 6,
	})
}
```

![img](https://img2020.cnblogs.com/blog/720430/202012/720430-20201227183048739-78261498.png)

### ZIncrBy():增加元素分值

分值可以为负数，表示递减

```go
package main

import (
	"context"
	"github.com/go-redis/redis/v8"
	"math/rand"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	rdb.ZIncrBy(ctx, "zSet", float64(rand.Intn(100)), "1")
	rdb.ZIncrBy(ctx, "zSet", float64(rand.Intn(100)), "2")
	rdb.ZIncrBy(ctx, "zSet", float64(rand.Intn(100)), "3")
	rdb.ZIncrBy(ctx, "zSet", float64(rand.Intn(100)), "4")
	rdb.ZIncrBy(ctx, "zSet", float64(rand.Intn(100)), "5")
	rdb.ZIncrBy(ctx, "zSet", float64(rand.Intn(100)), "6")
}
```

![img](https://img2020.cnblogs.com/blog/720430/202012/720430-20201227183058501-610881172.png)

### ZRange()、ZRevRange():获取根据score排序后的数据段

根据分值排序后的，升序和降序的列表获取

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	//获取排行榜
	//获取分值(点击率)前三的文章ID列表
	res, err := rdb.ZRevRange(ctx, "zSet", 0, 2).Result()
	if err != nil {
		panic(err)
	}
	fmt.Println(res)
}
```

![img](https://img2020.cnblogs.com/blog/720430/202012/720430-20201227183107532-961643422.png)

### ZRangeByScore()、ZRevRangeByScore():获取score过滤后排序的数据段

根据分值过滤之后的列表

需要提供分值区间

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	res, err := rdb.ZRangeByScore(ctx, "zSet", &redis.ZRangeBy{
		Min:    "40",
		Max:    "85",
	}).Result()

	if err != nil {
		panic(err)
	}
	fmt.Println(res)
}
```

### ZCard():获取元素个数

示例：

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	count, err := rdb.ZCard(ctx, "zSet").Result()
	if err != nil {
		panic(err)
	}
	fmt.Println(count)
}
```

### ZCount():获取区间内元素个数

获取分值在[40, 85]的元素的数量

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	n, err := rdb.ZCount(ctx, "zSet", "40", "85").Result()
	if err != nil {
		panic(err)
	}
	fmt.Println(n)
}
```

### ZScore():获取元素的score

获取元素分值

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	score, err := rdb.ZScore(ctx, "zSet", "5").Result()
	if err != nil {
		panic(err)
	}
	fmt.Println(score)
}
```

### ZRank()、ZRevRank():获取某个元素在集合中的排名

`ZRank()`方法是返回元素在集合中的升序排名情况，从0开始。`ZRevRank()`正好相反

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	res, err := rdb.ZRevRank(ctx, "zSet", "2").Result()
	if err != nil {
		panic(err)
	}
	fmt.Println(res)
}
```

### ZRem():删除元素

`ZRem()`方法支持通过元素的值来删除元素

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

    //通过元素值来删除元素
	res, err := rdb.ZRem(ctx, "zSet", "2").Result()
	if err != nil {
		panic(err)
	}
	fmt.Println(res)
}
```

### ZRemRangeByRank():根据排名来删除

示例：

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	//按照升序排序删除第一个和第二个元素
	res, err := rdb.ZRemRangeByRank(ctx, "zSet",  0, 1).Result()
	if err != nil {
		panic(err)
	}
	fmt.Println(res)
}
```

### ZRemRangeByScore():根据分值区间来删除

示例：

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	//删除score在[40, 70]之间的元素
	res, err := rdb.ZRemRangeByScore(ctx, "zSet", "40", "70").Result()
	if err != nil {
		panic(err)
	}
	fmt.Println(res)
}
```

## 哈希(hash)类型

Redis hash 是一个 string 类型的 field（字段） 和 value（值） 的映射表，hash 特别适合用于存储对象。

Redis 中每个 hash 可以存储 232 - 1 键值对（40多亿）。

当前服务器一般都是将用户登录信息保存到Redis中，这里存储用户登录信息就比较适合用hash表。hash表比string更合适，如果我们选择使用string类型来存储用户的信息的时候，我们每次存储的时候就得先序列化(json_encode()、serialize())成字符串才能存储redis,

从redis拿到用户信息后又得反序列化(UnMarshal()、Marshal())成数组或对象，这样开销比较大。如果使用hash的话我们通过key(用户ID)+field(属性标签)就可以操作对应属性数据了，既不需要重复存储数据，也不会带来序列化和并发修改控制的问题。

### HSet():设置

`HSet()`方法支持如下格式

```go
package main

import (
	"context"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	rdb.HSet(ctx, "user", "key1", "value1", "key2", "value2")
	rdb.HSet(ctx, "user", []string{"key3", "value3", "key4", "value4"})
	rdb.HSet(ctx, "user", map[string]interface{}{"key5": "value5", "key6": "value6"})
}
```

![img](https://img2020.cnblogs.com/blog/720430/202012/720430-20201227183214584-776904066.png)

### HMset():批量设置

示例：

```go
package main

import (
	"context"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	rdb.Del(ctx, "user")
	rdb.HMSet(ctx, "user", map[string]interface{}{"name":"kevin", "age": 27, "address":"北京"})
}
```

![img](https://img2020.cnblogs.com/blog/720430/202012/720430-20201227183222667-1708717111.png)

### HGet():获取某个元素

示例：

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	address, err := rdb.HGet(ctx, "user", "address").Result()
	if err != nil {
		panic(err)
	}
	fmt.Println(address)
}
```

### HGetAll():获取全部元素

示例：

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	user, err := rdb.HGetAll(ctx, "user").Result()
	if err != nil {
		panic(err)
	}
	fmt.Println(user)
}
```

### HDel():删除某个元素

`HDel()`支持一次删除多个元素

示例：

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	res, err := rdb.HDel(ctx, "user", "name", "age").Result()
	if err != nil {
		panic(err)
	}
	fmt.Println(res)
}
```

### HExists():判断元素是否存在

示例：

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	res, err := rdb.HExists(ctx, "user", "address").Result()
	if err != nil {
		panic(err)
	}
	fmt.Println(res)
}
```

### HLen():获取长度

示例：

```go
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "172.16.147.128:6379",
		Password: "",
		DB:       0,
	})

	res, err := rdb.HLen(ctx, "user").Result()
	if err != nil {
		panic(err)
	}
	fmt.Println(res)
}
```