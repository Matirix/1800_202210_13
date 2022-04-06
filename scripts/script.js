//---------------------------------
// Main page Primary Functions
//---------------------------------

// For the purpose of checking/showing logged in user.


//This is for displaying the user's name under the video in comments
function insertName() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {                                                                 
            // Do something for the current logged-in user here: 
            console.log(user.uid);
            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid);
            //get the document for current user.
            currentUser.get()
                  .then(userDoc => {
               var user_Name = userDoc.data().name;
               console.log(user_Name);
               //method #1:  insert with html only
               //document.getElementById("name-goes-here").innerText = user_Name;    //using javascript
               //method #2:  insert using jquery
               $("#name-goes-here").text(user_Name);                         //using jquery
            })
        } else {
            // No user is signed in.
        }
    });
}
insertName();



// This is for the switch video functionality
function videos(vid) {
    // console.log("first in", vid)
    switch(vid) {
        case 'first': //id
            //jQuery won't work under these ones
            //Access the collection called frontvideo, then look for the doc sports1. callback function
            db.collection("frontvideo").doc("sports1").onSnapshot(function(video_1) {
                document.getElementById("video").innerHTML=video_1.data().video})
            break;
        case 'second':
            db.collection("frontvideo").doc("sports 2").onSnapshot(function(video_1) {
                document.getElementById("video").innerHTML=video_1.data().video})
            break;
        case 'third':
            db.collection("frontvideo").doc("sports3").onSnapshot(function(video_1) {
                document.getElementById("video").innerHTML=video_1.data().video})
            break;
        case 'fourth':
            db.collection("frontvideo").doc("sports4").onSnapshot(function(video_1) {
                document.getElementById("video").innerHTML=video_1.data().video})
            break;
        default:
            x = 'error not found';
            break;
    }

}   

//This is for the spotlight function in all of the main pages with features
function spotlight() {
    x = 'box-shadow'
    y = '0 0 0 max(100vh, 100vw) rgba(0, 0, 0, .3)'
    console.log("From spotlight")

    //dims the parent divs of iframe in main.js
    
    //main.html
    $("iframe").parent().css(x, y);
    //leaderboard.html
    $("#leaderspotlight").parent().css(x,y);
    //schedule.html
    $("#sched_spot").siblings().css(x,y);


    //adds a cancel button

    //main -> leaderboard -> schedule
    $("#cancel_button").html("<button class='cancel' style='float: right; color: white'; width: 100%;>  <i class='material-icons md-48'> cancel </i>  </button>" )
    $("#cancel_button").html("<button class='cancel' style='float: right; color: white'; width: 100%;>  <i class='material-icons md-48'> cancel </i>  </button>" )
    $("#cancel_button").html("<button class='cancel' style='float: right; color: white'; width: 100%;>  <i class='material-icons md-48'> cancel </i>  </button>" )

    //main -> leaderboard (x2) -> schedule
    //adds the description
    $("#help").html("<h2 class='spotbox cancel'>Press to the watch other sports happening right now!</h2>")
    $("#leaderspotlight").html("<h2 class='spotbox cancel'>Press one of the countries to reveal it's current place!!</h2>")
    $("#sched_spot").html("<h2 class='spotbox cancel' style='background: white';>Scroll down to see upcoming events!</h2>")
    $("#add_instruc").html("<h2 class='spotbox cancel' style='background: white';>Press buttons below to add to bookmarks/calender!</h2>")


    //The elements generated would also generate the class .cancel
    //Upon clicked, it would hide the elements and undim the surroundings
    $('.cancel').on('click', function(){
        // for main
        $("iframe").parent().css(x, "");
        $(".cancel").hide();
        // For leaderboards
        $("#leaderspotlight").parent().css(x,"");
        //for schedule
        $("#sched_spot").siblings().css(x,"");





    })

}


