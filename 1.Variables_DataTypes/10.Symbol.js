//Symbol is introduced in ES6 always unique, even if same description often used for object property keys to avoid naming collisions
const symb1 = Symbol("id");
const symb2 = Symbol("id");
console.log(symb1 === symb2);

const User = {
    name: "Alice",
    symb1: 123
}
console.log(User.symb1);