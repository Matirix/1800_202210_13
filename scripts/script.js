//---------------------------------
// Your own functions here
//---------------------------------
// function videos(vid) {
//     switch(vid) {
//         case 'sports_1': //id
//             the_video = "<iframe width='1200' height='534' src='https://www.youtube.com/embed/RjKNbfA64EE' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
//             break;
//         case 'sports_2':
//             the_video = '<iframe width="952" height="452" src="https://www.youtube.com/embed/cISYzA36-ZY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
//             break;
//         case 'sports_3':
//             the_video = '<iframe width="952" height="579" src="https://www.youtube.com/embed/HNQic9N2I7c?list=RDHNQic9N2I7c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
//             break;   
//         case 'sports_4':
//             the_video ='<iframe width="772" height="579" src="https://www.youtube.com/embed/py6MgBsXjYc?list=RDGMEMhCgTQvcskbGUxqI4Sn2QYw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
//             break;
//         default:
//             the_video = 'error not found';
//             break;
//     }
//     $("#video").html(the_video);
// }   
//Functions for each video
function videos_1() {
    $("#video").html("<iframe width='1200' height='534' src='https://www.youtube.com/embed/RjKNbfA64EE' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
    )
}  
function videos_2() {
    $("#video").html("<iframe width='1200' height='534' src='https://www.youtube.com/embed/cISYzA36-ZY' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
    )
}  
function videos_3() {
    $("#video").html("<iframe width='1200' height='534' src='https://www.youtube.com/embed/HNQic9N2I7c?list=RDHNQic9N2I7c' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
    )
}  
function videos_4() {
    $("#video").html("<iframe width='1200' height='534' src='https://www.youtube.com/embed/py6MgBsXjYc?list=RDGMEMhCgTQvcskbGUxqI4Sn2QYw' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
    )
}  


//To display video 
function display_video(){
    // console.log("inside the function")
    //get into the right collection
    //database of this collection (quotes).document. << You still need to access the document which is down below
    db.collection("frontvideo").doc("sports1")
    .onSnapshot(function(video_1) {
        //console.log(tuesdayDoc.data());
        document.getElementById("anotherone").innerHTML=video_1.data().video; //quote is the access to database
        //Grab the ID of where you want to display the content of the database.
        //syntax: doc.get("ID").innerhtml = callback function.data().key

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
    // if this class btn is clicked, run operator function
    $(".sports_1").click(function () {
        videos_1(this.id);
    })
    $(".sports_2").click(function () {
        videos_2(this.id);
    })
    $(".sports_3").click(function () {
        videos_3(this.id);
    })
    $(".sports_4").click(function () {
        videos_4(this.id);
    })
    // $(".sports").click(function (){
    //     videos(this.id);
    // })
    // display_video();
    displayCards("upcoming_events");
}


jQuery(document).ready(setup);