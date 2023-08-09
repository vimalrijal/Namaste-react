import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "div",
  { id: "outer-div" },
  React.createElement("div", { id: "inner-div" }, [
    React.createElement(
      "div",
      { id: "child1" },
      React.createElement("div", { id: "child3" }, [
        React.createElement("h1", { id: "h1" }, "1:h1"),
        React.createElement("h2", { id: "h2" }, "1:h2"),
      ])
    ),
    React.createElement(
      "div",
      { id: "child2" },
      React.createElement("div", { id: "child4" }, [
        React.createElement("h1", { id: "h3" }, "1:h1"),
        React.createElement("h2", { id: "h4" }, "1:h2"),
      ])
    ),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
