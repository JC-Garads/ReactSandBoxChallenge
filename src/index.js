import React from "react";
import ReactDOM from "react-dom";

const time = new Date().getHours();
var greetings = "";
const customStyle = {
  color: ""
};
if (time >= 0 && time < 12) {
  greetings = "morning";
  customStyle.color = "red";
} else if (time >= 12 && time < 18) {
  greetings = "afternoon";
  customStyle.color = "green";
} else {
  greetings = "evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 style={customStyle} className="heading">
    Good {greetings}
  </h1>,
  document.getElementById("root")
);

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
