import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CurrentUserProvider } from "./Component/CurrentUserContext";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <CurrentUserProvider>
    <App />
  </CurrentUserProvider>,
  rootElement
);
