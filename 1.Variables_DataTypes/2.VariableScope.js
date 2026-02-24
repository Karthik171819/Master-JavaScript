//variable scope declaration
const name = "Karthik, from global scope";
function GlobalScope(){
    const name = "Karthik, from local scope";
    console.log(name); // it will print the name variable from global scope
}
GlobalScope();
console.log(name); // it will print the name variable from global scope