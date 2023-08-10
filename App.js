import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h2",
  { id: "heading2" },
  "this is a H2 element"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
