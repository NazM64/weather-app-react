import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="box">
          <div className="weather-app">
            <Weather defaultCity="Vancouver" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
