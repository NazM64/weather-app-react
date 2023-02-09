import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [highDegree, setHighDegree] = useState("highCelsius");
  const [lowDegree, setLowDegree] = useState("lowCelsius");

  function showHighCelsius(event) {
    event.preventDefault();
    setHighDegree("highCelsius");
  }
  function calculateHighFahrenheit(event) {
    event.preventDefault();
    setHighDegree(Math.round((props.highCelsius * 9) / 5 + 32));
  }

  function showLowCelsius(event) {
    event.preventDefault();
    setLowDegree("lowCelsius");
  }
  function calculateLowFahrenheit(event) {
    event.preventDefault();
    setLowDegree(Math.round((props.lowCelsius * 9) / 5 + 32));
  }
  if (highDegree === "highCelsius" || lowDegree === "lowCelsius") {
    return (
      <div className="WeatherTemperature">
        <div>
          H:
          <span className="high-degree">{props.highCelsius}</span>
          <span className="today-high-temp">
            {" "}
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
        <div>
          L:
          <span className="low-degree">{props.lowCelsius}</span>
          <span className="today-low-temp">
            {" "}
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
          H:
          <span className="high-degree">{props.highCelsius}</span>
          <span className="today-high-temp">
            <a
              href="/"
              id="celsius-link-high"
              className="active"
              onClick={showHighCelsius}
            >
              {" "}
              °C{" "}
            </a>
            | °F
          </span>
        </div>
        <div>
          L:
          <span className="low-degree">{props.lowCelsius}</span>
          <span className="today-low-temp">
            <a
              href="/"
              id="celsius-link-low"
              className="active"
              onClick={showLowCelsius}
            >
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
