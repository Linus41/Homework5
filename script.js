var nowMoment = moment();
var day = document.getElementById("day");
day.innerHTML = nowMoment.format("dddd");

var nowDate = moment();
var date = document.getElementById("date");
date.innerHTML = nowDate.format("MMM Do YYYY");

$(".save").on("click", function () {
  var input = document.getElementById("input9").value;
  localStorage.setItem("#input9", input);
  var input2 = document.getElementById("input10").value;
  localStorage.setItem("#input10", input2);
  var input3 = document.getElementById("input11").value;
  localStorage.setItem("#input11", input3);
  var input4 = document.getElementById("input12").value;
  localStorage.setItem("#input12", input4);
  var input5 = document.getElementById("input1").value;
  localStorage.setItem("#input1", input5);
  var input6 = document.getElementById("input2").value;
  localStorage.setItem("#input2", input6);
  var input7 = document.getElementById("input3").value;
  localStorage.setItem("#input3", input7);
  var input8 = document.getElementById("input4").value;
  localStorage.setItem("#input4", input8);
  var input9 = document.getElementById("input5").value;
  localStorage.setItem("#input5", input9);

})

function grab() {
  if (localStorage != null);
  document.getElementById("input9").value = localStorage.getItem("#input9");
  document.getElementById("input10").value = localStorage.getItem("#input10");
  document.getElementById("input11").value = localStorage.getItem("#input11");
  document.getElementById("input12").value = localStorage.getItem("#input12");
  document.getElementById("input1").value = localStorage.getItem("#input1");
  document.getElementById("input2").value = localStorage.getItem("#input2");
  document.getElementById("input3").value = localStorage.getItem("#input3");
  document.getElementById("input4").value = localStorage.getItem("#input4");
  document.getElementById("input5").value = localStorage.getItem("#input5");
}
grab();

function colorChange() {
  var currentHour = moment().format("H");
  console.log(currentHour);
  $(".time-block").each(function () {
    var blockHour = parseInt(this.getElementsByClassName('number')[0].innerHTML);
    if (blockHour === 1 || blockHour === 2 || blockHour === 3 || blockHour === 4 || blockHour === 5) {
      blockHour = blockHour + 12;
    }
    if (blockHour < currentHour) {
      $(this).addClass("past");
    }
    else if (blockHour == currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    }
    else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}

colorChange();