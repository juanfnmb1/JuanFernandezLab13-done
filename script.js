function begin() {
  counter1 = 0; //counter1 for bold button
  counter2 = 0; //counter2 for italic button
  counter3 = 0; //counter3 for square background change
  counter4 = 0; //counter4 for border color change
  //gets all the buttons
  var button = document.getElementById("boldText");
  var button2 = document.getElementById("italics");
  var button3 = document.getElementById("backgroundColor");
  var button4 = document.getElementById("backgroundColor2");
  //allows functions to start when buttons are clicked
  button.onclick = boldText;
  button2.onclick = italicText;
  button3.onclick = backgroundChange;
  button4.onclick = borderChange;
}
function boldText() {
  //bolded text
  var div1 = document.getElementById("section1");
  document.getElementById("paragraph1").style.fontWeight = "bold";
  if ((counter1 == 0) & (counter2 == 0)) {
    //a return to normal button is created
    var newButton = document.createElement("button");
    newButton.id = "newButton";
    var buttonText = document.createTextNode("Return to normal state");
    newButton.append(buttonText);
    div1.appendChild(newButton);
    counter1 = 1;
    //controls it so that the return to normal state button doesnt get created multiple times
  }
  newButton.onclick = return1;
  //new function when the return to normal state button is clicked
}
function italicText() {
  //italic text
  var div1 = document.getElementById("section1");
  document.getElementById("paragraph1").style.fontStyle = "italic";
  if ((counter2 == 0) & (counter1 == 0)) {
    //a return to normal button is created
    var newButton = document.createElement("button");
    newButton.id = "newButton";
    var buttonText = document.createTextNode("Return to normal state");
    newButton.append(buttonText);
    div1.appendChild(newButton);
    counter2 = 1; //controls it so that the return to normal state button doesnt get created multiple times
  }
  newButton.onclick = return1;
  //new function when the return to normal state button is clicked
}

function return1() {
  //resets values and returns everything to normal state, so that it can be italicized or bolded again
  document.getElementById("paragraph1").style.fontWeight = "normal";
  document.getElementById("paragraph1").style.fontStyle = "normal";
  var newButton = document.getElementById("newButton");
  newButton.remove(); //once it goes back to normal, the rever to normal state button is deleted
  counter1 = 0;
  counter2 = 0;
}
function backgroundChange() {
  //background color for the square changes based on the counter, to have a different color every time
  if (counter3 == 0) {
    document.getElementById("square").style.backgroundColor = "red";
    counter3++; //allows it so that a new color is shown every click
  } else if (counter3 == 1) {
    document.getElementById("square").style.backgroundColor = "orange";
    counter3++;
  } else if (counter3 == 2) {
    document.getElementById("square").style.backgroundColor = "yellow";
    counter3++;
  } else if (counter3 == 3) {
    document.getElementById("square").style.backgroundColor = "green";
    counter3++;
  } else if (counter3 == 4) {
    document.getElementById("square").style.backgroundColor = "blue";
    counter3++;
  } else if (counter3 == 5) {
    document.getElementById("square").style.backgroundColor = "black";
    counter3 = 0;
  }
}
function borderChange() {
  //border color for the square changes based on the counter, to have a different color every time
  if (counter4 == 0) {
    document.getElementById("square").style.borderColor = "red";
    counter4++; //allows it so that a new color is shown every click
  } else if (counter4 == 1) {
    document.getElementById("square").style.borderColor = "orange";
    counter4++;
  } else if (counter4 == 2) {
    document.getElementById("square").style.borderColor = "yellow";
    counter4++;
  } else if (counter4 == 3) {
    document.getElementById("square").style.borderColor = "green";
    counter4++;
  } else if (counter4 == 4) {
    document.getElementById("square").style.borderColor = "black";
    counter4++;
  } else if (counter4 == 5) {
    document.getElementById("square").style.borderColor = "blue";
    counter4 = 0;
  }
}
window.onload = begin;
