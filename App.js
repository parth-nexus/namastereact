import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Title = () => (
  <img
    src="https://drive.google.com/file/d/1WB9v6IVMhTueGGgZnse6FWmFIrQqfBTq/view"
    alt="logo file villa"
  ></img>
);

const Heading = () => {
  return (
    <div className="header">
      <div>
        <Title />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
