function writeComment(){
    console.log("I'm in")
    let comment = $("#comment").val();
    console.log(comment);

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            var currentUser = db.collection("users").doc(user.uid)
            currentUser = db.collection("users").doc(user.uid);

            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    var user_Name = userDoc.data().name;
                    db.collection("Comments").add({
                        Comment: comment,
                        Name: user_Name,

                    }) 
                })
                   
        }  
        else {
            // No user is signed in.
        }
    });

    
}

function displayComment(){
    db.collection("Comments").doc("MBy9bvhoyMKV2BfOStOo")
    .onSnapshot(function (comment){
        username = comment.data().Name;
        Comm = comment.data().Comment;
        $("#comment_section").append(`<h5> ${username}<h5> + <br> + ${comment} `);
    })
}

// displayComment();
// function displayComment() {
//     db.collection("Comments").doc()
//     .onSnapshot(function (comment){
//         username = comment.data().Name;
//         Comm = comment.data().comment;
//         $("#comments_section").append(`<h5> ${username}<h5> + <br> + ${comment} `);
//     })
// }

