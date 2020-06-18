import ReactDOM from "react-dom";
import React from "react";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware } from "redux";
import {
  MuiThemeProvider,
  createGenerateClassName,
  jssPreset,
  CssBaseline
} from "@material-ui/core";
import {JssProvider} from "react-jss";
import { create } from "jss";
import theme from "./style/theme";
import { routerMiddleware } from "connected-react-router";
import { Provider } from "react-redux";
import { generateReducers } from "./reducers";
import { Router } from "./containers/Router";

const history = createBrowserHistory();

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  insertionPoint: document.getElementById("jss-insertion-point")
});

const store = createStore(
  generateReducers(history),
  applyMiddleware(routerMiddleware(history))
);

function App() {
  return (
    <Provider store={store}>
    <JssProvider jss={jss} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router history={history} />
      </MuiThemeProvider>
    </JssProvider>
  </Provider>
  );
}

const ConnectedApp = App;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  rootElement
);