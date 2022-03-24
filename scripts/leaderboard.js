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
        placement: "second"
    });
    hikesRef.add({
        Country: "Germany",
        Sport: "Downhill Skiing", //replace with your own city?
        Total_medals: "18",
        Gold_medals: "8",
        Silver_medals: "5",
        Bronze_medals: "5",
        placement: "third"
    });
    hikesRef.add({
        Country: "Canada",
        Sport: "Downhill Skiing", //replace with your own city?
        Total_medals: "17",
        Gold_medals: "7",
        Silver_medals: "5",
        Bronze_medals: "5",
        placement: "fourth"
    });

    hikesRef.add({
        Country: "Korea",
        Sport: "Downhill Skiing", //replace with your own city?
        Total_medals: "21",
        Gold_medals: "11",
        Silver_medals: "5",
        Bronze_medals: "5",
        placement: "first"
    });
}

function displayCards(collection) {
    // get the elements from HTML, store it in cardTemplate
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
                newcard.querySelector('.card-title').innerHTML =  country + " Leaderboard Position";
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


// Read the database and populate data over id tags.
// May currently be the least efficient. 
function read_card_contents(collection) {
    // Obtain DB for Korea
    db.collection("Leaderboard").doc("j7fZWwRnI5kegtBKOijX")
        .onSnapshot(function (KoreaDoc) {
            document.getElementById("korea_header").innerHTML = KoreaDoc.data().Country + " Leaderboard Position";
            document.getElementById("total1").innerHTML = KoreaDoc.data().Total_medals;
            document.getElementById("g1").innerHTML = KoreaDoc.data().Gold_medals;
            document.getElementById("s1").innerHTML = KoreaDoc.data().Silver_medals;
            document.getElementById("b1").innerHTML = KoreaDoc.data().Bronze_medals;
            document.getElementById("p1").innerHTML = KoreaDoc.data().placement;
            document.getElementById("korea_icon").src = "./images/" + "Korea" + ".png";
        })
    // Obtain DB information for China
    db.collection("Leaderboard").doc("hpQwJYTni94UxqH6Hrvi")
        .onSnapshot(function (ChinaDoc) {
            document.getElementById("china_header").innerHTML = ChinaDoc.data().Country + " Leaderboard Position";
            document.getElementById("total2").innerHTML = ChinaDoc.data().Total_medals;
            document.getElementById("g2").innerHTML = ChinaDoc.data().Gold_medals;
            document.getElementById("s2").innerHTML = ChinaDoc.data().Silver_medals;
            document.getElementById("b2").innerHTML = ChinaDoc.data().Bronze_medals;
            document.getElementById("p2").innerHTML = ChinaDoc.data().placement;
            document.getElementById("china_icon").src = "./images/" + "China" + ".png";
        })
    // Obtain DB information for Germany
    db.collection("Leaderboard").doc("ImMcKI5Gw0hkCfHNOEiQ")
        .onSnapshot(function (GermanyDoc) {
            document.getElementById("germany_header").innerHTML = GermanyDoc.data().Country + " Leaderboard Position";
            document.getElementById("germany_icon").src = "./images/" + "Germany" + ".png";
            document.getElementById("total3").innerHTML = GermanyDoc.data().Total_medals;
            document.getElementById("g3").innerHTML = GermanyDoc.data().Gold_medals;
            document.getElementById("s3").innerHTML = GermanyDoc.data().Silver_medals;
            document.getElementById("b3").innerHTML = GermanyDoc.data().Bronze_medals;
            document.getElementById("p3").innerHTML = GermanyDoc.data().placement;        })
    // Obtain DB information for Canada
    db.collection("Leaderboard").doc("CylGW1uC7PF51DIHIYVW")
        .onSnapshot(function (CanadaDoc) {
            document.getElementById("canadian_header").innerHTML = CanadaDoc.data().Country + " Leaderboard Position";
            document.getElementById("canada_icon").src = "./images/" + "Canada" + ".png";
            document.getElementById("total4").innerHTML = CanadaDoc.data().Total_medals;
            document.getElementById("g4").innerHTML = CanadaDoc.data().Gold_medals;
            document.getElementById("s4").innerHTML = CanadaDoc.data().Silver_medals;
            document.getElementById("b4").innerHTML = CanadaDoc.data().Bronze_medals;
            document.getElementById("p4").innerHTML = CanadaDoc.data().placement;
        })

    // Attempt to populate Card Header w/ DB information via For loop but no luck.
    let cardTemplate = document.getElementById("leaderboardCardTemplate");
    db.collection(collection).get()
        .then(snap2 => {
            var i = 1;
            snap2.forEach(doc => { //iterate thru each doc
                var country = doc.data().Country;   // get value of the "name" key
                // let newcard2 = cardTemplate.content.cloneNode(true);

                //update title and text and image
                // newcard2.querySelector('.card-title').innerHTML = country + " Leaderboard Position";
                document.getElementById("headingOne1").innerHTML = country + " Leaderboard Position";
                i++;
            })

        })

}
read_card_contents();