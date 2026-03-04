//map() is an array method used to transform each element of an array and return a new array.
// It does not change the original array.
//syntax
// array.map((element, index, array) => {
//     return newValue;
// });
const products = ["beans", "brinjal", "tomato", "potato"];
const mappedProducts = products.map((el) => { return el+' $'});
console.log(mappedProducts);

//example
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => {return num*2});
console.log(doubled);

//discount prices
const price = [2, 3, 4, 1, 5, 90];
const dprice = 1;
const result = price.map((amt) => amt - dprice );
console.log(result);