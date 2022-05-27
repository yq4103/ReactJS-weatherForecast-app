import { useState } from "react";

const Header = (props) => {
  const [cityName, setCityName] = useState("");
  const [type, setType] = useState("");
  const [formError, setFormError] = useState({
    isFormError: false,
    messageForm: "",
  });
  const [typeError, setTypeError] = useState({
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
      setFormError({
        isFormError: false,
        messageForm: "",
      });
      setTypeError({
        isTypeError: false,
        messageType: "",
      });
    } else if (!cityName && !type) {
      setFormError({
        isFormError: true,
        messageForm: "Please enter a city.",
      });
      setTypeError({
        isTypeError: true,
        messageType: "Please select a forecast type.",
      });
    } else if (!cityName) {
      setFormError({
        isFormError: true,
        messageForm: "Please enter a city.",
      });
    } else if (!type) {
      setTypeError({
        isTypeError: true,
        messageType: "Please select a forecast type.",
      });
    }
  };

  const cityOnChange = (e) => {
    setCityName(e.target.value);
    setFormError({
      isFormError: false,
      messageForm: "",
    });
  };

  const typeOnChange = (e) => {
    setType(e.target.value);
    setTypeError({
      isTypeError: false,
      messageType: "",
    });
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
            onChange={cityOnChange}
          />
          {formError.isFormError && (
            <p style={{ color: "orange" }} className="city_error">
              {formError.messageForm}
            </p>
          )}
        </div>
        <div className="weather_search">
          <h4>Forecast Type</h4>
          <select onChange={typeOnChange} value={type}>
            <option value="">Please Select</option>
            <option value="daily">Hourly</option>
            <option value="hourly">Daily</option>
          </select>
          {typeError.isTypeError && (
            <p style={{ color: "orange" }} className="city_error">
              {typeError.messageType}
            </p>
          )}
        </div>
        <button type="submit" className="searchBtn">
          Get Forecast
        </button>
      </form>
    </section>
  );
};

export default Header;
