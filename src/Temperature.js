import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="Temperature">
      <div className="row justify-content-between">
        <div className="col-4">
          <h1>Vancouver</h1>
          <ul className="left">
            <li id="date-time">Friday 9:00</li>
            <li id="weather-description">Showers</li>
            <li>
              Wind: <span id="wind"></span> km/h
            </li>
            <li>
              Humidity: <span id="humidity"></span>%
            </li>
          </ul>
        </div>

        <div className="col-4 d-flex align-items-center">
          <img
            src="http://openweathermap.org/img/wn/09d@2x.png"
            id="icon-top"
            alt="weather-logo"
          />

          <div className="d-flex flex-column d-flex align-items-center">
            <div>
              H:<span className="high-degree">6</span>
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
              L:<span className="low-degree">1</span>
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
}
