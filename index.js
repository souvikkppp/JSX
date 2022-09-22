import React from "react";
import ReactDOM from "react-dom";

const name = "soovik";
const title = "kundu";
const no = 50;

ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>My lucky no is {name+" "+title}</p>
  </div>,
  document.getElementById("root")
);

//alternate
//<p>My lucky no is {name} {title}</p>
