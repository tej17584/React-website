import React, { Component } from "react";
import ReactDOM from "react-dom";

// eslint-disable-next-line react/prefer-stateless-function
class HeaderMenu extends Component {
  constructor(props) {
    super(props);
  }
  listentoSCroll() {
    scroll = window.pageYOffset;
    const nav = document.getElementById("HeaderMenu");
    if (scroll == 0) {
      nav.className = "HeaderMenu";
    } else {
      nav.className = "HeaderMenuScroll";
    }
  }

  render() {
    window.addEventListener("scroll", this.listentoSCroll);
    return (
      <div>
        <div className="HeaderMenu1">
          <div>
            <a href="https://www.sophosenlinea.com/">
              <img
                className="HeaderMenu1Img"
                src="https://www.sophosenlinea.com/wp-content/uploads/2017/11/logo.png"
              ></img>
            </a>
          </div>
          <div className="HeaderMenu2">
            <div className="HeaderMenu2Link">
              <a
                href="https://www.sophosenlinea.com/"
                style={{ color: "#666" }}
              >
                Inicio
              </a>
            </div>
            <div className="HeaderMenu2Link">
              <a href="https://tienda.sophosenlinea.com/index.php">
                <p>Tienda</p>
              </a>
            </div>
            <div className="HeaderMenu2Link">
              <a href="https://www.sophosenlinea.com/blog/">
                <p>La tienda</p>
              </a>
            </div>
            <div className="HeaderMenu2Link">
              <a>
                <p>La revista</p>
              </a>
            </div>
            <div className="HeaderMenu2Link">
              <a href="https://www.sophosenlinea.com/agenda-cultural/">
                <p>Agenda Cultural</p>
              </a>
            </div>
            <div className="HeaderMenu2Link">
              <a href="https://www.sophosenlinea.com/contacto/">
                <p>Contacto</p>
              </a>
            </div>
            <div className="HeaderMenu2Link">
              <i class="fas fa-search"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderMenu;
