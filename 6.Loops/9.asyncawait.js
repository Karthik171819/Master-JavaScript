function fetchData(){
    return new Promise((resolve => {
        setTimeout(() => {
            resolve("success")
        }, 2000);
    }))
}

async function ProcessData(){
    const data = await fetchData();
    console.log(data);
    console.log("completed")
}

ProcessData()