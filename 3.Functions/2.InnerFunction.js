// closure, A function remembers the variables from its outer (parent) scope even after the outer function has finished executing
//Closure = Function + its lexical environment (outer variables)

function outer(){ // outer function cant have access to inner function
    var b = 10;
    function inner(){ //inner function can access to outer function
        var a = 20; 
        console.log(a+b);
    }
    return inner;
}
let result = outer();
result()
console.log(result)