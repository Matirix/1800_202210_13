firebase.auth().onAuthStateChanged(user => {
    if (user) {
        getBookmarks(user)
    } else {
        console.log("No user is signed in");
    }
});
function getBookmarks(user) {
    db.collection("users").doc(user.uid).get()
        .then(userDoc => {
            var bookmarks = userDoc.data().bookmarks;
            console.log(bookmarks);

            let CardTemplate = document.getElementById("CardTemplate");
            bookmarks.forEach(thisEventID => {
                console.log(thisEventID);
                db.collection("upcoming_events").where("id", "==", thisEventID).get().then(snap => {
                    size = snap.size;
                    queryData = snap.docs;
                    
                    if (size == 1) {
                        var doc = queryData[0].data();
                        var date = doc.Date; // get value of the "name" key
                        var sport = doc.Sport;
                        var detail = doc.details;
                        let newCard = CardTemplate.content.cloneNode(true);
                        newCard.querySelector('.card-title').innerHTML = sport;
                        newCard.querySelector('.card-length').innerHTML = date;
                        newCard.querySelector('.card-text').innerHTML = detail;
                        newCard.querySelector('img').src = `./images/${sport}.jpeg`;
                        hikeCardGroup.appendChild(newCard);
                    } else {
                        console.log("Query has more than one data")
                    }

                })

            });
        })
}