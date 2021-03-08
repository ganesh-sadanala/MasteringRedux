import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(rootReducer);
console.log("store.getState()", store.getState());

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
