function writeleaders() {
    //define a variable for the collection you want to create in Firestore to populate data
    var hikesRef = db.collection("Leaderboard");

    hikesRef.add({
        Country: "China",
        Sport: "Downhill Skiing", //replace with your own city?
        Total_medals: "20",
        Gold_medals: "10",
        Silver_medals: "5",
        Bronze_medals: "5",
        placement: "first"
    });
    hikesRef.add({
        Country: "Germany",
        Sport: "Downhill Skiing", //replace with your own city?
        Total_medals: "18",
        Gold_medals: "8",
        Silver_medals: "5",
        Bronze_medals: "5",
        placement: "second"
    });
    hikesRef.add({
        Country: "Canada",
        Sport: "Downhill Skiing", //replace with your own city?
        Total_medals: "17",
        Gold_medals: "7",
        Silver_medals: "5",
        Bronze_medals: "5",
        placement: "third"
    });
}
function displayCards(collection) {
    let cardTemplate = document.getElementById("leaderboardCardTemplate");

    db.collection(collection).get()
        .then(snap => {
            var i = 1;
            snap.forEach(doc => { //iterate thru each doc
                var country = doc.data().Country;   // get value of the "name" key
                var total_m = doc.data().Total_medals;
                var gold = doc.data().Gold_medals;
                var silver = doc.data().Silver_medals;
                var bronze = doc.data().Bronze_medals;
                var placements = doc.data().placement;
                let newcard = cardTemplate.content.cloneNode(true);

                //update title and text and image
                newcard.querySelector('.card-title').innerHTML = country + " Leaderboard Position";
                newcard.querySelector('.card-attend').innerHTML = country;
                newcard.querySelector('.card-image').src = "./images/" + country + ".png"; //hikes.jpg
                newcard.querySelector('.total').innerHTML = total_m;
                newcard.querySelector('.g').innerHTML = gold;
                newcard.querySelector('.s').innerHTML = silver;
                newcard.querySelector('.b').innerHTML = bronze;
                newcard.querySelector('.p').innerHTML = placements;


    
                // newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
                // newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
                // newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);

                //attach to gallery
                document.getElementById(collection + "-go-here").appendChild(newcard);
                i++;
            })

        })
}
displayCards("Leaderboard")
