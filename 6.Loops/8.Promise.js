function getUser() {
return new Promise((res, rej) => {
  let users=[];
  setTimeout(() => {
      users = [
    { name: "Karthik", loc: "banglore" },
    { name: "bob", loc: "chennai" },
  ];
  res(users)
  }, 2000);
   return users;
})

}
let promise = getUser()
promise.then((users) => {
  console.log(users)
})
