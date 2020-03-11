




var nowMoment = moment();
var day = document.getElementById("day");
day.innerHTML = nowMoment.format("dddd");


var nowDate = moment();
var date = document.getElementById("date");
date.innerHTML = nowDate.format("MMM Do YYYY"); 

// var dayDate = day.innerHTML + ", " + date.innerHTML;
// console.log(dayDate);

// how to now place dayDate into 