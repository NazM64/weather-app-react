import React from "react";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="icon">Icon</div>
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
