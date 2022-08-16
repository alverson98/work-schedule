// VARIABLE DECLARATIONS

// Current Date
var currentDay = moment();
// Displaying current date
$("#currentDay").text(currentDay.format("MMM Do, YYYY"));

// Current Time - 24hr
var currentTime = moment().format("HH");

// Time Blocks Divs 8am-6pm
var time8A = $("#8a");
var time9A = $("#9a");
var time10A = $("#10a");
var time11A = $("#11a");
var time12A = $("#12p");
var time1P = $("#1p");
var time2P = $("#2p");
var time3P = $("#3p");
var time4P = $("#4p");
var time5P = $("#5p");
var time6P = $("#6p");

// Time Block Array
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

// Save buttons
var saveBtn = $(".saveBtn");
console.log(saveBtn);

function timeBlockStatus(timeBlockValues) {
  // Assigning a value to all the time blocks
  for (var i = 0; i < timeBlockArray.length; i++) {
    var timeBlockValues = (timeBlockArray[i].value = 8 + i);
    console.log(timeBlockValues);

    // Assigning time block class based on past, present, or future -- color coded
    if (timeBlockValues == currentTime) {
      $("textarea").addClass("present");
    } else if (timeBlockValues < currentTime) {
      $("textarea").addClass("past");
    } else {
      $("textarea").addClass("future");
    }
  }
}

// Adding new event to time block
function handleFormSubmit(event) {
  event.preventDefault();

  var selectBtnTarget = $(event.currentTarget);

  var eventTextTarget = selectBtnTarget.siblings("textarea");

  localStorage.setItem("eventText", eventTextTarget.val());
}

saveBtn.on("click", handleFormSubmit);

timeBlockStatus();
