import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import HomePage from "../HomePage";
import SingupListenerPage from "../SignupListenerPage";

export const routes = {
  homePage: "/",
  about: "/singup-listener"
};

export const Router = props => {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.homePage} component={HomePage} />
        <Route path={routes.SingupListenerPage} component={SingupListenerPage} />
      </Switch>
    </ConnectedRouter>
  );
};
