import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from "../HomePage";
import SingupListenerPage from "../SignupListenerPage";

export const routes = {
  homePage: "/",
  SingupListenerPage: "/signup-listener"
};

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.homePage} component={HomePage} />
        <Route exact path={routes.SingupListenerPage} component={SingupListenerPage} />
      </Switch>
    </BrowserRouter>
  );
};
