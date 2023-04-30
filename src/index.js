import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// redux imports
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

// redux thunk imports
import thunkMiddleware from "redux-thunk";

// redux devtools import
import { composeWithDevTools } from "redux-devtools-extension";

// reducer imports
import rootReducer from "./reducer";

// devtools function
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, composedEnhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);