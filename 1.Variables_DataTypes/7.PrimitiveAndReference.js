//primitive types - string, number, boolean, null, undefined, symbol
//reference types - objects, arrays, functions

//primitive type
let a = 10;
let b = a; //b gets a copy of the value of a
b = 20; //changing b does not affect a
console.log(a); //10
console.log(b); //20

//reference type
let object1 = {name : "Babu"};
let object2 = object1; //object2 gets a reference to the same object in memory
object2.name = "Karthik"; //changing object2 also changes object1 because they reference the same object
console.log(object1.name);