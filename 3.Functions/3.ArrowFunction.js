//An Arrow Function is a shorter way to write functions in JavaScript, introduced in ES6 (ECMAScript 2015).
//Normal function
function add(a, b){
    return a+b ;
}
console.log(add(4, 1))

//arrow function
const addArrow = (a,b) => {
    return a+b;
}
console.log(addArrow(2, 2));

//Lexical this property
const user = {
    name: "Karthik",
    normalFn: function(){
        console.log(`welcome ${this.name}`)
    },

    arrowfn: function (){
        setTimeout(() => {
            console.log(this.name)
        }, 2000);
    }
}
user.arrowfn();
user.normalFn();

// Arrow function DOES NOT create its own this.

// It inherits this from parent scope.

// Parent scope = arrowfn

// And inside arrowfn:

//visual flow
// user.arrowfn()
//         │
//         ▼
// this = user
//         │
//         ▼
// setTimeout arrow function
//         │
//         ▼
// inherits this from arrowfn
//         │
//         ▼
// this.name = Karthik