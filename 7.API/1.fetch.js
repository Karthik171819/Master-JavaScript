//GET - here we getting the data from api request
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((response) => response.json())
.then((data) => console.log("GET Results",data))
.catch((error) => console.error("Error", error))

//POST - we are submitting the data
fetch("https://jsonplaceholder.typicode.com/posts", {
    method:"POST", //method of api request
    headers:{      //setting headers to know server which type of data are we going to send
        "Content-Type":"application/json"
    },
    body: JSON.stringify({  //body parameter
        title:"My Post",
        body:"This is my post from POST Method",  //this is separated body for content means post
        userID: 1
        
    })
})

.then((response) => response.json() )
.then((data) => console.log("POST Result", data))
.catch((err) => console.error("Error", err));
