const promisethen = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promise resolved method");
        console.log("Promise resolved");
    }, 3000)
})
promisethen.then((value) => {
    console.log("I am in then block");
    console.log(value); //actually here value is a passed from resolve method of promise in simple what ever we pass in resolve method that will be the value of then block
})