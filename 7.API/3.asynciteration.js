const urls = ["https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3"
];

async function fetchPost(){
    for await(const url of urls){
        const response = await fetch(url);
        const data = await response.json(); 
    console.log(data.title) 
  }
    
}
fetchPost();