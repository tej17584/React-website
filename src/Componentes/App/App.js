import React, { Component } from "react";
import ReactDOM from "react-dom";
import HeaderContacto from './HeaderContacto.js';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <HeaderContacto/>
      </div>
    );
  }
}

export default App;
