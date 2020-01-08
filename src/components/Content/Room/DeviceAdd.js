import React, { Component } from "react";
import { connect } from "react-redux";

import { Popup } from "./Popup";

import { SwitcherMid } from "../../Devices/SwitcherMid";
import { SwitcherLighting } from "../../Devices/SwitcherLighting";
import { Device } from "../../../constants";
import { addDevice } from "../../../store/actions";

import "./DeviceAdd.css";

class DeviceAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopupDevices: false
    };
    this.hidePopupDevices = this.hidePopupDevices.bind(this);
    this.hidePopupSettings = this.hidePopupSettings.bind(this);
  }

  showPopupDevices() {
    this.setState({ showPopupDevices: true });
  }

  hidePopupDevices() {
    this.setState({ showPopupDevices: false });
  }

  showPopupSettings() {
    this.setState({ showPopupSettings: true });
  }

  hidePopupSettings() {
    this.setState({ showPopupSettings: false });
  }

  selectDevice(device) {
    this.setState({ device }, () => {
      this.hidePopupDevices();
      this.showPopupSettings();
    });
  }

  renderPopupDevices() {
    let { showPopupDevices } = this.state;
    if (showPopupDevices) {
      return (
        <Popup close={this.hidePopupDevices} header="Select model">
          <div className="device-list">
            <div onClick={() => this.selectDevice(Device.MID)}>
              <SwitcherMid />
            </div>
            <div onClick={() => this.selectDevice(Device.LIGHTING)}>
              <SwitcherLighting />
            </div>
          </div>
        </Popup>
      );
    } else {
      return null;
    }
  }

  renderPopupSettings() {
    let { addDevice, roomId } = this.props;
    let { showPopupSettings } = this.state;
    let inputTitel;
    let inputName;
    let inputFunction; 
    if (showPopupSettings) {
      return (
        <Popup close={this.hidePopupSettings} header="Settings device">
          <form
            onSubmit={e => {
              e.preventDefault();
              addDevice(roomId,inputTitel.value,this.state.device,inputName.value, inputFunction.value)            
              this.hidePopupSettings();
            }}
          >
            <div className="device-settings__titel">
              <label>Insert title</label>
              <input ref={node => (inputTitel = node)} className="device-settings__input" />
            </div>
            <div className="device-settings">
              <div>
                <label>Select device</label>
                <select ref={node => (inputName = node)} className="select">
                  <option>-</option>
                  <option>MongooseOS-67149</option>
                </select>
              </div>
              <div>
                <label>Select function</label>
                <select ref={node => (inputFunction = node)} className="select">
                  <option>-</option>
                  <option>On/Off</option>
                  <option>blink</option>
                </select>
              </div>
            </div>
            <div className="device-settings__submit-container">
              <button className="device-settings__submit" type="submit">
                Add Device
              </button>
            </div>
          </form>
        </Popup>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        {this.renderPopupDevices()}
        {this.renderPopupSettings()}
        <button
          onClick={() => this.showPopupDevices()}
          className="plus-button plus-button--large"
        ></button>
      </div>
    );
  }
}

export default connect(null, { addDevice })(DeviceAdd);
