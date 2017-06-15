// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";
// Including our Panel and Container components
import Navbar from "./common/Navbar";
// very basic component to get started
const Main = (props) => (
  <div>
    <Navbar />
     {props.children}
  </div>
);
export default Main;