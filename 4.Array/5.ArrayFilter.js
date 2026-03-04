//filter() is an array method used to select elements from an array based on a condition.
const num = [23, 45, 3, 4, 5, 6, 7];
const numbers = num.filter((el) => el < 7);
console.log(numbers);

//filter with objects array
const users = [
  
   { name: "Ani", id: 1},
   { name: "Bob", id: 1},
   { name: "Cal",id: 2},
   { name: "Don",id: 3}
];
const filtered = users.filter((num)  => num.id == 1)
console.log(filtered)
