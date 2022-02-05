/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "tw-elements";
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
  <React.Fragment>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </React.Fragment>,
  document.getElementById("root")
);
reportWebVitals();
