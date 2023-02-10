import React, { useState } from "react";

export default function WeatherTemperature(props) {
  console.log(props);
  const [lowDegree, setLowDegree] = useState(props.lowCelsius);
  const [unit, setUnit] = useState("celsius");

  function showLowCelsius(event) {
    event.preventDefault();
    setLowDegree(props.lowCelsius);
    setUnit("celsius");
  }
  function calculateLowFahrenheit(event) {
    event.preventDefault();
    setLowDegree(Math.round((props.lowCelsius * 9) / 5 + 32));
    setUnit("fahrenheit");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <div>
          L: <span className="low-degree">{lowDegree}</span>
          <span className="today-low-temp">
            °C |
            <a
              href="/"
              id="fahrenheit-link-low"
              onClick={calculateLowFahrenheit}
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
          L:
          <span className="low-degree">{lowDegree}</span>
          <span className="today-low-temp">
            <a href="/" id="celsius-link-low" onClick={showLowCelsius}>
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
