// 1. 原生继承
// new 多个对象 会共享 属性
function Parent() {
	this.name = 'kevin'
}

Parent.prototype.getName = function() {
	console.log(this.name)
}

function Child() {

}

Child.prototype = new Parent()

var child1 = new Child()
console.log(child1.getName())

// 2.借用构造函数(经典继承)
// 优点：
// 1.避免了引用类型的属性被所有实例共享
// 2.可以在 Child 中向 Parent 传参

function Parent1() {
	this.names = ['kevin', 'daisy']
}

function Child1() {
	Parent1.call(this)
}

var child2 = new Child1()

child2.names.push('yayu')
console.log(child2.names)

var child12 = new Child1()
console.log(child12.names)

console.log(0.1 + 0.2)