//GET
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((response) => response.json())
.then((data) => console.log("GET Results",data))
.catch((error) => console.error("Error", error))