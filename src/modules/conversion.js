"use strict";

// Temperature conversion
const convertCelsius = function (tempKelvin) {
  return Math.round(tempKelvin - 273.15);
};

const convertFahrenheit = function (tempKelvin) {
  return Math.round((tempKelvin - 273.15) * (9 / 5) + 32);
};

export { convertCelsius, convertFahrenheit };
