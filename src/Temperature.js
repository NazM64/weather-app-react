import React, { useState } from "react";
import axios from "axios";
import "./Temperature.css";

export default function Temperature() {
  const [weatherData, setWeatherData] = useState(null);
  const [allData, setAllData] = useState(false);

  function showWeather(response) {
    setAllData(true);
    setWeatherData({
      maxTemperature: response.data.main.temp_max,
      minTemperature: response.data.main.temp_min,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (allData) {
    return (
      <div className="Temperature">
        <div className="row justify-content-between">
          <div className="col-4">
            <h1>Vancouver</h1>
            <ul className="left">
              <li id="date-time">Friday 9:00</li>
              <li id="weather-description" className="text-capitalize">
                {weatherData.description}
              </li>
              <li>
                Wind: <span id="wind"></span>
                {weatherData.wind} km/h
              </li>
              <li>
                Humidity: <span id="humidity"></span>
                {weatherData.humidity}%
              </li>
            </ul>
          </div>

          <div className="col-4 d-flex align-items-center">
            <img
              src={weatherData.icon}
              id="icon-top"
              alt={weatherData.description}
            />

            <div className="d-flex flex-column d-flex align-items-center">
              <div>
                H:
                <span className="high-degree">
                  {weatherData.maxTemperature}
                </span>
                <span className="today-high-temp">
                  <a href="/" id="celsius-link-high" className="active">
                    °C
                  </a>
                  |
                  <a href="/" id="fahrenheit-link-high">
                    °F
                  </a>
                </span>
              </div>
              <div>
                L:
                <span className="low-degree">{weatherData.minTemperature}</span>
                <span className="today-low-temp">
                  <a href="/" id="celsius-link-low" className="active">
                    °C
                  </a>
                  |
                  <a href="/" id="fahrenheit-link-low">
                    °F
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="weather-forecast" id="forecast"></div>
      </div>
    );
  } else {
    const apiKey = "ecf6996c8a62ee385547d2ae6dc3dea8";
    let city = "Vancouver";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(showWeather);

    return "Loading...";
  }
}
