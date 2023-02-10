import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [highDegree, setHighDegree] = useState(props.highCelsius);
  const [unit, setUnit] = useState("celsius");

  function showHighCelsius(event) {
    event.preventDefault();
    setHighDegree(props.highCelsius);
    setUnit("celsius");
  }
  function calculateHighFahrenheit(event) {
    event.preventDefault();
    setHighDegree(Math.round((props.highCelsius * 9) / 5 + 32));
    setUnit("fahrenheit");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <div>
          H: <span className="high-degree">{highDegree}</span>
          <span className="today-high-temp">
            °C |
            <a
              href="/"
              id="fahrenheit-link-high"
              onClick={calculateHighFahrenheit}
            >
              {" "}
              °F
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <div>
          H:
          <span className="high-degree">{highDegree}</span>
          <span className="today-high-temp">
            <a href="/" id="celsius-link-high" onClick={showHighCelsius}>
              {" "}
              °C{" "}
            </a>
            | °F
          </span>
        </div>
      </div>
    );
  }
}
