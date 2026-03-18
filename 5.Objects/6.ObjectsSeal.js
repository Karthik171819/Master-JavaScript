//seal is used to restrict the changes of an object property or field but we can update the values for existing field
const person ={ name: "lok", age: 56};
person.name = "anand"; //allow to change
console.log(Object.seal(person)); 
person.email = "dumy12@gmail.com"; //not added coz its sealed
console.log(person);
