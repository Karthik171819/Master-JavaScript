const person ={
    fname: "Karthik",
    lname: "k",
    get fullName(){
        return `${this.fname} ${this.lname}`;
    }
}

person.fullName;