// VARIABLE DECLARATIONS

// Current Date
var currentDay = moment();
// Displaying current date
$("#currentDay").text(currentDay.format("MMM Do, YYYY"));
console.log(currentDay);

// Current Time - 24hr
var currentTime = moment().format("HH");
console.log(currentTime);

// Time Blocks Divs 8am-6pm
var time8A = $("#8");
var time9A = $("#9");
var time10A = $("#10");
var time11A = $("#11");
var time12A = $("#12");
var time1P = $("#1");
var time2P = $("#2");
var time3P = $("#3");
var time4P = $("#4");
var time5P = $("#5");
var time6P = $("#6");

// Time Block Div Array
var timeBlockArray = [
  time8A,
  time9A,
  time10A,
  time11A,
  time12A,
  time1P,
  time2P,
  time3P,
  time4P,
  time5P,
  time6P,
];

// Text area variables
var t8 = $("#text-8");
var t9 = $("#text-9");
var t10 = $("#text-10");
var t11 = $("#text-11");
var t12 = $("#text-12");
var t13 = $("#text-13");
var t14 = $("#text-14");
var t15 = $("#text-15");
var t16 = $("#text-16");
var t17 = $("#text-17");
var t18 = $("#text-18");

// Text Area Arrays
var textAreaArray = [t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18];

timeStatus();

// Making time block past, present, future -- color coded
function timeStatus() {
  // looping through all of the time blocks
  $(".time-block").each(function () {
    var timeBlock = parseInt($(this).attr("id").split("h")[1]);
    console.log(timeBlock);

    console.log(currentTime);

    // if statement to determine if time is past, present, or future
    if (timeBlock == currentTime) {
      $(this).children("textarea").removeClass("past");
      $(this).children("textarea").addClass("present");
      $(this).children("textarea").removeClass("future");
    } else if (timeBlock < currentTime) {
      $(this).children("textarea").addClass("past");
      $(this).children("textarea").removeClass("future");
      $(this).children("textarea").removeClass("present");
    } else {
      $(this).children("textarea").addClass("future");
      $(this).children("textarea").removeClass("present");
      $(this).children("textarea").removeClass("past");
    }
  });
}

// Click button to save data to local storage
$(".saveBtn").click(function () {
  // Accessing values
  var textAreaEntry = $(this).siblings(".col-10").val();
  var timeBlockGuide = $(this).parent().attr("id");

  // Storing data to local storage
  localStorage.setItem(timeBlockGuide, textAreaEntry);
});

// Pull data from local storage
var h8 = $("#h8").val(localStorage.getItem("h8"));
var h9 = $("#h9").val(localStorage.getItem("h9"));
var h10 = $("#h10").val(localStorage.getItem("h10"));
var h11 = $("#h11").val(localStorage.getItem("h11"));
var h12 = $("#h12").val(localStorage.getItem("h12"));
var h13 = $("#h13").val(localStorage.getItem("h13"));
var h14 = $("#h14").val(localStorage.getItem("h14"));
var h15 = $("#h15").val(localStorage.getItem("h15"));
var h16 = $("#h16").val(localStorage.getItem("h16"));
var h17 = $("#h17").val(localStorage.getItem("h17"));
var h18 = $("#h18").val(localStorage.getItem("h18"));
