import React, { Component } from "react";

import './Popup.css'
class Popup extends Component {
  render() {
    let { header, children, close } = this.props;
    return (
      <div className="popup__overlay">
        <div className="popup">
          <h2 className="popup__header">{header}</h2>
          <a onClick={() => close()} className="popup__close" >
            &times;
          </a>
          <div className="popup__content">{children}</div>
        </div>
      </div>
    );
  }
}

export { Popup };
