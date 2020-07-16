//bind
// call apply bind
// call 性能更好
//

//
Function.prototype.myBind = function() {
	var _this = this
	var context = [].shift.call(arguments)
	var args = [].slice.call(arguments)
	// console.log(_this, context, args);
	return function() {
		return _this.apply(context, [].concat.call(args, [].slice.call(arguments)))
	}
}

Function.prototype.customCall = function () {
  if (typeof this !== 'function') {
    throw new TypeError('error!')
  }
  let context = arguments[0] || window
  context.fn = this
  let args = [...arguments].slice(1)
  let result = context.fn(...args)
  delete context.fn
  return result
}

Function.prototype.customBind = function () {
  if (typeof this !== 'function') {
    throw new TypeError('error!')
  }
  const that = this
  let context = arguments[0] || window
  const args = [...arguments].slice(1)
  return function() {
    return that.apply(context, args.concat([...arguments]))
  }
}


Function.prototype.customApply = function () {
  if (typeof this !== 'function') {
    throw new TypeError('error!')
  }
  let context = arguments[0] || window
  context.fn = this
  let result = !!arguments[1] ? context.fn(...arguments[1]) : context.fn()
  delete context.fn
  return result
}


// es6的箭头函数
window.name = 'win';
const obj1 = {
    name: 'joy',
    getName: () => {
        console.log(this); //window 调用前this是什么函数里面的this就是什么
        console.log(this.name); //win
    }
};
obj1.getName();

var name = 'The window'
var obj = {
	name: 'my obj',
	get: function() {
		return function(){
			return this.name
		}
	}
}
alert(obj.get()())
