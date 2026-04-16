//promise 
const promise = new Promise((res, rej) => {
    setTimeout(() => {
        console.log()
        res()
    }, 3000)
})
console.log(promise) //pending

