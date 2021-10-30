"use strict";

import "./style.css";

const APIkey = "37271f928c057ef8a096af53267154c8";

// Elements
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search");

// Temperature conversion
const getTempCelsius = function (tempKelvin) {
  return Math.round(tempKelvin - 273.15);
};

const getTempFahrenheit = function (tempKelvin) {
  return Math.round((tempKelvin - 273.15) * (9 / 5) + 32);
};

// Get weather from city input
const getCurrentWeatherCity = async function (city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`,
    { mode: "cors" }
  );
  const data = await response.json();
  console.log(getTempCelsius(data.main.temp));
};

// Get weather from zip code input
const getCurrentWeatherZip = async function (zip) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${APIkey}`,
    { mode: "cors" }
  );
  const data = await response.json();
  console.log(getTempCelsius(data.main.temp));
};

// getCurrentWeather("detroit");

// Get weather from latitute and longitude input
const getCurrentWeatherCoords = async function (lat, lng) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APIkey}`,
    { mode: "cors" }
  );
  const data = await response.json();
  console.log(`${data.name}: ${getTempCelsius(data.main.temp)} C`);
};

const success = function (position) {
  const { latitude: lat, longitude: lng } = position.coords;
  // console.log("coords", lat, lng);
  // return [lat, lng];
  getCurrentWeatherCoords(lat, lng);
};

const error = function () {
  console.log("Unable to retrieve your location");
};

// Use Geolocation API to get user position
const getUserPosition = function () {
  if (!navigator.geolocation) {
    console.log("Geolocation is not supported by your browser");
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
};

getUserPosition();

// Listeners
searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(searchInput.value);
  if (Number(searchInput.value)) {
    getCurrentWeatherZip(Number(searchInput.value));
  } else {
    getCurrentWeatherCity(searchInput.value);
  }
});
