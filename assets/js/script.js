// VARIABLE DECLARATIONS

// Current Date
var currentDay = moment();
// Displaying current date
$("#currentDay").text(currentDay.format("MMM Do, YYYY"));

// Current Time
var currentTime = moment().format("h:mm:ss a");
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

