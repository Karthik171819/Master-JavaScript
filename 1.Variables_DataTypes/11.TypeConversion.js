//type checking
console.log(typeof(123));
console.log(typeof("Hello"));
console.log(typeof(true));

//instance of
console.log([] instanceof Array) //Array is a class
console.log({} instanceof Object) 
console.log([] instanceof Object)//yes true coz json in array format

//Type conversion
const a ="42";
const b = 123;
console.log(Number(a));
console.log(typeof(a));
console.log(String(b));
console.log(typeof(b));
console.log(parseInt("10 px")) // it takes only the int values