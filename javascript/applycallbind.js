//bind
// call apply bind
// call 性能更好
//
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