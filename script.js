var container = $(".time-block");
var timeBlock = $(".time-block");
var hour = dayjs().get("hour");
var currentTime = dayjs().hour();
// currentTime = 11
console.log("Date: ", currentTime);

console.log(timeBlock.parent());

console.log(hour);



for (var i = 9; i <= 17; i++) {
  if (currentTime == i) {
   // document.querySelector("#hour-" + i).classList.add("present");
    $("#hour-" + i).addClass("present") 
  }
  else if (currentTime > i) {
    $("#hour-" + i).addClass("future")
  }
  else {
    $("#hour-" + i).addClass("past")
  }
}

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should

  container.on("click", ".saveBtn", function () {
    console.log($(this).parent().attr("id"));
    var descriptionEvent = $(this).parent().children().eq(1).val();
    console.log(descriptionEvent);

    localStorage.setItem($(this).parent().attr("id"), descriptionEvent);
  });

  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  
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

  // TODO: Add code to display the current date in the header of the page.

  var currentDay = dayjs();
  $("#currentDay").text(currentDay.format("dddd MMMM D, YYYY"));
});
