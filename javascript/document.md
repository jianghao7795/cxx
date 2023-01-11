```javascript
（1）、forEach：会遍历数组, 没有返回值, 不允许在循环体内写return, 会改变原来数组的内容.forEach()也可以循环对象
（2）、map：遍历数组, 会返回一个新数组, 不会改变原来数组里的内容
（3）、filter：会过滤掉数组中不满足条件的元素, 把满足条件的元素放到一个新数组中, 不改变原数组
（4）、reduce：
let array = [1, 2, 3, 4];
let temp = array.reduce((x, y) => {
	console.log("x,"+x);
	console.log("y,"+y);
	console.log("x+y,",Number(x)+Number(y));
	return x + y;
});
console.log(temp);　　// 10
console.log(array);　　// [1, 2, 3, 4]
复制代码
（5）、every：遍历数组, 每一项都是true, 则返回true, 只要有一个是false, 就返回false
（6）、some：遍历数组的每一项, 有一个返回true, 就停止循环
```

