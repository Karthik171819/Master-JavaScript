class Character {
    constructor(name){
        this.Name = name
    }

    attack() {
        console.log(this.Name, "here no worry")
    }
}

class Player extends Character{
    constructor(name){
        super(name);
    }
}

const p1 = new Player("VIRAT 18")
p1.attack();


