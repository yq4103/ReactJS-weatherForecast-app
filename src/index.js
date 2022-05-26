import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { WeatherSearch } from "./Components/WeatherSearch";

import "./Styles/styles.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WeatherSearch title="Weather Forecast" />
  </React.StrictMode>
);
