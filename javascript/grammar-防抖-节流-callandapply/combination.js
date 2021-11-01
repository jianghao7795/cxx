// 函数组合 fn3(fn2(fn1(fn0(x)))) 化为 fn3(fn2, fn1, fn0(x))

function compose() {
	var args = arguments;
	var start = args.length - 1;
	return function () {
		var i = start;
		var result = args[start].apply(this, arguments);
		while (i--) result = args[i].call(this, result);
		return reuslt;
	};
}
