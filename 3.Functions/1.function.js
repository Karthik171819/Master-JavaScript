function Hello(message) {
  console.log(message);
}
Hello("Hi JS ");

function add(a, b) {
  return a + b;
}
var res = add(2, 3);
console.log(res);

function sub(a, b) {
  if (a && b) {
    return a - b;
  }
  return 0;
}
var res = sub();
console.log(res);
