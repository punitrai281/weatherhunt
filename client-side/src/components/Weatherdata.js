import React from "react";
function Weatherdata(props) {
  let weatherIconLink =
    "../../images/weather-icons/" + props.data[0].WeatherIcon + ".png";
  return (
    <div className="weather-data">
      <h2 className="location">
        {props.data.city}, {props.data.adsArea}, {props.data.country} Weather
      </h2>
      <h2 className="search-time">
        as of {props.data[0].LocalObservationDateTime.substring(11, 16)} IST
      </h2>
      <div className="data-container">
        <div className="main-data">
          <h1 className="temperature-value">
            {props.data[0].Temperature.Metric.Value}°
          </h1>
          <h1 className="weather-text">{props.data[0].WeatherText}</h1>
        </div>
        <div className="icon-container">
          <img className="weather-icon" src={weatherIconLink} alt="icon"></img>
        </div>
      </div>
    </div>
  );
}
export default Weatherdata;
