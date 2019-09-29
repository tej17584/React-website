import React, { Component } from "react";
import ReactDOM from "react-dom";

// eslint-disable-next-line react/prefer-stateless-function
class HeaderMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    window.addEventListener("scroll", this.listentoSCroll);
    return (
      <div className="HeaderMenu">
        <div className="HeaderMenu1">
          <div >
            <a href="https://www.sophosenlinea.com/">
              <img className="HeaderMenu1Img" src="https://www.sophosenlinea.com/wp-content/uploads/2017/11/logo.png"></img>
            </a>
          </div>
          <div className="HeaderMenu2">
            <div className="HeaderMenu2Link" style={{color:"#666"}}>
                Inicio
            </div>
            <div className="HeaderMenu2Link">
                Tienda
            </div>
            <div className="HeaderMenu2Link">
                La Revista
            </div>
            <div className="HeaderMenu2Link">
                Talleres y Clubes
            </div>
            <div className="HeaderMenu2Link">
                Agenda Cultural
            </div>
            <div className="HeaderMenu2Link">
                Contacto
            </div>
            <div className="HeaderMenu2Link">
                Lupa
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderMenu;
