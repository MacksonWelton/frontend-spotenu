import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from "../HomePage";
import SingupListenerPage from "../SignupListenerPage";
import LoginPage from "../LoginPage";
import SignupBandPage from "../SignupBandPage";

export const routes = {
  homePage: "/",
  SingupListenerPage: "/signup-listener",
  LoginPage: "/login",
  SignupListenerPremiumPage: "/signup-listener-premium",
  SignupBandPage: "/band-signup"
};

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.homePage} component={HomePage} />
        <Route exact path={routes.LoginPage} component={LoginPage} />
        <Route exact path={routes.SingupListenerPage} component={SingupListenerPage} />
        <Route exact path={routes.SignupListenerPremiumPage} />
        <Route exact path={routes.SignupBandPage} component={SignupBandPage} />
      </Switch>
    </BrowserRouter>
  );
};
