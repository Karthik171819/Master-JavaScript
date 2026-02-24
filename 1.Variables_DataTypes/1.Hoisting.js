//hoisting it is used call the undefined variable from an inside a scope 
//var a; // it is called hoisting because it is called before the declaration of the variable
function Hoisting(){
    a = 10;
    var b= 20;
}
Hoisting();
console.log(a); // it will print 10 because of hoisting
console.log(b); // it will give an error because b is not defined in the global scope