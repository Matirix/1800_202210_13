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

function displayCards(collection) {
    let cardTemplate = document.getElementById("CommentTemplate");
    $(this).empty();

    db.collection(collection).get()
        .then(snap => {
            var i = 1;
            snap.forEach(doc => { //iterate thru each doc
                var title = doc.data().Name;   // get value of the "name" key
                var details = doc.data().Comment;   // get value of the "details" key
                let newcard = cardTemplate.content.cloneNode(true);

                //update title and text and image
                newcard.querySelector('.CommentName').innerHTML = title;
                newcard.querySelector('.CommentDesc').innerHTML = details;
                // newcard.querySelector('.card-image').src = "./images/" + collection + ".jpg"; //hikes.jpg

                //give unique ids to all elements for future use
                // newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
                // newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
                // newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);

                //attach to gallery
                document.getElementById(collection + "-go-here").appendChild(newcard);
                i++;
            })
        })
}

displayCards("Comments");