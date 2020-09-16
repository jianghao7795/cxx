package main

import (
	"fmt"
	"leetCode/leetcode"
)

func main() {
	// nums := make([]int, 5)
	nums := []int{2, 7, 11, 15}
	result := make([]int, 2)
	result = leetcode.TwoSum(nums, 9)
	fmt.Println(result)
}
