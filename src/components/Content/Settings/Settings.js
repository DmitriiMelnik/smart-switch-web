import React, { Component } from "react";
import Rooms from './Rooms';

import './Settings.css';

class Settings extends Component {
  render() {
    return (
      <div id='settings'>
        <Rooms/>
      </div>
    );
  }
}

export { Settings };
