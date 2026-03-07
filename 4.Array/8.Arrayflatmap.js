//combining flat and map method
const sentence = ["hello world", "how are we just a boreing life but coding makes you happy"];
const res = sentence.flatMap((el) => el.split(" "));
console.log(res)