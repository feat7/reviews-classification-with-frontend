import React, { Component } from "react";
import { render } from "react-dom";
import { Router } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";
import { Provider } from "mobx-react";
import ScrollToTop from "./utils/scroll";
import MainRoutes from "./routes/MainRoutes";
import store from "./stores";
import * as serviceWorker from "./serviceWorker";

import "./styles/main.css";

const browserHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <ScrollToTop>
            <MainRoutes />
          </ScrollToTop>
        </Router>
      </Provider>
    );
  }
}

render(<App />, document.getElementById("root"));
serviceWorker.register();
