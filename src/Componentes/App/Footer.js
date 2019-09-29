import React, { Component } from "react";
import ReactDOM from "react-dom";

// eslint-disable-next-line react/prefer-stateless-function
class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainFooter">
        <div className="mainFooterContainer">
          <div className="Footer1">
            <img
              className="Footer1_img"
              src="https://www.sophosenlinea.com/wp-content/uploads/2017/11/sophos-logo.png"
            ></img>

            <div className="Footer1_2">
              <a href="https://www.facebook.com/SOPHOSENLINEA/">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/sophosenlinea">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://www.pinterest.com/sophoslibros/">
                <i class="fab fa-pinterest-p"></i>
              </a>
              <a href="https://plus.google.com/+SOPHOSlibros">
                <i class="fab fa-google-plus-g"></i>
              </a>
              <a href="https://www.linkedin.com/company/sophos-librer%C3%ADa/">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.instagram.com/libreriasophos/">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="Footer2">
            <p>Contacto</p>
            <ul className="Footer2_Ul">
              <li>
                <a href="https://www.sophosenlinea.com/quienes-somos/">
                  Quiénes somos
                </a>
              </li>
              <li>
                <a href="https://www.sophosenlinea.com/contacto/">
                  Contáctenos
                </a>
              </li>
              <li>
                <a href="https://www.sophosenlinea.com/sophos-en-los-medios/">
                  Medios
                </a>
              </li>
            </ul>
          </div>
          <div className="Footer3">
            <p>Atención al cliente</p>
            <ul className="Footer3_Ul">
              <li>
                <a href="https://www.sophosenlinea.com/atencion-a-bibliotecas-universidades-centros-de-ensen%cc%83anza-y-documentacion/">
                  Atención a bibliotecas, universidades, centros de enseñanza y
                  documentación.
                </a>
              </li>
              <li>
                <a href="https://www.sophosenlinea.com/suscribete-al-boletin/">
                  Suscríbase al boletín.
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mainFotterBottom">
          <div className="mainFotterBottom1">
            <p>
              Desarrollado por:{" "}
              <a href="http://pragawebstudio.com">Praga Web Studio.</a> | Tienda
              en línea:{" "}
              <a href="http://www.weblibrerias.com">Grupo Trevenque</a>
            </p>
          </div>
          <div className="mainFotterBottom2">
            <a href="https://www.facebook.com/SOPHOSENLINEA/">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/sophosenlinea">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/libreriasophos/">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.pinterest.com/sophoslibros/">
              <i class="fab fa-pinterest-p"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
