import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from "../HomePage";
import SingupListenerPage from "../SignupListenerPage";
import LoginPage from "../LoginPage";
import SignupBandPage from "../SignupBandPage";
import SignupAdmPage from "../SignupAdmPage";
import SignupPremiumListenerPage from "../SignupPremiumListenerPage";
import AllBandsPage from "../../containers/AllBandsPage";
import {ProtectedRoute }from "../../components/ProtectedRouter";
import MusicGenrePage from "../MusicGenrePage";
import AlbumsPage from "../AlbumsPage";

export const routes = {
  homePage: "/",
  SingupListenerPage: "/signup-listener",
  LoginPage: "/login",
  SignupPremiumListenerPage: "/signup-listener-premium",
  SignupBandPage: "/signup-band",
  SignupAdmPage: "/signup-adm",
  AllBandsPage: "/all-bands",
  MusicGenrePage: "/add-music-genre",
  AlbumsPage: "/albums"
};

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.homePage} component={HomePage} />
        <Route exact path={routes.LoginPage} component={LoginPage} />
        <Route exact path={routes.SingupListenerPage} component={SingupListenerPage} />
        <Route exact path={routes.SignupPremiumListenerPage} component={SignupPremiumListenerPage}/>
        <Route exact path={routes.SignupBandPage} component={SignupBandPage} />
        <Route exact path={routes.SignupAdmPage} component={SignupAdmPage} />

        <ProtectedRoute exact path={routes.AllBandsPage} component={AllBandsPage} />
        <ProtectedRoute exact path={routes.MusicGenrePage} component={MusicGenrePage}/>
        <ProtectedRoute exact path={routes.AlbumsPage} component={AlbumsPage}/>
      </Switch>
    </BrowserRouter>
  );
};
