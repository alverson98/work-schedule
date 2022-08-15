// VARIABLE DECLARATIONS

// Current Date
var currentDay = moment();
// Displaying current date
$("#currentDay").text(currentDay.format("MMM Do, YYYY"));

// Current Time - 24hr
var currentTime = moment().format("HH");
console.log(currentTime);

// Time Blocks Divs 8am-6pm
var time8A = document.getElementById("8a");
var time9A = document.getElementById("9a");
var time10A = document.getElementById("10a");
var time11A = document.getElementById("11a");
var time12A = document.getElementById("12p");
var time1P = document.getElementById("1p");
var time2P = document.getElementById("2p");
var time3P = document.getElementById("3p");
var time4P = document.getElementById("4p");
var time5P = document.getElementById("5p");
var time6P = document.getElementById("6p");

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
var saveBtn = document.getElementsByClassName("saveBtn");
console.log(saveBtn);

function timeBlockStatus(timeBlockValues) {
  // Assigning a value to all the time blocks
  for (var i = 0; i < timeBlockArray.length; i++) {
    var timeBlockValues = (timeBlockArray[i].value = 8 + i);
    console.log(timeBlockValues);

    // Assigning time block class based on past, present, or future -- color coded
    if (timeBlockValues == currentTime) {
      timeBlockArray[i].children[1].classList.add("present");
    } else if (timeBlockValues <= currentTime) {
      timeBlockArray[i].children[1].classList.add("past");
    } else {
      timeBlockArray[i].children[1].classList.add("future");
    }
  }
  createEvent(timeBlockValues);
}

// Adding new event to time block
function createEvent(timeBlockValues) {
  for (var i = 0; i < timeBlockArray.length; i++) {
    // Event listener to save new event
    saveBtn[i].addEventListener("click", function (event) {
      event.preventDefault;
      // Assigning numerical values to all save buttons
      for (var i = 0; i < timeBlockArray.length; i++) {
        var eventTextArea = timeBlockArray[i].children[1];
        var eventText = eventTextArea.value;
        console.log(eventText);
        var saveButtons = timeBlockArray[i].children[2];
        console.log(saveButtons);
        var saveBtnValues = (saveButtons = timeBlockArray[i].value);
        console.log(saveBtnValues);

        localStorage.setItem("eventText", eventText);
      }
    });
  }
}

timeBlockStatus();
