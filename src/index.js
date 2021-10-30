"use strict";

import "./style.css";

const APIkey = "37271f928c057ef8a096af53267154c8";

const getTempCelsius = function (tempKelvin) {
  return Math.round(tempKelvin - 273.15);
};

const getTempFahrenheit = function (tempKelvin) {
  return Math.round((tempKelvin - 273.15) * (9 / 5) + 32);
};

const getCurrentWeather = async function (city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`,
    { mode: "cors" }
  );
  const data = await response.json();
  console.log(getTempCelsius(data.main.temp));
};

getCurrentWeather("detroit");

console.log(getTempFahrenheit(283.15));
console.log(getTempCelsius(283.15));
