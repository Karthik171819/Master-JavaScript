try{
const a = ad(5, 10);
console.log(a)
} catch(e){
console.log({name: e.name, message: e.message})
}
console.log("This will run even if there is an error in the above code")

//without error object
function add(a, b){
    return a + b;
}
try{
const a = add(5, 10);
console.log(a)
} catch(e){
console.log({name: e.name, message: e.message})
}
console.log("This will run even if there is an error in the above code")