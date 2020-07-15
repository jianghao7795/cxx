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