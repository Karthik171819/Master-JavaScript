//&&, ||
const a = 10;
const b = 'kamlesh';
const c = null;
console.log( a && b); //kamlesh
console.log( a && c); //null
console.log( b || a); //kamlesh actually it priorize the first value
console.log( a || c); //10

//small example
function greet(name){
    console.log(`hello, ${name || 'Guest'}`);
}
greet(); //hello, Guest