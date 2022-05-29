import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import { Provider } from "react-redux";

import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.FADE,
};

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
