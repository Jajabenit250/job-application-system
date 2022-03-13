import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import IdleTimer from "react-idle-timer";
import Routes from "./routes";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeout: 1000 * 150 * 1,
      userLoggedIn: false,
      isTimedOut: false,
    };

    this.idleTimer = null;
  }
  render() {
    return (
      <>
        <IdleTimer
          ref={(ref) => {
            this.idleTimer = ref;
          }}
          element={document}
          onActive={this.onActive}
          onIdle={this.onIdle}
          onAction={this.onAction}
          timeout={this.state.timeout}
        />
        <Router>
          <Routes />
        </Router>
      </>
    );
  }
}

export default App;
