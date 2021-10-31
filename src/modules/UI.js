"use strict";

const location = document.querySelector(".location");
const description = document.querySelector(".description");
const currentTemp = document.querySelector(".current-temp");
const hiLowTemp = document.querySelector(".hilow-temp");
const overview = document.querySelector(".overview");

const updateTodayPanel = function (data) {
  location.textContent = data.name;
  description.textContent = data.weather[0].main;
  currentTemp.textContent = `${Math.round(data.main.temp)}°`;
  hiLowTemp.textContent = `H: ${Math.round(
    data.main.temp_max
  )}° L: ${Math.round(data.main.temp_min)}°`;
};

const updateOverview = function (data) {
  overview.textContent = `Today: ${
    data.weather[0].description
  }, currently feels like ${Math.round(
    data.main.feels_like
  )}°, with a high of ${Math.round(
    data.main.temp_max
  )}° during the day and a low of ${Math.round(data.main.temp_min)}° at night.`;
};

export { updateTodayPanel, updateOverview };
