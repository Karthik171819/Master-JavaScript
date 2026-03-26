function greet(name){
    this.Name = name
}
const wlcm = new greet("hi");
console.log(wlcm)