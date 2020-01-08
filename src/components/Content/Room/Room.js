import React, { Component } from "react";
import DeviceAdd from "./DeviceAdd";
import DeviceList from "./DeviceList";

class Room extends Component {
  render() {
    let roomId = this.props.match.params.id;
    return (
      <>
        <DeviceAdd roomId={roomId} />
        <DeviceList roomId={roomId} />
      </>
    );
  }
}

export default Room;
