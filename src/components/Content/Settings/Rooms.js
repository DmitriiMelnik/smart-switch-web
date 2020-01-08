import React, { Component } from "react";
import { connect } from "react-redux";

import { addRoom, removeRoom } from "../../../store/actions";

import "./Rooms.css";

class Rooms extends Component {
  render() {
    let input;
    let { menu, addRoom, removeRoom } = this.props;
    return (
      <div className="settings-rooms">
        <div className="settings-rooms__header">Room List</div>
        <ul className="settings-rooms__list">
          {menu.map(item => (
            <li key={item.id}>
              <a
                onClick={() => {
                  removeRoom(item.id);
                }}
                className="settings-rooms__close"
              ></a>
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
        <form className="settings-rooms__form"
          onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            addRoom(input.value);
            input.value = "";
          }}
        >
          <input
            placeholder="Room name"
            className="settings-rooms__input"
            ref={node => (input = node)}
          />
          <button className="settings-rooms__submit" type="submit">
            Add Room
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menu: state.menu
});

export default connect(mapStateToProps, { addRoom, removeRoom })(Rooms);
