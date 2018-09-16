import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./configureStore";
import AppConnect from "./containers/App.connect";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppConnect />
  </Provider>,
  document.getElementById("app") as HTMLElement
);
