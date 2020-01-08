import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { Settings } from "./Settings";
import { Room } from './Room'
import "./Content.css";

function TestComponent(props) {
  return (
    <div>
      content
    </div>
  );
}

function TestNoComponent(props) {
  return <h1>No Content</h1>;
}

class Content extends Component {
  render() {
    return (
      <div id="content">
        <Switch>
          <Route exact path="/room/:id" component={Room} />
          <Route exact path="/settings" component={Settings} />
          <Route component={TestNoComponent} />
        </Switch>
      </div>
    );
  }
}

export { Content };
