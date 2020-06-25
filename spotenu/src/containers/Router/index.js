import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import HomePage from "../HomePage";
import ListenerSignupPage from "../ListenerSignupPage";
import LoginPage from "../LoginPage";
import BandSignupPage from "../BandSignupPage";
import AdmSignupPage from "../AdmSignupPage";
import PremiumListenerSignupPage from "../PremiumListenerSignupPage";
import AllBandsPage from "../../containers/AllBandsPage";
import {ProtectedRoute }from "../../components/ProtectedRouter";
import MusicGenrePage from "../MusicGenrePage";
import AlbumsPage from "../AlbumsPage";
import MusicsPage from "../MusicsPage";

export const routes = {
  HomePage: "/",
  ListenerSignupPage: "/listener-signup",
  LoginPage: "/login",
  PremiumListenerSignupPage: "/premium-listener-page",
  BandSignupPage: "/signup-band",
  AdmSignupPage: "/adm-signup",
  AllBandsPage: "/all-bands",
  MusicGenrePage: "/add-music-genre",
  AlbumsPage: "/albums",
  MusicsPage: "/MusicsPage"
};

export const CustomRouter = (props) => {
  return (
    <Router history={props.history}>
      <Switch>
        <Route exact path={routes.HomePage} component={HomePage} />
        <Route exact path={routes.LoginPage} component={LoginPage} />
        <Route exact path={routes.ListenerSignupPage} component={ListenerSignupPage} />
        <Route exact path={routes.PremiumListenerSignupPage} component={PremiumListenerSignupPage}/>
        <Route exact path={routes.BandSignupPage} component={BandSignupPage} />
        <Route exact path={routes.AdmSignupPage} component={AdmSignupPage} />

        <ProtectedRoute exact path={routes.AllBandsPage} component={AllBandsPage} />
        <ProtectedRoute exact path={routes.MusicGenrePage} component={MusicGenrePage}/>
        <ProtectedRoute exact path={routes.AlbumsPage} component={AlbumsPage}/>
        <ProtectedRoute exact path={routes.MusicsPage} component={MusicsPage}/>
      </Switch>
    </Router>
  );
};
