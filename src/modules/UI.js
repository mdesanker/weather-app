"use strict";

import { convertCelsius, convertFahrenheit } from "./conversion";

const location = document.querySelector(".location");
const description = document.querySelector(".description");
const currentTemp = document.querySelector(".current-temp");
const hiLowTemp = document.querySelector(".hilow-temp");

const updateTodayPanel = function (data) {
  location.textContent = data.name;
  description.textContent = data.weather[0].main;
  currentTemp.textContent = `${Math.round(data.main.temp)}°`;
  hiLowTemp.textContent = `H: ${Math.round(
    data.main.temp_max
  )}° L: ${Math.round(data.main.temp_min)}°`;
};

export { updateTodayPanel };
