const heading = React.createElement(
  "div",
  {},
  React.createElement("div", {}, [
    React.createElement(
      "div",
      {},
      React.createElement("div", {}, [
        React.createElement("h1", {}, "1:h1"),
        React.createElement("h2", {}, "1:h2"),
      ])
    ),
    React.createElement(
      "div",
      {},
      React.createElement("div", {}, [
        React.createElement("h1", {}, "1:h1"),
        React.createElement("h2", {}, "1:h2"),
      ])
    ),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
