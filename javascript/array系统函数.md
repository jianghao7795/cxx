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

script标签的defer和async

defer

> 这个属性的用途是表明脚本在执行时不会影响页面的构造。也就是说，脚本会被延迟到整个页面都解析完毕后再运行。因此，在`<script>`元素中设置`defer`属性，相当于告诉浏览器立即下载，但延迟执行。
>
> HTML5规范要求脚本按照它们出现的先后顺序执行，因此第一个延迟脚本会先于第二个延迟脚本执行，而这两个脚本会先于`DOMContentLoaded`事件执行。**在现实当中**，延迟脚本并不一定会按照顺序执行，也不一定会在`DOMContentLoad`时间触发前执行，因此最好只包含一个延迟脚本。

async

> 这个属性与`defer`类似，都用于改变处理脚本的行为。同样与`defer`类似，`async`只适用于外部脚本文件，并告诉浏览器立即下载文件。但与`defer`不同的是，标记为`async`的脚本并不保证按照它们的先后顺序执行。
>
> 第二个脚本文件可能会在第一个脚本文件之前执行。因此确保两者之间互不依赖非常重要。指定`async`属性的目的是不让页面等待两个脚本下载和执行，从而异步加载页面其他内容。