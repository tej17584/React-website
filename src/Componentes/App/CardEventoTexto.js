import React, { Component } from "react";
import ReactDOM from "react-dom";

// eslint-disable-next-line react/prefer-stateless-function
class CardsEventoTexto extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="flex-container">
          <div>
            <div className="card">
              <img
                className="imgCard"
                src="https://www.sophosenlinea.com/wp-content/uploads/2019/09/Resen%CC%83a-A-sangre-fria--400x250.png"
              ></img>
              <div className="containerCard">
                <a
                  style={{ textDecoration: "none", color: "#666" }}
                  href="https://www.sophosenlinea.com/2019/09/21/libreros-recomiendan-sangre-fria/"
                >
                  {" "}
                  <p style={{ fontWeight: "bolder" }}>
                    Nuestros libreros recomiendan: A sangre fría
                  </p>
                </a>
                <p>
                  por Jesse Reneau | Sep 21, 2019 | Destacados, La revista,
                  Libros, Reseñas | 0 Comments
                </p>
                A sangre fría documenta el asesinato de los Clutter, la familia
                más querida del pueblo de Holcomb, en Kansas, en el año 1959.
                Compuesta por Herbert, Bonnie y sus 4 hijos, se trataba de una
                familia ejemplar: tenían una buena reputación, eran bondadosos,
                asistían todos...
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="card">
              <img
                className="imgCard"
                src="https://www.sophosenlinea.com/wp-content/uploads/2019/09/evento-rolling-stones-1-1-400x250.jpg"
              ></img>
              <div className="containerCard">
                <a
                  style={{ textDecoration: "none", color: "#666" }}
                  href="https://www.sophosenlinea.com/2019/09/09/cuando-los-rolling-stones-llegaron-la-habana-la-nueva-novela-carol-zardetto/"
                >
                  {" "}
                  <p style={{ fontWeight: "bolder" }}>
                    Cuando los Rolling Stones llegaron a La Habana: cine y
                    Utopías
                  </p>
                </a>
                <p>
                  por Vanessa Núñez Handal | Sep 9, 2019 | Destacados, La
                  revista, Reseñas | 0 Comments
                </p>
                Carol Zardetto, abogada, escritora y guionista guatemalteca, ha
                presentado su tercera novela. Se trata de una obra más corta que
                sus anteriores, pero intensa, llena de historia, cine y
                reflexiones agudas sobre la cultura, los imaginarios de una
                época importante para...
              </div>
            </div>
          </div>
          <div>
            <div className="card">
              <img
                className="imgCard"
                src="https://www.sophosenlinea.com/wp-content/uploads/2019/09/DSC_0618-1-400x250.jpg"
              ></img>
              <div className="containerCard">
                <a
                  style={{ textDecoration: "none", color: "#666" }}
                  href="https://www.sophosenlinea.com/2019/09/18/margarita-esta-linda-la-mar/"
                >
                  {" "}
                  <p style={{ fontWeight: "bolder" }}>
                    Margarita, está linda la mar
                  </p>
                </a>
                <p>
                  por Mateo Echeverría | Sep 18, 2019 | Destacados, La revista,
                  Reseñas | 0 Comments
                </p>
                A las seis y media de la tarde hicimos cita los lectores para
                inaugurar nuestra conversación sobre Margarita, está linda la
                mar del afamado escritor Sergio Ramírez. Ha sido la novela de
                arranque, el pistoletazo de salida, con la que marcamos la ruta
                del Club de...
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="card">
              <img
                className="imgCard"
                src="https://www.sophosenlinea.com/wp-content/uploads/2019/08/Carbon-animal-400x250.png"
              ></img>
              <div className="containerCard">
                <a
                  style={{ textDecoration: "none", color: "#666" }}
                  href="https://www.sophosenlinea.com/2019/08/23/resena-carbon-animal/"
                >
                  {" "}
                  <p style={{ fontWeight: "bolder" }}>Carbón Animal</p>
                </a>
                <p>
                  por Solivan Guillén | Ago 23, 2019 | Destacados, La revista,
                  Leer, Libros, Reseñas | 0 Comments
                </p>
                Nos limitamos a quitarnos de encima el muerto (el cuerpo
                yacente, aquello que había sido y ahora no sabíamos qué era),
                como hace todo el mundo. Como harán conmigo. Cuando muere
                alguien, nuestra obsesión es borrar el cadáver del mapa.
                Extinguir el cuerpo. Ordesa,...
              </div>
            </div>
          </div>
          <div>
            <div className="proximosEventos">
                 <p>Próximos Eventos</p>
                 <p>No hay próximos eventos actualmente.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardsEventoTexto;
