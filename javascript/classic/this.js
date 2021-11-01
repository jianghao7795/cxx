function Foo() {
	getName = function () {
		alert(1);
	};
	return this;
}
Foo.getName = function () {
	alert(2);
};
Foo.prototype.getName = function () {
	alert(3);
};
var getName = function () {
	alert(4);
};
function getName() {
	alert(5);
}

//请写出以下输出结果：
Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();

// https://www.cnblogs.com/xxcanghai/p/5189353.html
// 闭包
function fun(n, o) {
	console.log(o);
	return {
		fun: function (m) {
			return fun(m, n);
		},
	};
}
var a = fun(0);
a.fun(1);
a.fun(2);
a.fun(3); //undefined,?,?,?
var b = fun(0).fun(1).fun(2).fun(3); //undefined,?,?,?
var c = fun(0).fun(1);
c.fun(2);
c.fun(3); //undefined,?,?,?
// https://www.cnblogs.com/xxcanghai/p/4991870.html
