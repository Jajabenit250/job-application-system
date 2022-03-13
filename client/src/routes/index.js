import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../views/Dashboard";


export default class index extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Dashboard} />
      </Switch>
    );
  }
}
