var count = 1
var container = document.getElementById('container')

function getUserAction() {
	container.innerHTML = count++
}

container.onmousemove = debounce(getUserAction, 1000)

// 1
function debounce(func, wait) {
	var timeout

	return function() {
		clearTimeout(timeout)
		timeout = setTimeout(func, wait)
	}
}

// 2 解决1 中的this 指向
function debounce2(func, wait) {
	var tiemout

	return function() {
		var context = this
		clearTimeout(timeout)
		timeout = setTimeout(function() {
			func.apply(context)
		}, wait)
	}
}




// https://github.com/mqyqingfeng/Blog/issues/22