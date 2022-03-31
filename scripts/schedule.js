
const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML =  months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today" value = "${i}">${i}</div>`;
    } else {
      days += `<div class ="${i}" value = "${i}">${i}</div>`;
    }
  }

  if(nextDays > 0) {
    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }
  }
  else {
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});
document.querySelector(".days").addEventListener("click", () => {
  var day = document.getElementsByClassName("1");
  const month = document.getElementsByClassName("month");
  const olympic_m = document.getElementsByTagName("h1");
  const test = document.getElementsByTagName("h1");
  // const test2 = document.getElementsByClassName("month").getElementsByClassName("h1")
  // console.log(test2);
  console.log(typeof(parseInt(day[0].className)))
  if (olympic_m[1] == test[1]) {
    console.log("This code works");
  }

});


renderCalendar();

// function writesports() {
//     //define a variable for the collection you want to create in Firestore to populate data
//     var eventsRef = db.collection("upcoming_events");

//     eventsRef.add({
//         Sport: "Downhill Ski",
//         Date: "February 7",
//         city: "Cypress",
//         province: "BC",
//         length: "3 hours",
//         details: 'Downhill is a form of alpine skiing competition. Whereas the other alpine skiing events emphasize turning and technique, downhill emphasizes "the six components of technique, courage, speed, risk, physical condition and judgement", according to the FIS "International Ski Competition Rules".'
//     });
//     eventsRef.add({
//         Sport: "Figuer Skating",
//         Date: "February 12",
//         city: "Richmond",
//         province: "BC",
//         length: "6 hours",
//         details: "Figure skating is a sport in which individuals, pairs, or groups perform on figure skates on ice. It was the first winter sport to be included in the Olympic Games, when contested at the 1908 Olympics in London."
//     });
//     eventsRef.add({
//         Sport: "Snow Boarding",
//         Date: "February 17",
//         city: "Cypress",
//         province: "BC",
//         length: "4 hours",
//         details: "Snowboarding is a recreational and competitive activity that involves descending a snow-covered slope while standing on a snowboard that is almost always attached to a rider's feet. It features in the Winter Olympic Games and Winter Paralympic Games. "
//     });
// }
// writesports();
// function displayCards(collection) {
//     let cardTemplate = document.getElementById("hikeCardTemplate");

//     db.collection(collection).get()
//         .then(snap => {
//             var i = 1;
//             snap.forEach(doc => { //iterate thru each doc
//                 var title = doc.data().name;   // get value of the "name" key
//                 var details = doc.data().details;   // get value of the "details" key
//                 var city = doc.data().city;
//                 var province = doc.data().province;
//                 var difficulty = doc.data().level;
//                 var length = doc.data().length;
//                 let newcard = cardTemplate.content.cloneNode(true);

//                 //update title and text and image
//                 newcard.querySelector('.card-title').innerHTML = title;
//                 newcard.querySelector('.card-attend').innerHTML = details;
//                 newcard.querySelector('.card-image').src = "./images/" + title + ".jpeg"; //hikes.jpg
//                 newcard.querySelector('.card-location').innerHTML = city;
//                 newcard.querySelector('.province').innerHTML = province;
//                 newcard.querySelector('.difficulty').innerHTML = difficulty;
//                 newcard.querySelector('.length').innerHTML = length;

    
//                 // newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
//                 // newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
//                 // newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);

//                 //attach to gallery
//                 document.getElementById(collection + "-go-here").appendChild(newcard);
//                 i++;
//             })

//         })
// }