import React, { Component } from "react";
import { Menu } from "./Menu";
import { Content } from './Content'

import "./reset.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="app">
        <Menu />
        <Content/>
      </div>
    );
  }
}


export default App;
