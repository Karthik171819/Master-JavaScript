//parameters are placeholders like a, b
//arguments are actual value like passing the value 2, 4 to the params a, b

//Default parameters
function greet(name="Guest"){
    console.log(`Welcome To The AI World ${name}`);
}
greet(); //guest
greet("Karthik") //karthik

//The Rest Parameter allows a function to accept any number of arguments and store them into one array.
function add(...params){
    return params.reduce((accu, curr) => accu+curr, 0);
}
console.log(`its a rest params ${add(1,2,3,4,5,6,7,8,)}`);