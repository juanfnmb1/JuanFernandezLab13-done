function begin() {
  counter1 = 0;
  counter2 = 0;
  counter3 = 0;
  counter4 = 0;
  var button = document.getElementById("boldText");
  var button2 = document.getElementById("italics");
  var button3 = document.getElementById("backgroundColor");
  var button4 = document.getElementById("backgroundColor2");
  button.onclick = boldText;
  button2.onclick = italicText;
  button3.onclick = backgroundChange;
  button4.onclick = borderChange;
}
function boldText() {
  var div1 = document.getElementById("section1");
  document.getElementById("paragraph1").style.fontWeight = "bold";
  if ((counter1 == 0) & (counter2 == 0)) {
    var newButton = document.createElement("button");
    newButton.id = "newButton";
    var buttonText = document.createTextNode("Return to normal state");
    newButton.append(buttonText);
    div1.appendChild(newButton);
    counter1 = 1;
  }
  newButton.onclick = return1;
}
function italicText() {
  var div1 = document.getElementById("section1");
  document.getElementById("paragraph1").style.fontStyle = "italic";
  if ((counter2 == 0) & (counter1 == 0)) {
    var newButton = document.createElement("button");
    newButton.id = "newButton";
    var buttonText = document.createTextNode("Return to normal state");
    newButton.append(buttonText);
    div1.appendChild(newButton);
    counter2 = 1;
  }
  newButton.onclick = return1;
}

function return1() {
  document.getElementById("paragraph1").style.fontWeight = "normal";
  document.getElementById("paragraph1").style.fontStyle = "normal";
  var newButton = document.getElementById("newButton");
  newButton.remove();
  counter1 = 0;
  counter2 = 0;
}
function backgroundChange() {
  if (counter3 == 0) {
    document.getElementById("square").style.backgroundColor = "red";
    counter3++;
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
  if (counter4 == 0) {
    document.getElementById("square").style.borderColor = "red";
    counter4++;
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
