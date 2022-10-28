import "./App.css";
import { useState } from "react";

function App() {
  const [weather, updateWeather] = useState([]);
  const [city, updateCity] = useState("");

  const chckweather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ed226b5573440fa7c1c35654bef023fa`
    )
      .then((data) => data.json())
      .then((data) => {
        updateWeather(data);
      })
      .catch(() => {});
  };
  return (
    <div className="App">
      <input
        type={"text"}
        placeholder="Enter City Name"
        value={city}
        onChange={(e) => updateCity(e.target.value)}
      />
      <button className="btn btn-primary m-5" onClick={chckweather}>
        Search Weather
      </button>
      <h3>{weather?.name}</h3>
      <h3>{(weather?.main?.temp-273.15).toFixed(0)}</h3>
    </div>
  );
}

export default App;
