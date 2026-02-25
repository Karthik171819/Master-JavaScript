var a = 42;
var b = "42";
console.log(a == b); //true, because it converts the string to a number before comparing
console.log(a === b); //false, because it checks both value and type, and they are different or Strict Operator