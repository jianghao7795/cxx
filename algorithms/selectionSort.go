package main

import "fmt"

func main() {
	var arr []int = []int{5,3,6,2,10}
	fmt.Println(selectionSort(arr))
}

func selectionSort(list []int) []int {
	newArr := make([]int, 0)
	length := len(list)
	for i := 0; i < length; i++ {
		smallest := findSmallest(list)
		newArr = append(newArr, list[smallest])
		list = append(list[:smallest], list[smallest+1:]...)
		// fmt.Println(list, smallest)
	}
	// fmt.Println(list)
	return newArr
}


func findSmallest(list []int) int {
	samllest := list[0]
	samllestIndex := 0

	for i, v := range list {
		if v < samllest {
			samllest = v
			samllestIndex = i
		}
	}

	return samllestIndex
}