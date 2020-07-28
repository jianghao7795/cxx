var foo = {
	value: 1
}
function bar() {
	console.log(this.value)
}

bar.call(foo)

// call的 实现
// 1、

Function.prototype.call2 = function(context) {
	context.fn = this
	// console.log(this)
	context.fn()
	delete context.fn
}

bar.call2(foo)

Function.prototype.call2_1 = function(context) {
	context.fn = this
	var args = []
	for(var i = 1, len = arguments.length; i < len; i++) {
		args.push('arguments[' + i + ']')
	}

	eval('context.fn(' + args + ')') //用 eval 方法拼成一个函数

	delete context.fn
}

function bar1(name, age) {
	console.log(name)
	console.log(age)
	console.log(this.value)
}

bar1.call2_1(foo, 'kevin', 18)


Function.prototype.call2_2 = function(context) {
	var context = context || window
	context.fn = this
	var args = []
	for (var i = 1, len = arguments.length; i < len; i++) {
		args.push('arguments[' + i + ']')
	}

	var result = eval('context.fn(' + args + ')')

	delete context.fn
	return result
}

var value = 2

var obj = {
	value: 1
}

function bar3(name, age) {
	console.log(this.value)
	return {
		value: this.value,
		name: name,
		age: age
	}
}

bar3.call2_2(null)

console.log(bar3.call2_2(obj, 'kevin', 15))

// apply 的实现
//
//
//
//
Function.prototype.apply1 = function (context, arr) {
    var context = Object(context) || window;
    context.fn = this;

    var result;
    if (!arr) {
        result = context.fn();
    }
    else {
        var args = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            args.push('arr[' + i + ']');
        }
        result = eval('context.fn(' + args + ')')
    }

    delete context.fn
    return result;
}

// bind
Function.prototype.bind2 = function (context) {

    if (typeof this !== "function") {
      throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fNOP = function () {};

    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        // 当作为构造函数时，this 指向实例，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
        // 以上面的是 demo 为例，如果改成 `this instanceof fBound ? null : context`，实例只是一个空对象，将 null 改成 this ，实例会具有 habit 属性
        // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
    }
 // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}