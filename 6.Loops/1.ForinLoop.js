const decoration = {
    color: 'red',
    qty: 5,
    price: "10rs"
};

//you give just i means it will give only the keys of the object
for (let i in decoration) {
    console.log(i, decoration[i]); 
}