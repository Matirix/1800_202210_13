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
    display_video();
}

jQuery(document).ready(setup);


