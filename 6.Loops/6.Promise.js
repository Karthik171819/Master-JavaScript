//promise 
const promise = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promise resolved")
    }, 3000)
})
console.log(promise) //pending

