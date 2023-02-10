import React from "react";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  const apiKey = "f3009e4852fa0a079dab291dabf020c4";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="icon">{props.icon}</div>
          <div className="weather-forecast-days">Thursday</div>
          <div>
            H:
            <span class="high-temp">10°</span>
          </div>
          <div>
            L:
            <span class="low-temp">2°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
