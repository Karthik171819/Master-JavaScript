function getUser() {
return new Promise((res, rej) => {
  let users=[];
  setTimeout(() => {
      users = [
    { username: "Karthik", loc: "banglore" },
    { username: "bob", loc: "chennai" },
  ];
  res(users)
  }, 2000);
   return users;
})

}
// let promise = getUser()
// promise.then((users) => {
//   console.log(users)
// })

function findUser(username){
  getUser().then((users) => {
    const user = users.find((user) => user.username === username);
    console.log(user)
  })
}

console.log(findUser("Karthik"))
