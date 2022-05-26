import { useState } from "react";
import Header from "./Header";
import Body from "./Body";

export function WeatherSearch() {
  const [weatherForm, setWeatherForm] = useState("");

  const [weatherType, setWeatherType] = useState("");

  return (
    <>
      <Header onSearch={setWeatherForm} onToggle={setWeatherType} />
      <Body weatherForm={weatherForm} weatherType={weatherType} />
    </>
  );
}
