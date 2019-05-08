import React from "react";
import { Route, Switch } from "react-router";
import Home from "../containers/Home";

const MainRoutes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </React.Fragment>
  );
};

export default MainRoutes;
