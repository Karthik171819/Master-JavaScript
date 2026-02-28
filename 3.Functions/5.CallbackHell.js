function getUser(id, callback){
    setTimeout(() => {
        console.log("User fetched");
        callback({id: id, name: "karthik"});
    }, 1000);
}
 
function getPosts(user, callback){
    setTimeout(() => {
        console.log("Posts fetched for" + user.name);
        callback(["Post 1", "Post 2"]);
    }, 1000);
}

function getComments(post, callback){
    setTimeout(() => {
        console.log("Comments fetched for"+post);
        callback(["Comment 1", " Comment 2"]);
    }, 1000);
}

//callback hell
getUser(1, function (user){
    getPosts(user, function(posts){
        getComments(posts[0], function(comments){
            console.log("comments", comments);
        });

    });
});