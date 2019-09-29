import React, { Component } from "react";
import ReactDOM from "react-dom";
import HeaderContacto from "./HeaderContacto.js";
import Footer from "./Footer.js";
import HeaderMenu from "./HeaderMenu.js";

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="navbar" id="navbar">
          <HeaderContacto />
          <HeaderMenu />
        </div>
        <div className="main">
         
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
