```go
package main

import (
	"fmt"
)

func main() {
	var myList []int

	myList = []int{1, 3, 5, 7, 9}
	
	fmt.Println(binarySearch(myList, 9))

}

func binarySearch(list []int, item int) int {
	var low int = 0
	var high int = len(list) - 1

	for low <= high {
		mid := (low + high) / 2
		guess := list[mid]
	
		if guess == item {
			return mid
		}
	
		if guess > item {
			high = mid - 1
			fmt.Println(high)
		} else {
			low = mid + 1
			fmt.Println(low)
		}
	}
	
	return 0
}
```