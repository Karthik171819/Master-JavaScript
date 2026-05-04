const User = {
    name: "bob",
    place: "seoul",
    age: 30
};

// console.log(User)
const userData = JSON.stringify(User);
const processedData = JSON.parse(userData)
console.log("Stringify Result", userData);
console.log("Parse Result", processedData);