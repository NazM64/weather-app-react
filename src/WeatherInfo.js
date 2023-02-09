import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="row justify-content-between">
        <div className="col-4">
          <h1>{props.data.city}</h1>
          <ul className="left">
            <li id="date-time">
              <FormattedDate date={props.data.date} />
            </li>
            <li id="weather-description" className="text-capitalize">
              {props.data.description}
            </li>
            <li>
              Wind: <span id="wind"></span>
              {props.data.wind} km/h
            </li>
            <li>
              Humidity: <span id="humidity"></span>
              {props.data.humidity}%
            </li>
          </ul>
        </div>

        <div className="col-4 d-flex align-items-center">
          <img
            src={props.data.icon}
            id="icon-top"
            alt={props.data.description}
          />

          <div className="d-flex flex-column d-flex align-items-center">
            <div>
              H:
              <span className="high-degree">{props.data.maxTemperature}</span>
              <span className="today-high-temp">
                <a href="/" id="celsius-link-high" className="active">
                  {" "}
                  °C{" "}
                </a>
                |
                <a href="/" id="fahrenheit-link-high">
                  {" "}
                  °F
                </a>
              </span>
            </div>
            <div>
              L:
              <span className="low-degree">{props.data.minTemperature}</span>
              <span className="today-low-temp">
                <a href="/" id="celsius-link-low" className="active">
                  {" "}
                  °C{" "}
                </a>
                |
                <a href="/" id="fahrenheit-link-low">
                  {" "}
                  °F
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
