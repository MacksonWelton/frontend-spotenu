import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from "../HomePage";
import SingupListenerPage from "../SignupListenerPage";
import LoginPage from "../LoginPage";

export const routes = {
  homePage: "/",
  SingupListenerPage: "/signup-listener",
  LoginPage: "/login"
};

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.homePage} component={HomePage} />
        <Route exact path={routes.SingupListenerPage} component={SingupListenerPage} />
        <Route exact path={routes.LoginPage} component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
};
