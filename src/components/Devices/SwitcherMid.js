import React, { Component } from "react";

import "./SwitcherMid.css";

class SwitcherMid extends Component {

  constructor(props){
    super(props);
    this.state={
      doubleClick: false
    }
  }

  fixDoubleClick(onClick) {

    if (!this.state.doubleClick) {

    console.log(this.state.doubleClick)
      this.setState({ doubleClick: true });
      setTimeout(() => {
        onClick();
        this.setState({ doubleClick: false });
      }, 200);
    }
  }

  render() {
    let { onClick } = this.props;
    return (
      <div onClick={()=>this.fixDoubleClick(onClick)} className="mid">
        <label className="rocker">
          <input type="checkbox" />
          <span className="switch-left">On</span>
          <span className="switch-right">Off</span>
        </label>
      </div>
    );
  }
}

export { SwitcherMid };
