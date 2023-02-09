import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState(null);
  const [allData, setAllData] = useState(false);
  const [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    setAllData(true);
    setWeatherData({
      maxTemperature: Math.round(response.data.main.temp_max),
      minTemperature: Math.round(response.data.main.temp_min),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function Search() {
    const apiKey = "ecf6996c8a62ee385547d2ae6dc3dea8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(showWeather);
  }

  if (allData) {
    return (
      <div className="Temperature">
        <WeatherInfo data={weatherData} />
        <WeatherForecast />
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="text"
            id="city-input"
            placeholder="Type the city name"
            autoComplete="off"
            autoFocus="on"
            onChange={handleCityChange}
          />
          <input type="submit" value="Search" className="button" />
        </form>
      </div>
    );
  } else {
    Search();
    return "Loading...";
  }
}
