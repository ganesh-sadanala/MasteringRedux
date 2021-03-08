import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { addCharacterById } from "./actions";

const store = createStore(rootReducer);
store.subscribe(() => console.log("store", store.getState()));
store.dispatch(addCharacterById(2));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
