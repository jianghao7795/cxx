// 闭包指的是：

// 从理论角度：所有的函数。因为它们都在创建的时候就将上层上下文的数据保存起来了。哪怕是简单的全局变量也是如此，因为函数中访问全局变量就相当于是在访问自由变量，这个时候使用最外层的作用域。
// 从实践角度：以下函数才算是闭包：
// 即使创建它的上下文已经销毁，它仍然存在（比如，内部函数从父函数中返回）
// 在代码中引用了自由变量 // 闭包 的变量是定义时的 不是运行是的

var scope = 'global scope';
function checkscope() {
	var scope = 'local scope';
	function f() {
		return scope;
	}
	return f;
}

var foo = checkscope();
foo();
// 执行过程
//
// 进入全局代码，创建全局执行上下文，全局执行上下文压入执行上下文栈
// 全局执行上下文初始化
// 执行 checkscope 函数，创建 checkscope 函数执行上下文，checkscope 执行上下文被压入执行上下文栈
// checkscope 执行上下文初始化，创建变量对象、作用域链、this等
// checkscope 函数执行完毕，checkscope 执行上下文从执行上下文栈中弹出
// 执行 f 函数，创建 f 函数执行上下文，f 执行上下文被压入执行上下文栈
// f 执行上下文初始化，创建变量对象、作用域链、this等
// f 函数执行完毕，f 函数上下文从执行上下文栈中弹出

var data = [];

for (var i = 0; i < 3; i++) {
	data[i] = (function (i) {
		return function () {
			console.log(i);
		};
	})(i);
}

data[0](); // 0
data[1](); // 1
data[2](); // 2

// globalContext = {
//     VO: {
//         data: [...],
//         i: 3
//     }
// }
// data[0]Context = {
//     Scope: [AO, 匿名函数Context.AO globalContext.VO]
// }
// 匿名函数Context = {
//     AO: {
//         arguments: {
//             0: 0,
//             length: 1
//         },
//         i: 0
//     }
// }

var data = [];

for (var i = 0; i < 3; i++) {
	data[i] = function () {
		console.log(i);
	};
}

data[0](); // 3
data[1](); // 3
data[2](); // 3

// globalContext = {
//     VO: {
//         data: [...],
//         i: 3
//     }
// }
// data[0]Context = {
//     Scope: [AO, globalContext.VO] // 没有 匿名函数Context.AO
// }
