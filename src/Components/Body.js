import { useState, useEffect } from "react";
import { getCoordinates, getWeather } from "../Services/WeatherService";

const ICON_PIC = "http://openweathermap.org/img/w/";

const Body = (props) => {
  const [weather, setWeather] = useState([]);
  const [coordsObj, setCoordsObj] = useState({
    lat: undefined,
    lon: undefined,
  });
  const [error, setError] = useState({
    isSearchError: false,
    messageSearch: "",
  });

  useEffect(() => {
    if (props.weatherForm) {
      getCoordinates(props.weatherForm).then((result) => {
        if (result && result.lat && result.lon) {
          setCoordsObj({
            lat: result.lat,
            lon: result.lon,
          });
          setError({
            isSearchError: false,
            messageSearch: "",
          });
        } else {
          setError({
            isSearchError: true,
            messageSearch: `We don't seem to have information on the city you are looking for. Please enter a valid city.`,
          });
        }
      });
    }
  }, [props.weatherForm]);

  useEffect(() => {
    if (coordsObj.lat && coordsObj.lon && props.weatherType) {
      getWeather(coordsObj.lat, coordsObj.lon, props.weatherType).then(
        (result) => {
          if (result) {
            setWeather(result.hourly || result.daily || []);
          }
        }
      );
    }
  }, [coordsObj, props.weatherType]);

  return (
    <section className="body">
      <h3>
        {props.weatherForm.charAt(0).toUpperCase() + props.weatherForm.slice(1)}{" "}
        {props.weatherType
          ? props.weatherType === "daily"
            ? "Hourly"
            : "Daily"
          : null}{" "}
        Weather Forecast
      </h3>
      <hr />
      {error.isSearchError && props.weatherForm ? (
        <p style={{ color: "orange" }}>{error.messageSearch}</p>
      ) : null}
      <article className="singleSnippet">
        {weather
          ? weather.slice(0, 1).map((item) => {
              const { dt, temp, feels_like, weather } = item;
              const tempCel =
                Math.round(temp.day - 273.15) || Math.round(temp - 273.15);
              const feelsCel =
                Math.round(feels_like.day - 273.15) ||
                Math.round(feels_like - 273.15);
              const icon = `${ICON_PIC}${weather[0].icon}.png`;
              const iconAlt = weather[0].main;
              const desc = weather[0].description;
              const hour = new Date(dt * 1000).toLocaleString();

              return (
                <div key={dt}>
                  <div>
                    <h1>Temperature</h1>
                    <h1>{tempCel} °C</h1>
                    <h1>Feels like</h1>
                    <h1>{feelsCel} °C</h1>
                  </div>
                  <div>
                    <img src={icon} alt={iconAlt} />
                    <h1>{hour}</h1>
                  </div>
                  <div>
                    <h1>{iconAlt}</h1>
                    <p>{desc}</p>
                  </div>
                </div>
              );
            })
          : null}
      </article>
      <article className="snippets">
        {weather
          ? weather.slice(1, 9).map((item) => {
              const { dt, temp, feels_like, weather } = item;
              const tempCel =
                Math.round(temp.day - 273.15) || Math.round(temp - 273.15);
              const feelsCel =
                Math.round(feels_like.day - 273.15) ||
                Math.round(feels_like - 273.15);
              const icon = `${ICON_PIC}${weather[0].icon}.png`;
              const iconAlt = weather[0].main;
              const desc = weather[0].description;
              const date = new Date(dt * 1000).toLocaleDateString();
              const time = new Date(dt * 1000).toLocaleTimeString();

              return (
                <div key={dt}>
                  <h4>
                    {(props.weatherType === "hourly" && date) ||
                      (props.weatherType === "daily" && time)}
                  </h4>
                  <h4>Temperature</h4>
                  <h4>{tempCel} °C</h4>
                  <h4>Feels like</h4>
                  <h4>{feelsCel} °C</h4>
                  <img src={icon} alt={iconAlt} />
                  <h4>{iconAlt}</h4>
                  <p>{desc}</p>
                </div>
              );
            })
          : null}
      </article>
    </section>
  );
};

export default Body;
