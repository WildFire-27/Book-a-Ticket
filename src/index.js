import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from 'react-router-dom';

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  </BrowserRouter>
  ,

  document.getElementById("root")
);

serviceWorker.unregister();
