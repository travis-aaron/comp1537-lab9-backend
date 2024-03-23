const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());

app.listen(5500, () => {
  console.log("Listening on Port 5500");
});

app.get("/getWeatherByCity", (req, res) => {
  x = undefined;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid={process.env.API}&units=metric`,
  )
    .then((resp) => resp.json())
    .then((resp) => {
      res.json(resp);
    });
});
