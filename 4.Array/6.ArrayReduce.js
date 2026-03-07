const num = [1, 2, 3, 4];
const res = num.reduce((accu, curr) => {
    return accu + curr;
}, 0);
console.log(res);