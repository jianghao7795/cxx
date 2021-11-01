class Stack {
	constructor() {
		this.count = 0;
		this.items = {};
	}
	// 向栈中插入元素
	push(element) {
		this.items[this.count] = element;
		this.count++;
	}

	size() {
		return this.count;
	}

	isEmpty() {
		return this.count === 0;
	}

	// 从栈中弹出元素

	pop() {
		if (this.isEmpty) {
			return undefined;
		}

		this.count--;
		const result = this.items[this.count];
		delete this.items[this.count];
		return result;
	}

	peek() {
		// this.items = {};
		// this.count = 0;

		if (this.isEmpty()) {
			return undefined;
		}

		return this.items[this.count - 1];
	}

	toString() {
		if (this.isEmpty()) {
			return '';
		}

		let objString = `${this.items[0]}`;
		for (let i = 1; i < this.count; i++) {
			objString = `${objString},${this.items[i]}`;
		}

		return objString;
	}
}

function decimalToBinary(decNumber) {
	const remStack = new Stack();
	let number = decNumber;
	let rem;
	let binaryString = '';

	while (number > 0) {
		rem = Math.floor(number % 2);
		remStack.push(rem);
		number = Math.floor(number / 2);
	}
	console.log(remStack);
	while (!remStack.isEmpty()) {
		const remS = remStack.pop();
		console.log(remS);
		// binaryString += remS.toString();
	}

	return binaryString;
}

console.log(decimalToBinary(233)); // 11101001
console.log(decimalToBinary(10)); // 1010
console.log(decimalToBinary(1000)); // 1111101000
