import React, { Component } from "react";

// eslint-disable-next-line react/prefer-stateless-function
class CardEventosImagenes extends Component {
  constructor(props) {
    super(props);
  }

  handleHover() {}
  render() {
    return (
      <div>
        <div className="mainCardEventos">
          <div className="container">
            <img
              onMouseOver={this.handleHover}
              className="imgCardEventos"
              src="https://www.sophosenlinea.com/wp-content/uploads/2019/10/Taller_Mayas-de-4000-años-desmontando-los-mitos-y-el-racismo-web-cuadrado-510x382.jpg"
            ></img>
            <a href="https://www.sophosenlinea.com/project/mayas-4000-anos-desmontando-los-mitos-racismo/">
              <div className="middle">
                <div className="text">
                  <i class="fas fa-plus-circle"></i>
                  <p>Mayas de 4,000 años: desmontando los mitos y el racismo</p>
                </div>
              </div>
            </a>
          </div>

          <div className="container">
            <img
              onMouseOver={this.handleHover}
              className="imgCardEventos"
              src="https://www.sophosenlinea.com/wp-content/uploads/2019/10/Taller_acuarela-2.0-web-cuadrado-510x382.jpg"
            ></img>
            <a href="https://www.sophosenlinea.com/project/acuarela-2-0/">
              <div className="middle">
                <div className="text">
                  <i class="fas fa-plus-circle"></i>
                  <p>Acuarela 2.0</p>
                </div>
              </div>
            </a>
          </div>

          <div className="container">
            <img
              onMouseOver={this.handleHover}
              className="imgCardEventos"
              src="https://www.sophosenlinea.com/wp-content/uploads/2019/09/maridaje-Oktoberfest-artesanal-web-cuadrado-510x382.jpg"
            ></img>
            <a href="https://www.sophosenlinea.com/project/oktoberfest-artesanal-maridaje-cerveza/">
              <div className="middle">
                <div className="text">
                  <i class="fas fa-plus-circle"></i>
                  <p>Oktoberfest artesanal: Maridaje de cerveza</p>
                </div>
              </div>
            </a>
          </div>

          <div className="container">
            <img
              onMouseOver={this.handleHover}
              className="imgCardEventos"
              src="https://www.sophosenlinea.com/wp-content/uploads/2019/09/Curso-de-vacaciones-niños_2019-web-cuadrado-510x382.jpg"
            ></img>
            <a href="https://www.sophosenlinea.com/project/mentes-de-colores-mis-vacaciones-en-sophos/">
              <div className="middle">
                <div className="text">
                  <i class="fas fa-plus-circle"></i>
                  <p>Mentes de colores: Mis vacaciones en SOPHOS</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default CardEventosImagenes;
