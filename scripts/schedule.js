//populating the calender
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

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

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
      days += `<div class="today" id = "day" value = "${i}">${i}</div>`;
    } else {
      days += `<div class ="${i}" id = "day" value = "${i}">${i}</div>`;
    }
  }

  if (nextDays > 0) {
    for (let j = 1; j <= nextDays; j++) {
      days += `<div class="next-date">${j}</div>`;
      monthDays.innerHTML = days;
    }
  } else {
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

// document.querySelector("").addEventListener("click", () => {
//     console.log("this worked")

//   // console.log(typeof(parseInt(day[0].className)))
//   // console.log(Number(day[0].className))
//   // if (Number(day[0].className) == 17){
//     // console.log("T")
//   // }

// });


renderCalendar();

function spotlight() {
  x = 'box-shadow'
  y = '0 0 0 max(100vh, 100vw) rgba(0, 0, 0, .3)'
  console.log("From spotlight")
  //dims the parent divs of iframe in main.js
  $("iframe").parent().css(x, y);
  $("#leaderspotlight").parent().css(x, y);
  $("#sched_spot").siblings().css(x, y);
  //adds a cancel button
  $("#cancel_button").html("<button class='cancel' style='float: right; color: white'; width: 100%;>  <i class='material-icons md-48'> cancel </i>  </button>")
  $("#cancel_button").html("<button class='cancel' style='float: right; color: white'; width: 100%;>  <i class='material-icons md-48'> cancel </i>  </button>")
  $("#cancel_button").html("<button class='cancel' style='float: right; color: white'; width: 100%;>  <i class='material-icons md-48'> cancel </i>  </button>")
  //adds the description
  $("#help").html("<h2 class='spotbox cancel'>Press to the watch other sports happening right now!</h2>")
  $("#leaderspotlight").html("<h2 class='spotbox cancel'>Press one of the countries to reveal it's current place!!</h2>")
  $("#sched_spot").html("<h2 class='spotbox cancel' style='background: white';>Scroll down to see upcoming events!</h2>")
  $("#add_instruc").html("<h2 class='spotbox cancel' style='background: white';>Press buttons below to add to bookmarks/calender!</h2>")

  // $("#spotlight_help").html("<class='cancel'")

  $('.cancel').on('click', function () {
    $("iframe").parent().css(x, "");
    $(".cancel").hide();
    // For leaderboards
    $("#leaderspotlight").parent().css(x, "");
    $("#sched_spot").siblings().css(x, "");
  })
}