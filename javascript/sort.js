arr = [6, 3, 7, 1, 5, 4];

function bubbleSort(arr) {
  if (Array.isArray(arr)) {
    for (let i = arr.length; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
  }

  return arr;
}
bubbleSort(arr)


function Person() {}

Person.prototype.name = 'name';
Person.prototype.sayName = function() {
	console.log(this.name);
	alert(this.name);
}

var sayName = Person.prototype.sayName;

sayName();