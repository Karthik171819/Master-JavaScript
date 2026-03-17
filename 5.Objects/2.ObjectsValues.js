//object values is a method in object
//here what values metho doing is just accessing the values just key value pair
const session ={
    id: 1,
    Date: "17-march-2026",
    device: "mobile",
    browser: 'chrome'
};
const values = Object.values(session);
console.log(values);