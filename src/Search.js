import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  function Search() {
    const apiKey = "ecf6996c8a62ee385547d2ae6dc3dea8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(showWeather);
  }
  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  return (
    <div className="Search">
      <form onSubmit={handleSubmit} id="search-form">
        <input
          type="text"
          id="city-input"
          placeholder="Type the city name"
          autoComplete="off"
        />
        <input
          type="submit"
          value="Search"
          className="button"
          onChange={handleCityChange}
        />
        <input type="submit" value="Current" className="current-button" />
      </form>
    </div>
  );
}
