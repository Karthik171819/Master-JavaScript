//hoisting it is used call the undefined variable from an inside a scope 
function Hoisting(){
    a = 10;
    var b= 20;
}
Hoisting();
console.log(a); // it will print 10 because of hoisting
console.log(b); // it will give an error because b is not defined in the global scope