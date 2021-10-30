"use strict";

import { getCurrentWeatherCoords } from "./weather";

const success = function (position) {
  const { latitude: lat, longitude: lng } = position.coords;
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

export { getUserPosition };
