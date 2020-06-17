import ReactDOM from "react-dom";
import React from "react";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import { Provider } from "react-redux";
import { generateReducers } from "./reducers";
import { Router } from "./containers/Router";

const history = createBrowserHistory();

const middlewares = [
  applyMiddleware(routerMiddleware(history), thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
];

const store = createStore(generateReducers(history), compose(...middlewares));

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