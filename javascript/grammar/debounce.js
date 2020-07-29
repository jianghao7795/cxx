var count = 1
var container = document.getElementById('container')

function getUserAction(event) {
	// console.log(this)
	// console.log(e)
	container.innerHTML = count++
}

// container.onmousemove = debounce4(getUserAction, 1000)

container.onmousemove = debounce4(getUserAction, 1000, true)

// 1
function debounce(func, wait) { // this 指向 window
	var timeout

	return function() {
		clearTimeout(timeout)
		timeout = setTimeout(func, wait)
	}
}

// 2 解决1 中的this 指向
function debounce2(func, wait) { // this 指向 func
	var timeout

	return function() {
		var context = this
		clearTimeout(timeout)
		timeout = setTimeout(function() {
			func.apply(context)
		}, wait)
	}
}

// this 指向
// event 对象
function debounce3(func, wait) {
	var timeout

	return function() {
		var context = this
		var args = arguments

		clearTimeout(timeout)
		timeout = setTimeout(function() {
			func.apply(context, args)
		}, wait)
	}
}

function debounce4(func, wait, immediate) { // 立刻执行
	var timeout

	return function() {
		var context = this
		var args = arguments
		if (timeout) {
			clearTimeout(timeout)
		}

		if (immediate) {
			var callNow = !timeout
			timeout = setTimeout(function() {
				timeout = null
			}, wait)
			if (callNow) {
				func.apply(context, args)
			}
		} else {
			timeout = setTimeout(function() {
				func.apply(context, args)
			}, wait)
		}
	}
}

function debounce5(func, wait, immediate) {
	var timeout, result
	return function() {
		var context = this
		var args = arguments

		if(timeout) clearTimeout(timeout)
		if (immediate) {
			var callNow = !timeout
			timeout = setTimeout(function() {
				timeout = null
			}, wait)
			if (callNow) {
				result = func.apply(context, args)
			}
		} else {
			timeout = setTimeout(function() {
				func.apply(context, args)
			}, wait)
		}

		return result
	}
}



// https://github.com/mqyqingfeng/Blog/issues/22