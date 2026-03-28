const person ={
    fname: "Karthik",
    lname: "k",

    //getter
    get fullName(){
        return `${this.fname} ${this.lname}`;
    },

    //setter
    set fullName(value){
        const [first, last] = value.split(" ");
        this.firstName = first;
        this.lastName = last;
    }
};

person.fullName;