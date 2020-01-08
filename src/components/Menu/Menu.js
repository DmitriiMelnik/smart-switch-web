import React, { Component } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { connect } from "react-redux";

import { MenuState, MenuType } from "../../constants";
import "./Menu.css";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: null,
      selectId: null
    };
  }

  selectItem(type, id = null) {
    this.setState({ select: type, selectId: id });
  }

  renderHeader(name) {
    return (
      <div className="menu__header">
        <a className="menu__header-link" href="#">
          {name}
        </a>
      </div>
    );
  }

  renderItems() {
    let { menu } = this.props;
    return (
      <ul className="menu__nav">
        {menu.map((item, index) => {
          let { id, name, type } = item;
          let { select, selectId } = this.state;

          let linkToItem = "/room/" + id;
          let itemClass = classNames("menu__nav-item", {
            "menu__nav-item--select": select == type && id == selectId,
            "menu__nav-item--section": type == MenuType.SECTION
          });

          return (
            <li
              key={index}
              className={itemClass}
              onClick={() => {
                this.selectItem(type, id);
              }}
            >
              <Link to={linkToItem}>{name}</Link>
            </li>
          );
        })}
      </ul>
    );
  }

  renderSettings() {
    let { select, selectId } = this.state;
    let itemClass = classNames("menu__nav-item", 'menu__settings', {
      "menu__nav-item--select": select == MenuType.SETTINGS,
    });
    return (
      <div
        className={itemClass}
        onClick={() => this.selectItem(MenuType.SETTINGS)}
      >
        <Link to="/settings">Settings</Link>
      </div>
    );
  }

  render() {
    return (
      <div className="menu">
        {this.renderHeader("React")}
        {this.renderItems()}
        {this.renderSettings()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menu: state.menu
});

export default connect(mapStateToProps)(Menu);
