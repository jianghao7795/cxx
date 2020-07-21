// 闭包中的this
// 匿名函数的执行环境具有全局性，因此this经常指向window
var name = 'The window'
var obj = {
	name: 'my obj',
	get: function() {
		return function(){
			return this.name
		}
	}
}
alert(obj.get()()) // The window

var name = "window"
var obj = {
	name: 'obj',
	get: function() {
		var that = this
		return function() {
			return that.name
		}
	}
}

console.log(obj.get()()) // obj


var name = 'window'
var obj = {
	name: 'obj',
	get: function() {
		return this.name
	}
}

var getname1 = obj.get
console.log(obj.get()) // obj
console.log(getname1()) // window