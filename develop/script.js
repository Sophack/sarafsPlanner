// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//note you can add more than 1 eventlistener to the same object

var saveBtn = document.querySelector("#past");
let userInput = document.querySelectorAll(".description");

saveBtn.addEventListener("click", e => {
  console.log(e);
}
);


var saveBtn = document.querySelector("#present");

saveBtn.addEventListener("click", e => {
  console.log(e.target);
}
);

var saveBtn = document.querySelector("#future");

saveBtn.addEventListener("click", e => {
  console.log(e.target);
}
);

var value = userInput.value;

localStorage.setItem("to do", value);

var myDate = newDate (today);

console.log(myDate);
  // TODONE: Add a listener for click events on the save button. 
  // the button saves into local storage but not the value of what the user types 
  
  // TODO: 
  // This code should use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


// the function should include the event listener as a save button 
// function for user input saving into local storage
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
  // TODO: Add code to display the current date in the header of the page.
