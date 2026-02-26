var str = "Hello Ai";
var text = "learn javascript, javascript is fun";
console.log(str.length);// even its calculate the space also
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.charAt(0)); // in this you can able to get the value on index based
console.log(str.substring(0,5));// Hello
console.log(text.indexOf("javascript")); //actually its shows the 6 means begining of the index position
console.log(text.lastIndexOf("javascript"));
console.log(text.replace("javascript", "Python")); //here only one phase of word
console.log(text.replaceAll("javascript", "Python")); // here whole words were present in string or variable

//split()
const str1 = "This is a Kaliyug";
console.log(str1.split(" "));// im giving space as a seperator and it store in a array

//trim() it cut outs the unecessary spaces
const str2 = "   Hello World!  ";
console.log(str2.trim());

