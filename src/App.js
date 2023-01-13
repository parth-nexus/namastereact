import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Heading from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

//main layout
const AppLayout = () => {
  return (
    <>
      <Heading />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
