// VARIABLE DECLARATIONS

// Current Date
var currentDay = moment();
// Displaying current date
$("#currentDay").text(currentDay.format("MMM Do, YYYY"));

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

function schedule() {
  // Click button to save data to local storage
  $(".saveBtn").click(function () {
    // Accessing values
    var textAreaEntry = $(this).siblings(".col-10").val();
    var timeBlockGuide = $(this).parent().attr("id");

    // Storing data to local storage
    localStorage.setItem(timeBlockGuide, textAreaEntry);
  });

  // Making time block past, present, future -- color coded
  function timeStatus() {
    // Assigning a value to all the time blocks
    for (var i = 0; i < timeBlockArray.length; i++) {
      var timeBlockValues = (timeBlockArray[i].value = 8 + i);
      console.log(timeBlockValues);

      // Assigning time block class
      if (timeBlockValues == currentTime) {
        $("textarea").addClass("present");
      } else if (timeBlockValues < currentTime) {
        $("textarea").addClass("past");
      } else {
        $("textarea").addClass("future");
      }
    }
  }
  timeStatus();
}

schedule();
