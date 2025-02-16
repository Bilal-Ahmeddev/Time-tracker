"use strict";

function calculateAge(birthdate) {
  var birthDate = new Date(birthdate);
  var now = new Date();
  var ageMilliseconds = now - birthDate;
  var seconds = Math.floor(ageMilliseconds / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);
  var years = Math.floor(days / 365.25);
  var remainingDays = days % 365.25;
  var remainingHours = hours % 24;
  var remainingMinutes = minutes % 60;
  var remainingSeconds = seconds % 60;
  return "".concat(years, " years, ").concat(remainingDays, " days, ").concat(remainingHours, " hours, ").concat(remainingMinutes, " minutes, ").concat(remainingSeconds, " seconds");
}

function updateAge() {
  document.getElementById("age").innerText = calculateAge("1999-10-17");
}

function formatTime(seconds) {
  var hrs = Math.floor(seconds / 3600);
  var mins = Math.floor(seconds % 3600 / 60);
  var secs = Math.floor(seconds % 60);
  return "".concat(hrs, "h ").concat(mins, "m ").concat(secs, "s");
}

function updateTimeDisplay() {
  chrome.storage.local.get(["totalTime"], function (result) {
    var timeSpent = result.totalTime || 0;
    document.getElementById("time").innerText = formatTime(timeSpent);
  });
}

setInterval(updateTimeDisplay, 1000);
updateTimeDisplay();
var quotes = ["Keep pushing forward! 💪", "Success is no accident! 🚀", "Dream big and dare to fail! 🌟", "Every day is a second chance! 🔥"];
document.querySelector(".quote").innerText = quotes[Math.floor(Math.random() * quotes.length)];
setInterval(updateAge, 1000);
updateAge();
//# sourceMappingURL=popup.dev.js.map
