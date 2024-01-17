var obj = new Proxy({}, {
	get: function (target, propKey, receiver) {
		// body...
		console.log(`getting ${propKey}`);
		return Reflect.get(target, propKey, receiver)
	},
	set: function(target, propKey, value, receiver) {
		console.log(`setting ${propKey}!`);
	    return Reflect.set(target, propKey, value, receiver);
	}
})

obj.count = 1
++obj.count

(function() {
    var root = this;

    function watch(target, func) {
    
        var proxy = new Proxy(target, {
            get: function(target, prop) {
                return target[prop];
            },
            set: function(target, prop, value) {
                target[prop] = value;
                func(prop, value);
            }
        });
    
        return proxy;
    }
    
    this.watch = watch;
})()

var obj = {
    value: 1
}

var newObj = watch(obj, function(key, newvalue) {
    if (key == 'value') document.getElementById('container').innerHTML = newvalue;
})

document.getElementById('button').addEventListener("click", function() {
    newObj.value += 1
});



```javascript
const handler = {
    get(target, prop, receiver) {
        console.log(`Getting property "${prop}"`);
    	return Reflect.get(target, prop, receiver);
    },
    set(target, prop, value, receiver) {
        console.log(`Setting property "${prop}" to ${value}`);
    	return Reflect.set(target, prop, value, receiver);
    }
}

const obj = {
    name: "ab"
};

const proxyObj = new Proxy(obj, handler);
console.log(proxyObj.name);
proxyObj.age = 25;
console.log(proxyObj);

```