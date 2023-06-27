import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { store } from "@infrastructure";
import { launchConfigHandler } from "@shared-frontend";
import { Provider } from "react-redux";

launchConfigHandler(store);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
