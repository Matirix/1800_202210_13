function writeComment(){
    console.log("I'm in")
    let comment = $("#comment").val();
    console.log(comment);

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            var currentUser = db.collection("users").doc(user.uid)
            currentUser = db.collection("users").doc(user.uid);
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
        }
    });
}

function displayCards(collection) {
    let cardTemplate = document.getElementById("CommentTemplate");
    db.collection(collection).get()
        .then(snap => {
            var i = 1;
            snap.forEach(doc => { 
                var title = doc.data().Name;   
                var details = doc.data().Comment;   
                let newcard = cardTemplate.content.cloneNode(true);
                newcard.querySelector('.CommentName').innerHTML = title;
                newcard.querySelector('.CommentDesc').innerHTML = details;
                document.getElementById(collection + "-go-here").appendChild(newcard);
                i++;
            })
        })
}

displayCards("Comments");