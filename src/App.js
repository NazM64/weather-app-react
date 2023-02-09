import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <div className="box">
        <div className="weather-app">
          <Weather defaultCity="Vancouver" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
