import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { fetchMemes } from "./actions";
import App from "./components/App";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => console.log("store", store.getState()));
store.dispatch(fetchMemes());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
