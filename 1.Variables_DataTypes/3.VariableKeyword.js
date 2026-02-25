//var, let, const
//var - function scope
//let, const - block scope

//var example
function varExample(){
    if(true){
        var name = "Karthik, from var example";
        console.log(name); // it will print the name variable from var example
    }
    console.log(name); // it will print the name variable from var example
}
varExample();

//let example
function letExample(){
    if(true){
        let name = "Karthik, from let example";
        console.log(name); // it will print the name variable from let example
    }
    // console.log(name); // it will throw an error because name is not accessible outside the block scope
}
letExample();