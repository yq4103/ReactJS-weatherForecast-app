import { useState, useEffect } from "react";
import Header from "./Header";
import Body from "./Body";
import { createBrowserHistory } from "history";

export function WeatherSearch() {
  const history = createBrowserHistory();
  const [weatherForm, setWeatherForm] = useState("");
  const [weatherType, setWeatherType] = useState("");

  useEffect(() => {
    if (weatherType === "daily") {
      history.push("hourly");
    }
    if (weatherType === "hourly") {
      history.push("daily");
    }
    if (weatherType === "") {
      history.push("");
    }
  }, [weatherType, history]);

  return (
    <>
      <Header onSearch={setWeatherForm} onToggle={setWeatherType} />
      <Body weatherForm={weatherForm} weatherType={weatherType} />
    </>
  );
}
