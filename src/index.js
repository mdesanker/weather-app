"use strict";

import "./style.css";
import { getCurrentWeatherCity, getCurrentWeatherZip } from "./modules/weather";
import { getUserPosition } from "./modules/location";

// const APIkey = "37271f928c057ef8a096af53267154c8";

// Elements
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search");
const units = document.querySelector("#units");

let currentLocation;

// Listeners
searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  currentLocation = searchInput.value;
  if (Number(searchInput.value)) {
    getCurrentWeatherZip(Number(searchInput.value), units.value);
  } else {
    getCurrentWeatherCity(searchInput.value, units.value);
  }
  searchInput.value = "";
});

units.addEventListener("change", function (e) {
  if (!currentLocation) {
    getUserPosition();
  } else {
    if (Number(currentLocation)) {
      getCurrentWeatherZip(Number(currentLocation), units.value);
    } else {
      getCurrentWeatherCity(currentLocation, units.value);
    }
  }
});

getUserPosition();
