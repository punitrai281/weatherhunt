require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.post("/", function (req, res) {
  const city = req.body.city;
  let cityKey = "";
  let cConditionUrl = "";
  let weatherData = "";
  http.get(
    "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=" +
      process.env.API_KEY +
      "&q=" +
      city +
      "&language=en-in&details=true",
    (response) => {
      let data = "";
      response.on("data", (chunk) => {
        data += chunk;
      });
      response.on("end", () => {
        let cityData = JSON.parse(data)[0];
        let cityName = cityData.EnglishName;
        let adsArea = cityData.AdministrativeArea.EnglishName;
        let country = cityData.Country.EnglishName;
        console.log(cityName + adsArea + country);
        cityKey = cityData.Key;
        cConditionUrl =
          "http://dataservice.accuweather.com/currentconditions/v1/" +
          cityKey +
          "?" +
          "apikey=" +
          process.env.API_KEY +
          "&language=en-in&details=true";
        http.get(cConditionUrl, (response) => {
          let data = "";
          response.on("data", (chunk) => {
            data += chunk;
          });
          response.on("end", () => {
            weatherData = JSON.parse(data);
            res.send({
              ...weatherData,
              city: cityName,
              adsArea: adsArea,
              country: country,
            });
          });
          response.on("error", (err) => {
            console.log(err);
          });
        });
      });
      response.on("error", (err) => {
        console.log(err);
      });
    }
  );
});
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client-side/build"));
  app.get("*", function (req, res) {
    res.sendFile("client-side/build/index.html");
  });
}

app.listen(process.env.PORT || 5000, function () {
  console.log("Server started at port 5000");
});
