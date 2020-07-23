import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProtectedAdmRoute } from "../../components/ProtectedAdmRoute";
import { ProtectedUserRoute } from "../../components/ProtectedUserRoute";
import AllBandsPage from "../../containers/AllBandsPage";
import AdmSignupPage from "../AdmSignupPage";
import AlbumsPage from "../AlbumsPage";
import BandSignupPage from "../BandSignupPage";
import HomePage from "../HomePage";
import ListenerSignupPage from "../ListenerSignupPage";
import LoginPage from "../LoginPage";
import MusicGenrePage from "../MusicGenrePage";
import MusicsPage from "../MusicsPage";
import PremiumListenerSignupPage from "../PremiumListenerSignupPage";
import SearchPage from "../SearchPage";
import PlaylistsPage from "../PlayListsPage";
import AllListenersPage from "../AllListenersPage";
import MusicDetailsPage from "../MusicDetailsPage";

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
  MusicsPage: "/musics",
  PlaylistsPage: "/playlists",
  SearchPage: "/search",
  AllListenersPage: "/listeners",
  MusicDetailsPage: "/music-details"
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
        <ProtectedUserRoute exact path={routes.AlbumsPage} component={AlbumsPage} />
        <ProtectedUserRoute exact path={routes.MusicsPage} component={MusicsPage} />
        <ProtectedUserRoute exact path={routes.PlaylistsPage} component={PlaylistsPage} />
        <ProtectedUserRoute exact path={routes.SearchPage} component={SearchPage} />
        <ProtectedUserRoute exact path={routes.AllListenersPage} component={AllListenersPage} />
        <ProtectedUserRoute exact path={routes.MusicDetailsPage} component={MusicDetailsPage} />
      </Switch>
    </Router>
  );
};
