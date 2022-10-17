//set current date/time
function update() {
  $("#currentDay").html(dayjs().format("MMMM D YYYY, H:mm:ss"));
}
setInterval(update, 1000);

$(document).ready(function () {});

let currentTime = dayjs().format("HH");

//allow colors to reflect relative time blocks
$(".time-div").each(function () {
  let timeDiv = $(this).attr("id").split("-")[1];

  if (currentTime < timeDiv) {
    $(this).removeClass("present");
    $(this).addClass("future");
    console.log(currentTime);
  } else if (currentTime === timeDiv) {
    $(this).removeClass("future");
    $(this).addClass("present");
    console.log(currentTime);
  } else if (currentTime > timeDiv) {
    $(this).removeClass("present");
    $(this).addClass("past");
    console.log(currentTime);
  }
});

//Save to local storage
$(".saveBtn").click(function (event) {
  event.preventDefault();
  let value = $(this).siblings(".hour-block").val();
  let time = $(this).parent().attr("id").split("-")[1];
  localStorage.setItem(time, value);
  console.log("yes");
});

//Retrieve from local storage
$("#hr-09 .hour-block").val(localStorage.getItem("09"));
$("#hr-10 .hour-block").val(localStorage.getItem("10"));
$("#hr-11 .hour-block").val(localStorage.getItem("11"));
$("#hr-12 .hour-block").val(localStorage.getItem("12"));
$("#hr-13 .hour-block").val(localStorage.getItem("13"));
$("#hr-14 .hour-block").val(localStorage.getItem("14"));
$("#hr-15 .hour-block").val(localStorage.getItem("15"));
$("#hr-16 .hour-block").val(localStorage.getItem("16"));
$("#hr-17 .hour-block").val(localStorage.getItem("17"));

//Clear button function for clearing data and local storage
$("#clearBtn").click(function (event) {
  event.preventDefault;
  $("textArea").val("");
  localStorage.clear();
});
