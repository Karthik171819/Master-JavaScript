//In JavaScript, a prototype is a core concept that allows objects to inherit properties and methods from other object

const character ={
    attack: function(){
        console.log("God of Thunder");
    },
}

const fighter = {
    name: "Thor",
    __proto__: character, //here prototype doing just like inheritance
}

fighter.attack() //here im calling the attack fun from other object

//here directly accessing the prototype
function Ch(name){
    this.name = name,
    this.attack = function (){
        console.log(this.name, "Sharingan")
    }
}

function stunter(name){
    this.name = name
}

const fightr = new Ch("Mangekyu")
fightr.attack()