import React, { Component } from "react";
import ReactDOM from "react-dom";
import HeaderContacto from "./HeaderContacto.js";
import Footer from "./Footer.js";
import HeaderMenu from "./HeaderMenu.js";
import CardsEventosImagenes from "./CardsEventosImagenes.js";
import CardsEventoTexto from "./CardEventoTexto.js";


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
          <div className="HeaderMenu" id="HeaderMenu">
            <HeaderMenu />
          </div>
        </div>

        <div className="main">
          <CardsEventosImagenes />
          <CardsEventoTexto/>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
