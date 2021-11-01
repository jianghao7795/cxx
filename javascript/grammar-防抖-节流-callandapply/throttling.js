var count = 1;
var container = document.getElementById('container');

function getUserAction(event) {
	// console.log(this)
	// console.log(e)
	container.innerHTML = count++;
}

container.onmousemove = throttle3(getUserAction, 1000);

// 节流

function throttle(func, wait) {
	// 时间节流
	var context, args;
	var previous = 0;

	return function () {
		var now = +new Date();

		context = this;

		args = arguments;
		if (now - previous > wait) {
			func.apply(context, args);
			previous = now;
		}
	};
}

function throttle2(func, wait) {
	// setTimeout 节流
	var timeout;
	var previous = 0;

	return function () {
		context = this;
		args = arguments;

		if (!timeout) {
			timeout = setTimeout(function () {
				timeout = null;
				func.apply(context, args);
			}, wait);
		}
	};
}

function throttle3(func, wait) {
	var timeout, context, args, result;
	var previous = 0;

	var later = function () {
		previous = +new Date();
		timeout = null;
		func.apply(context, args);
	};

	var throttle = function () {
		var now = +new Date();
		//下次触发 func 剩余的时间
		var remaining = wait - (now - previous);
		context = this;
		args = arguments;

		if (remaining <= 0 || remaining > wait) {
			if (timeout) {
				clearTimeout(timeout);
				timeout = null;
			}
			previous = now;
			func.apply(context, args);
		} else if (!timeout) {
			timeout = setTimeout(later, remaining);
		}
	};

	return throttle;
}
