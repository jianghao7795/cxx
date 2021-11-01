// 函数柯里化

// 1
var curry = function (fn) {
	var args = [].slice.call(arguments, 1);
	return function () {
		var newArgs = args.concat([].slice.call(arguments));
		return fn.apply(this, newArgs);
	};
};

function add(a, b) {
	return a + b;
}

var addCurry = curry(add, 1, 2);
console.log(addCurry()); // 3
//或者
var addCurry = curry(add, 1);
console.log(addCurry(2)); // 3
//或者
var addCurry = curry(add);
console.log(addCurry(1, 2)); // 3

// 2

function sub_curry(fn) {
	var args = [].slice.call(arguments, 1);

	return function () {
		return fn.apply(this, args.concat([].slice.call(arguments)));
	};
}

function curry2(fn, length) {
	length = length || fn.length;

	var slice = Array.prototype.slice;

	return function () {
		if (arguments.length < length) {
			var combined = [fn].concat(slice.call(arguments));
			return curry2(sub_curry.apply(this, combined), length - arguments.length);
		} else {
			return fn.apply(this, arguments);
		}
	};
}

var fn = curry2(function (a, b, c) {
	return [a, b, c];
});

fn('a', 'b', 'c'); // ["a", "b", "c"]
fn('a', 'b')('c'); // ["a", "b", "c"]
fn('a')('b')('c'); // ["a", "b", "c"]
fn('a')('b', 'c'); // ["a", "b", "c"]
