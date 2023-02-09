import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Temperature from "./Temperature";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <div className="box">
        <div className="weather-app">
          <Temperature defaultCity="Vancouver" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
