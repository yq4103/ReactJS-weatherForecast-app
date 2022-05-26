import { useState } from "react";

const Header = (props) => {
  const [cityName, setCityName] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState({
    isFormError: false,
    messageForm: "",
    isTypeError: false,
    messageType: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cityName && type) {
      props.onSearch(cityName);
      setCityName("");
      props.onToggle(type);
      setType("");
      setError({
        isFormError: false,
        messageForm: "",
        isTypeError: false,
        messageType: "",
      });
    } else if (!cityName && !type) {
      setError({
        isFormError: true,
        messageForm: "Please enter a city.",
        isTypeError: true,
        messageType: "Please select a forecast type.",
      });
    } else if (!cityName) {
      setError({
        isFormError: true,
        messageForm: "Please enter a city.",
        isTypeError: false,
        messageType: "",
      });
    } else if (!type) {
      setError({
        isFormError: false,
        messageForm: "",
        isTypeError: true,
        messageType: "Please select a forecast type.",
      });
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className="header">
        <div className="city_search">
          <h4>City</h4>
          <input
            type="text"
            placeholder="Enter City"
            name="city"
            value={cityName}
            onChange={(e) => {
              setCityName(e.target.value);
            }}
          />
          {error.isFormError && (
            <p style={{ color: "red" }} className="city_error">
              {error.messageForm}
            </p>
          )}
        </div>
        <div className="weather_search">
          <h4>Forecast Type</h4>
          <select
            onChange={(e) => {
              setType(e.target.value);
            }}
            value={type}
          >
            <option value="">Please Select</option>
            <option value="daily">Hourly</option>
            <option value="hourly">Daily</option>
          </select>
          {error.isTypeError && (
            <p style={{ color: "red" }} className="city_error">
              {error.messageType}
            </p>
          )}
        </div>
        <input type="submit" value="Get Forecast" className="searchBtn" />
      </form>
    </section>
  );
};

export default Header;
