//with destructuring
function display({name="user not found", age="no data"}){
    console.log(`Name: ${name} Age: ${age}`)
}
display({name:"Alex", age: 32})