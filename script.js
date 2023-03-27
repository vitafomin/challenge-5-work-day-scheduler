var container = $(".time-block");

var hour = dayjs().get("hour");
var currentTime = dayjs().hour();
// currentTime = 11 - test
console.log("Date: ", currentTime);

for (var i = 9; i <= 17; i++) {
  if (currentTime == i) {

    // how we could write the line below with vanilla JS:
   // document.querySelector("#hour-" + i).classList.add("present");

    $("#hour-" + i).addClass("present") 
  }
  else if (currentTime < i) {
    $("#hour-" + i).addClass("future")
  }
  else {
    $("#hour-" + i).addClass("past")
  }
}

$(function () {
  

  container.on("click", ".saveBtn", function () {

    console.log($(this).parent().attr("id"));

    var descriptionEvent = $(this).parent().children().eq(1).val();
    console.log(descriptionEvent);

    localStorage.setItem($(this).parent().attr("id"), descriptionEvent);
  });


  
  console.log("localStorage: ", localStorage);
  console.log("Length: ", localStorage.length);


  for (var i = 0; i < localStorage.length; i++) {

    // We grab the data from Local Storage
    var data = localStorage.key(i);
    var savedItems = localStorage.getItem(data);

    console.log("Key: ", data);
    console.log("Info: ", savedItems);

    // this puts the info ON THE DOM
    $("#" + data).find(".description").val(savedItems);

    console.log(localStorage.getItem(localStorage.key(i)));
  }



  var currentDay = dayjs();
  $("#currentDay").text(currentDay.format("dddd MMMM D, YYYY"));

});
