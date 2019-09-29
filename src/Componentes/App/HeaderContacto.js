import React, { Component } from "react";
import ReactDOM from "react-dom";

// eslint-disable-next-line react/prefer-stateless-function
class HeaderContacto extends Component {
  constructor(props) {
    super(props);
  }

  listentoSCroll() {
    scroll = window.pageYOffset;
    const nav = document.querySelector("#navbar");
    if (scroll == 0) {
      nav.className = "navbar";
    } else {
      nav.className = "navbarScroll";
    }
  }

  render() {
    window.addEventListener("scroll", this.listentoSCroll);
    return (
      <div className="HeaderStaticInfo">
        <div className="HeaderStaticInfo1">
          <div className="HeaderStaticInfo2">
            <i class=" fas fa-phone-alt"></i>
            <div className="HeaderStaticInfoEspacio2">2419-7070</div>
            <div className="HeaderStaticInfoEspacio">
              <a href="https://www.facebook.com/SOPHOSENLINEA/">
                <i class="fab fa-facebook-f"></i>
              </a>
            </div>
            <div className="HeaderStaticInfoEspacio">
              <a href="https://twitter.com/sophosenlinea">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
            <div className="HeaderStaticInfoEspacio">
              <a href="https://www.instagram.com/libreriasophos/">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
            <div className="HeaderStaticInfoEspacio">
              <a href="https://www.pinterest.com/sophoslibros/">
                <i class="fab fa-pinterest-p"></i>
              </a>
            </div>
            <div className="HeaderStaticInfoEspacioDerecha">
              <a href="https://www.sophosenlinea.com/quienes-somos/">
                QUIÉNES SOMOS
              </a>
              <a href="https://www.sophosenlinea.com/lector-empedernido/">
                LECTOR EMPEDERNIDO
              </a>
              <a href="https://www.sophosenlinea.com/sophos-joven/">
                SOPHOS JOVEN
              </a>
              <a href="https://www.sophosenlinea.com/sophos-ninos/">
                SOPHOS NIÑOS
              </a>
              <a href="https://www.sophosenlinea.com/sophos-bistrot-2/">
                BISTROT
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderContacto;
