import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProtectedAdmRoute } from "../../components/ProtectedAdmRoute";
import { ProtectedUserRoute } from "../../components/ProtectedUserRoute";
import AllBandsPage from "../../containers/AllBandsPage";
import AdmSignupPage from "../AdmSignupPage";
import AddAlbumsPage from "../AddAlbumsPage";
import BandSignupPage from "../BandSignupPage";
import HomePage from "../HomePage";
import ListenerSignupPage from "../ListenerSignupPage";
import LoginPage from "../LoginPage";
import MusicGenrePage from "../MusicGenrePage";
import AddMusicsPage from "../AddMusicsPage";
import PremiumListenerSignupPage from "../PremiumListenerSignupPage";

export const routes = {
  HomePage: "/",
  ListenerSignupPage: "/listener-signup",
  LoginPage: "/login",
  PremiumListenerSignupPage: "/premium-listener-page",
  BandSignupPage: "/signup-band",
  AdmSignupPage: "/adm-signup",
  AllBandsPage: "/all-bands",
  MusicGenrePage: "/add-music-genre",
  AddAlbumsPage: "/add-albums",
  AddMusicsPage: "/add-musics-page"
};

export const CustomRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.HomePage} component={HomePage} />
        <Route exact path={routes.LoginPage} component={LoginPage} />
        <Route exact path={routes.ListenerSignupPage} component={ListenerSignupPage} />
        <Route exact path={routes.PremiumListenerSignupPage} component={PremiumListenerSignupPage} />
        <Route exact path={routes.BandSignupPage} component={BandSignupPage} />
        <Route exact path={routes.AdmSignupPage} component={AdmSignupPage} />

        <ProtectedAdmRoute exact path={routes.AllBandsPage} component={AllBandsPage} />

        <ProtectedUserRoute exact path={routes.MusicGenrePage} component={MusicGenrePage} />
        <ProtectedUserRoute exact path={routes.AddAlbumsPage} component={AddAlbumsPage} />
        <ProtectedUserRoute exact path={routes.AddMusicsPage} component={AddMusicsPage} />
      </Switch>
    </Router>
  );
};
