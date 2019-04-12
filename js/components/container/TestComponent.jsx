import React, { Component } from "react";
import ReactDOM from "react-dom";

class TestComponent extends Component {
  render() {
    return (
      <h1>Hi! I am TestComponent</h1>
      );
    }
  }
  export default TestComponent;
  
  const wrapper = document.getElementById("app");
  wrapper ? ReactDOM.render(<TestComponent />, wrapper) : false;