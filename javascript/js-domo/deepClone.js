console.log('deepClone')

const obj = {
	age: 10,
	name: 'nide',
	address: {
		city: 'ssss',
	},
	arr: ['a', 'b', 'c']
}

const obj1 = deepClone(obj)

obj1.address.city = 'shanghai'
console.log(obj.address)
console.log(obj1.address)
/**
 * @param  {Object}
 * @return null
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