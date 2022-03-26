//---------------------------------
// Your own functions here
//---------------------------------
    // <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>


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

function spotlight() {
    x = 'box-shadow'
    y = '0 0 0 max(100vh, 100vw) rgba(0, 0, 0, .3)'

    //dims the parent divs of iframe
    $("iframe").parent().css(x, y);
    //adds a cancel button
    $("#cancel_button").html("<button class='cancel' style='float: right; color: white'; width: 100%;>  <i class='material-icons md-48'> cancel </i>  </button>" )
    $("#help").html("<h2 class='spotbox cancel'>Press to the watch other sports happening right now!</h2>")

    // $("#spotlight_help").html("<class='cancel'")

    
    $('.cancel').on('click', function(){
        $("iframe").parent().css(x, "");
        $(".cancel").hide();


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
                newcard.querySelector('.card-image').src = "./images/" + sport + ".jpeg"; //hikes.jpg
                // newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
                // newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
                // newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);

                //attach to gallery
                document.getElementById(collection + "-go-here").appendChild(newcard);
                i++;
            })

        })
}


function setup() {
    $(".sports").click(function (){
        videos(this.id);
    })
    displayCards("upcoming_events");
}


jQuery(document).ready(setup);