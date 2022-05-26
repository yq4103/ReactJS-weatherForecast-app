import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { WeatherSearch } from "./Components/WeatherSearch";
import { BrowserRouter } from "react-router-dom";

import "./Styles/styles.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <WeatherSearch />
    </BrowserRouter>
  </React.StrictMode>
);
