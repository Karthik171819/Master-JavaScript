function hello(name){
    return {
        name,
        //closure function
        greet: function(){
            console.log(`hi ${this.name}, have a great day!`); //actually this.name refers to property of an object not a function parameter
        }
    }
}
const passing = hello("Karthik"); //passing is global scope outside of function
passing.greet();