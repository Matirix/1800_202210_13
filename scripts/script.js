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
}

jQuery(document).ready(setup);


