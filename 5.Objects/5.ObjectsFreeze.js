//In JavaScript, Object.freeze() is used to make an object completely immutable (cannot be changed).
const person = {name: "virat", age: 35};
console.log(Object.freeze(person));
person.age = 36;
console.log(person); //here 35 only because i freezed the object particular field