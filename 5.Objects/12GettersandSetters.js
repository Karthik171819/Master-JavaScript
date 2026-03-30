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

person.fullName; //here accesing the fullName property will call the getter and return the full name

person.fullName = "Karthik Kumar"; //here setting the fullName property will call the setter and update the firstName and lastName properties