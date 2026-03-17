// In JavaScript, an object is a data type used to store key–value pairs. It helps group related data and functions together.
// An object is used to store multiple related values in one variable. in simple terms
//firstName and all not a variables its a property or fields because its inside an object so we should call like that only
let person ={
    firstName: "Karhtik",
    lastName: "K",
    place: "Banglore",
    role: "Associate SDU",
    isEmployee: true,
};
delete person.place;
person.role = "Analyst"; //here im accessing the property field role and asigning a new value as a "Analyst"
console.log(person.role);
console.log(person);

//checking the fileds is the present inside object using in operator
console.log("role" in person);// 
console.log("rolee" in person);// false