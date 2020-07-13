//bind
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