import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Alerts from "../../components/Alerts";
import { ProtectedAdmRoute } from "../../components/ProtectedAdmRoute";
import { ProtectedUserRoute } from "../../components/ProtectedUserRoute";
import AllBandsPage from "../../containers/AllBandsPage";
import AdmSignupPage from "../AdmSignupPage";
import AlbumsPage from "../AlbumsPage";
import AllListenersPage from "../AllListenersPage";
import BandSignupPage from "../BandSignupPage";
import CollaborativePlaylists from "../CollaborativePlaylists";
import EditUserPage from "../EditUserPage";
import HomePage from "../HomePage";
import ListenerSignupPage from "../ListenerSignupPage";
import LoginPage from "../LoginPage";
import MusicDetailsPage from "../MusicDetailsPage";
import MusicGenrePage from "../MusicGenrePage";
import MusicsPage from "../MusicsPage";
import PlaylistMusicsPage from "../PlaylistMusicsPage";
import PlaylistsPage from "../PlaylistsPage";
import PremiumListenerSignupPage from "../PremiumListenerSignupPage";
import SearchPage from "../SearchPage";

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
  PlaylistMusicsPage: "/musics-by-playlist",
  SearchPage: "/search",
  AllListenersPage: "/listeners",
  MusicDetailsPage: "/music-details",
  CollaborativePlaylists: "/collaborative-playlists",
  EditUserPage: "/edit-user"
};

export const CustomRouter = () => {

  const alert = useSelector((state) => state.alerts.alert);

  return (
    <Router>
      {alert.open && <Alerts open={alert.open} type={alert.type} message={alert.message} />}
      <Switch>
        <Route exact path={routes.HomePage} component={HomePage} />
        <Route exact path={routes.LoginPage} component={LoginPage} />
        <Route exact path={routes.ListenerSignupPage} component={ListenerSignupPage} />
        <Route exact path={routes.PremiumListenerSignupPage} component={PremiumListenerSignupPage} />
        <Route exact path={routes.BandSignupPage} component={BandSignupPage} />
        <Route exact path={routes.AdmSignupPage} component={AdmSignupPage} />

        <ProtectedAdmRoute exact path={routes.AllBandsPage} component={AllBandsPage} />
        <ProtectedAdmRoute exact path={routes.AllListenersPage} component={AllListenersPage} />

        <ProtectedUserRoute exact path={routes.MusicGenrePage} component={MusicGenrePage} />
        <ProtectedUserRoute exact path={routes.AlbumsPage} component={AlbumsPage} />
        <ProtectedUserRoute exact path={routes.MusicsPage} component={MusicsPage} />
        <ProtectedUserRoute exact path={routes.PlaylistsPage} component={PlaylistsPage} />
        <ProtectedUserRoute exact path={routes.PlaylistMusicsPage} component={PlaylistMusicsPage} />
        <ProtectedUserRoute exact path={routes.SearchPage} component={SearchPage} />
        <ProtectedUserRoute exact path={routes.MusicDetailsPage} component={MusicDetailsPage} />
        <ProtectedUserRoute exact path={routes.CollaborativePlaylists} component={CollaborativePlaylists} />
        <ProtectedUserRoute exact path={routes.EditUserPage} component={EditUserPage} />
      </Switch>
    </Router>
  );
};
