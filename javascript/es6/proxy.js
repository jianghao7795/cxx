// Proxy

// get(target, propKey, receiver)：拦截对象属性的读取，比如proxy.foo和proxy['foo']。
// get方法用于拦截某个属性的读取操作，可以接受三个参数，依次为目标对象、属性名和 proxy 实例本身（严格地说，是操作行为所针对的对象），其中最后一个参数可选。
// 
// set(target, propKey, value, receiver)：拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。
// set方法用来拦截某个属性的赋值操作，可以接受四个参数，依次为目标对象、属性名、属性值和 Proxy 实例本身，其中最后一个参数可选。
// 
// has(target, propKey)：拦截propKey in proxy的操作，返回一个布尔值。
// deleteProperty(target, propKey)：拦截delete proxy[propKey]的操作，返回一个布尔值。
// ownKeys(target)：拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
// getOwnPropertyDescriptor(target, propKey)：拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。
// defineProperty(target, propKey, propDesc)：拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
// preventExtensions(target)：拦截Object.preventExtensions(proxy)，返回一个布尔值。
// getPrototypeOf(target)：拦截Object.getPrototypeOf(proxy)，返回一个对象。
// isExtensible(target)：拦截Object.isExtensible(proxy)，返回一个布尔值。
// setPrototypeOf(target, proto)：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
// apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
// construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。
// 
// 
// defineProperties
// 定义多个属性
// 
// defineProperty
// Object.defineProperty 需要三个参数（object , propName , descriptor）

// 1 object 对象 => 给谁加
// 2 propName 属性名 => 要加的属性的名字 【类型：String】
// 3 descriptor 属性描述 => 加的这个属性有什么样的特性【类型：Object】
// 
// descriptor:
// value: 设置属性的值
// writable: 值是否可以重写。true | false
// enumerable: 目标属性是否可以被枚举。true | false
// configurable: 目标属性是否可以被删除或是否可以再次修改特性 true | false
// set: 目标属性设置值的方法
// get：目标属性获取值的方法 
// 
// Reflect 是一个内置的对象，它提供拦截 JavaScript 操作的方法。这些方法与proxy handlers的方法相同。Reflect不是一个函数对象，因此它是不可构造的
var obj = new Proxy({}, {
	get: function(target, propKey, receiver) {
		console.log(target, propKey, receiver);

		return Reflect.get(target, propKey, receiver)
	},
	set: function(target, propKey, value, receiver) {
		console.log(target, propKey, value, receiver);

		return Reflect.set(target, propKey, value, receiver);
	}
})

obj.count = 1;
++obj.count;