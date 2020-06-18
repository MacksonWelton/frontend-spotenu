import ReactDOM from "react-dom";
import React from "react";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import { Provider } from "react-redux";
import { generateReducers } from "./reducers";
import { Router } from "./containers/Router";

const history = createBrowserHistory();

const store = createStore(
  generateReducers(history),
  applyMiddleware(routerMiddleware(history))
);

function App() {
  return (
    <Provider store={store}>
      <Router history={history} />
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