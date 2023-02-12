import React from "react";

export default function WeatherForecasteDay(props) {
  function day() {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div className="icon">
        <img
          src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
          id="icon-top"
          alt={props.description}
          width="80"
        />
      </div>
      <div className="weather-forecast-days">{day()}</div>
      <div>
        H: <span className="high-temp">{Math.round(props.data.temp.max)}°</span>
      </div>
      <div>
        L: <span className="low-temp">{Math.round(props.data.temp.min)}°</span>
      </div>
    </div>
  );
}
