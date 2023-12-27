import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  { id: "title", key: "h1" },
  "heading1"
);
const heading2 = React.createElement(
  "h2",
  { id: "title", key: "h2" },
  "heading2"
);

console.log(heading);
const Heading3=()=>(
    <h1 id="heading3" key={"h3"}>
        Nameste React
      </h1>
)

const HeaderComponent = () => {
  return (
    <div>
    <Heading3/>
      <h2 id="newHeading" key={"hn"}>
        Inside React Element
      </h2>
    </div>
  );
};

// const container=React.createElement("div",{id:"container",key:"c1"},[heading,heading2]);
// const container2=React.createElement("span",{id:"container",key:"c2"},[heading3]);

// const mainChild=React.createElement("div",{id:"mainChild"},[container,container2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
