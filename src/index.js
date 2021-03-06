import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
//import { createLogger } from "redux-logger";
import rootReducer from "./reducers";
import App from "./App";
import "./styles.css";

const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  //middleware.push(createLogger());
}

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
