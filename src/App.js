import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Temperature from "./Temperature";
import Search from "./Search";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <div className="box">
        <div className="weather-app">
          <Temperature />
          <Search />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
