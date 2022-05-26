const API_KEY = 'cdec89999cfa852bce12a5e2b7fa9d48';

export const getCoordinates = async(cityName) => {
  const coordsUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;
  const response = await fetch(coordsUrl);
  const coordsArr = await response.json();
  const coordsObj = await coordsArr[0];
  return coordsObj;
}

export const getWeather = async(lat, lon, type) => {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,${type},alerts&appid=${API_KEY}`;
  const response = await fetch(weatherUrl);
  const weatherObj = await response.json();
  return weatherObj;
}
