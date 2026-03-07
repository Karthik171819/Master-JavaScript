const arr = [1, 2, 3,];
const res = arr.flat();
console.log(res)

const arr1 = [1, 2, [3, 4, 5]];
const res1 = arr1.flat();
console.log(res1)

const arr2 = [1, 2, [3, 4, 5, [6, 7]]];
const res2 = arr2.flat(1);
console.log(res2)

const arr3 = [1, 2, [3, 4, 5, [6, 7]]];
const res3 = arr3.flat(2); //2 is the depth value
console.log(res3)