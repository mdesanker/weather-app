"use strict";

import { updateTodayPanel } from "./UI";

const APIkey = "37271f928c057ef8a096af53267154c8";

// Get weather from city input
const getCurrentWeatherCity = async function (city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`,
      { mode: "cors" }
    );
    if (!response.ok) {
      throw new Error("Not a valid city");
    }
    const data = await response.json();
    updateTodayPanel(data);
  } catch (err) {
    console.error(err.message);
  }
};

// Get weather from zip code input
const getCurrentWeatherZip = async function (zip) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${APIkey}`,
      { mode: "cors" }
    );
    if (!response.ok) {
      throw new Error("That is not a valid zip code");
    }
    const data = await response.json();
    updateTodayPanel(data);
  } catch (err) {
    console.error(err.message);
  }
};

// Get weather from latitute and longitude input
const getCurrentWeatherCoords = async function (lat, lng) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APIkey}`,
      { mode: "cors" }
    );
    if (!response.ok) {
      throw new Error("Those are not valid coordinates");
    }
    const data = await response.json();
    updateTodayPanel(data);
  } catch (err) {
    console.error(err.message);
  }
};

export { getCurrentWeatherCity, getCurrentWeatherZip, getCurrentWeatherCoords };