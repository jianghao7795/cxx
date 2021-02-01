function Person() {

}
console.log(Person === Person.prototype.constructor); // true
var person = new Person();

console.log(person.__proto__ == Person.prototype) // true
console.log(Person.prototype.constructor == Person) // true
// 顺便学习一个ES5的方法,可以获得对象的原型
console.log(Object.getPrototypeOf(person) === Person.prototype) // true

console.log(Object.prototype.__proto__ === null) // true
console.log(person.constructor === Person); // true
person.constructor === Person.prototype.constructor