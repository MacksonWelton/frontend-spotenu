import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import users from "./users";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    users
  });