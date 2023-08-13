import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom/client";

// CORE REACT CREACT ELEMENT => IT IS VERY HARD TO UNDERSTAND OR NOT DEVELOPER FRIENDLY THAT WHY FACEBOOK DEVELOPER
// CREATED THE JSX
const heading = React.createElement(
  "h2",
  { id: "heading2" },
  "this is a H2 element"
);

const fnHeading = () => <h1>vimal</h1>;

const Title = () => (
  <div>
    <h1>this is a titleDDSS</h1>
  </div>
);

const HeadingComponent = () => (
  <div>
    {Title()}
    <Title />
    <Title></Title>
    <h1>this is a heading component </h1>
  </div>
);
// THIS IS JSX CREATE ELEMENT
// normal html is not same as jsx element but it is like html
const root = ReactDOM.createRoot(document.getElementById("root"));

const headingJSX = <h1 id="jsx-heading">this is created by jsx </h1>;

// root.render(heading); // this is rendering the core react create element
// root.render(headingJSX); // this is rendering the JSX element

root.render(<HeadingComponent />);
