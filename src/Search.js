import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-form">
        <input
          type="text"
          id="city-input"
          placeholder="Type the city name"
          autoComplete="off"
        />
        <input type="submit" value="Search" className="button" />
        <input type="submit" value="Current" className="current-button" />
      </form>
    </div>
  );
}
