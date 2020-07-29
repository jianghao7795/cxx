var shallCopy = function(obj) {
	if (typeof obj !== 'object') return
	var newObj = obj instanceof Array ? [] : {}

	for (var key in obj) {
		if(obj.hasOwnProperty(key)) {
			newObj[key] = obj[key]
		}
	}

	return newObj
}


/**
 * [deepClone description]
 * @param  {Object} obj [description]
 * @return {Ohject}     [description]
 */
function deepClone(obj = {}) {
	if (typeof obj !== 'object' || obj === null) {
		return obj
	}

	let result
	if(obj instanceof Array) {
		result = []
	} else {
		result = {}
	}

	for (let key in obj) {
		if(obj.hasOwnProperty(key)) {
			result[key] = deepClone(obj[key])
		}
	}

	return result
}