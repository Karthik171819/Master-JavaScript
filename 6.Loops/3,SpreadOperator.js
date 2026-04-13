//spread operator used to copy the previous array values and add new values to the array
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]

//accessing the object datas
const obj = {name: "John", age: 30};
const spObj ={...obj, loc: "USA"};
console.log(spObj); // Output: {loc: "USA", name: "John", age: 30}