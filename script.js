




var nowMoment = moment();
var day = document.getElementById("day");
day.innerHTML = nowMoment.format("dddd");


var nowDate = moment();
var date = document.getElementById("date");
date.innerHTML = nowDate.format("MMM Do YYYY"); 

// make onclick event for class "save"
var input = document.getElementById("input9");

// save to local storage
  $(".save").on("click", function () {
    localStorage.setItem("#input9", JSON.stringify(input.value));
})
// get item from local storage
function grab() {
    if(localStorage != null);
    var final = localStorage.getItem("#input9");
    input = final;
}