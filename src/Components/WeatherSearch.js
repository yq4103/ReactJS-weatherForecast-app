import { useState } from "react";
import Header from "./Header";
import Body from "./Body";

export function WeatherSearch({ title }) {
  const [weatherForm, setWeatherForm] = useState("");

  const [weatherType, setWeatherType] = useState("");

  return (
    <>
      <section className="title">
        <h1>{title}</h1>
      </section>
      <Header onSearch={setWeatherForm} onToggle={setWeatherType} />
      <Body weatherForm={weatherForm} weatherType={weatherType} />
    </>
  );
}
