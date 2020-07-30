import {CssBaseline, MuiThemeProvider, createGenerateClassName, jssPreset}
    from "@material-ui/core";
import {routerMiddleware} from "connected-react-router";
import {createBrowserHistory} from 'history';
import {create} from "jss";
import React from "react";
import ReactDOM from "react-dom";
import {JssProvider} from "react-jss";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {CustomRouter} from "./containers/Router";
import {generateReducers} from "./reducers";
import theme from "./style/theme";

const history = createBrowserHistory();

const generateClassName = createGenerateClassName();

const jss = create({
  ...jssPreset(),
  insertionPoint: document.getElementById("jss-insertion-point"),
});

jss.options.createGenerateClassName = generateClassName;

const store = createStore(
  generateReducers(history),
  applyMiddleware(routerMiddleware(history), thunk)
);

function App() {
  return (
    <Provider store={store}>
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <CustomRouter />
        </MuiThemeProvider>
      </JssProvider>
    </Provider>
  );
}

const ConnectedApp = App;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ConnectedApp />,
  rootElement
);