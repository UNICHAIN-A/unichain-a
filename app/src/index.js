import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/store";

import "./index.css";
//import App from "./containers/AppContainer";
import Stud from "./containers/StudentContainer";

import registerServiceWorker from "./registerServiceWorker";
/*
ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
*/
ReactDOM.render(
  <Provider store={configureStore()}>
    <Stud />
  </Provider>,
  document.getElementById("student")
);
registerServiceWorker();
