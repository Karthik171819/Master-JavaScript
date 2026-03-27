const person ={
    fname: "Karthik",
    lname: "k",
    get fullName(){
        return `${this.fname} ${this.lname}`;
    },

    set fullName(value){
        const [first, last] = value.split(" ");
        this.firstName = first;
        this.lastName = last;
    }
};

person.fullName;