"use strict";

import "./style.css";
import { getCurrentWeatherCity, getCurrentWeatherZip } from "./modules/weather";
import { getUserPosition } from "./modules/location";

// const APIkey = "37271f928c057ef8a096af53267154c8";

// Elements
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search");

// Listeners
searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (Number(searchInput.value)) {
    getCurrentWeatherZip(Number(searchInput.value));
  } else {
    getCurrentWeatherCity(searchInput.value);
  }
  searchInput.value = "";
});

getUserPosition();
