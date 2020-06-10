import React, { useState } from "react";
import Searchbox from "./Searchbox";
import Weatherdata from "./Weatherdata";
function Main() {
  const [weatherData, setWeatherData] = useState(null);
  console.log(weatherData);
  return (
    <div>
      {weatherData ? null : <Searchbox setData={setWeatherData} />}
      {weatherData ? <Weatherdata data={weatherData} /> : null}
      {weatherData ? (
        <button className="back-btn" type="button">
          Back
        </button>
      ) : null}
    </div>
  );
}
export default Main;
