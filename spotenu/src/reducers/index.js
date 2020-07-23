import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import users from "./users";
import musics from "./musics";
import playlists from "./playlists";
import genres from "./genres";
import albums from "./albums";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    users, 
    musics,
    playlists,
    genres,
    albums
  });