function writesports() {
    //define a variable for the collection you want to create in Firestore to populate data
    var eventsRef = db.collection("upcoming_events");

    eventsRef.add({
        Sport: "Downhill Ski",
        Date: "February 7",
        city: "Cypress",
        province: "BC",
        length: "3 hours",
        details: 'Downhill is a form of alpine skiing competition. Whereas the other alpine skiing events emphasize turning and technique, downhill emphasizes "the six components of technique, courage, speed, risk, physical condition and judgement", according to the FIS "International Ski Competition Rules".'
    });
    eventsRef.add({
        Sport: "Figure Skating",
        Date: "February 12",
        city: "Richmond",
        province: "BC",
        length: "6 hours",
        details: "Figure skating is a sport in which individuals, pairs, or groups perform on figure skates on ice. It was the first winter sport to be included in the Olympic Games, when contested at the 1908 Olympics in London."
    });
    eventsRef.add({
        Sport: "Snow Boarding",
        Date: "February 17",
        city: "Cypress",
        province: "BC",
        length: "4 hours",
        details: "Snowboarding is a recreational and competitive activity that involves descending a snow-covered slope while standing on a snowboard that is almost always attached to a rider's feet. It features in the Winter Olympic Games and Winter Paralympic Games. "
    });
}

function displayCards(collection) {
    
    let cardTemplate = document.getElementById("hikeCardTemplate");

    db.collection(collection).get()
        .then(snap => {
            var i = 1;
            snap.forEach(doc => { //iterate thru each doc
                var date = doc.data().Date;   // get value of the "name" key
                var sport = doc.data().Sport;
                var detail = doc.data().details;
                let newcard = cardTemplate.content.cloneNode(true);
                newcard.querySelector('.card-title').innerHTML = sport + " taking place on " + date;
                newcard.querySelector('.card-location').innerHTML = date;
                newcard.querySelector('.difficulty').innerHTML = sport;
                newcard.querySelector('.length').innerHTML = detail;
                newcard.querySelector('.card-image').src = "../images/" + sport + ".jpeg"; //hikes.jpg
                // newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
                // newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
                // newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);

                //attach to gallery
                document.getElementById(collection + "-go-here").appendChild(newcard);
                i++;
            })

        })
}

//og mine

// function displayCards(collection) {

//     let cardTemplate = document.getElementById("hikeCardTemplate");

//     db.collection(collection).get()
//         .then(snap => {
//             var i = 1;
//             snap.forEach(doc => { //iterate thru each doc
//                 var date = doc.data().Date; // get value of the "name" key
//                 var sport = doc.data().Sport;
//                 var detail = doc.data().details;
//                 var eventID = doc.data().id;
//                 let newcard = cardTemplate.content.cloneNode(true);
//                 newcard.querySelector('.card-title').innerHTML = sport + " taking place on " + date;
//                 newcard.querySelector('.card-location').innerHTML = date;
//                 newcard.querySelector('.difficulty').innerHTML = sport;
//                 newcard.querySelector('.length').innerHTML = detail;
//                 newcard.querySelector('.card-image').src = "./images/" + sport + ".jpeg"; //hikes.jpg
//                 // newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
//                 // newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
//                 // newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);
//                 newcard.querySelector('i').id = 'save-' + eventID;
//                 newcard.querySelector('i').onclick = () => saveBookmark(eventID);

//                 //attach to gallery
//                 document.getElementById(collection + "-go-here").appendChild(newcard);
//                 i++;
//             })

//         })
// }


//-----------------------------------------------------------------------------
// This function is called whenever the user clicks on the "bookmark" icon.
// It adds the event to the "bookmarks" array
// Then it will change the bookmark icon from the hollow to the solid version. 
//-----------------------------------------------------------------------------
function saveBookmark(eventID) {
    currentUser.set({
            bookmarks: firebase.firestore.FieldValue.arrayUnion(eventID)
        }, {
            merge: true
        })
        .then(function () {
            console.log("bookmark has been saved for: " + currentUser);
            var iconID = 'save-' + eventID;
            //console.log(iconID);
            document.getElementById(iconID).innerText = 'bookmark';
        });
}



function setup() {
    $(".sports").click(function (){
        videos(this.id);
    })
    displayCards("upcoming_events");
}


jQuery(document).ready(setup);