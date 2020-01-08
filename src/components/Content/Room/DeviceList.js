import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { SwitcherMid } from "../../Devices/SwitcherMid";
import { SwitcherLighting } from "../../Devices/SwitcherLighting";
import { Device } from "../../../constants";

import "./DeviceList.css";

class DeviceList extends Component {
  onOff() {
    axios.post("/rpc/onOff").then(response => {
      console.log(response);
    });
  }

  blink() {
    axios.post("/rpc/blink").then(response => {
      console.log(response);
    });
  }

  renderModel(deviceModel) {
    if (deviceModel == Device.LIGHTING) {
      return <SwitcherLighting onClick={this.onOff} />;
    } else if (deviceModel == Device.MID) {
      return <SwitcherMid onClick={this.blink} />;
    }
    return null;
  }

  render() {
    let { devices } = this.props;
    if (devices && devices.length) {
      return (
        <div className="device-list">
          {devices.map(device => (
            <div key={device.id}>
              <div className="device-list__title">{device.deviceTitel}</div>
              {this.renderModel(device.deviceModel)}
            </div>
          ))}
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state, props) => {
  let { roomId } = props;
  let menu = state.menu.find(item => item.id == roomId);
  console.log(menu.devices);
  return {
    devices: menu.devices
  };
};

export default connect(mapStateToProps)(DeviceList);
