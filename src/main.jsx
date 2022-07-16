import React from "react";
import ReactDOM from "react-dom/client";

import "moment/locale/es-mx";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import "font-awesome/css/font-awesome.css";

import "animate.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
