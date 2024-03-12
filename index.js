"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayFilteredCities = exports.filterCities = exports.displayCities = exports.addCity = void 0;
const cityList = [];
const addCity = (city) => {
    cityList.push(city);
    (0, exports.displayCities)();
};
exports.addCity = addCity;
//2  
const displayCities = () => {
    const cityContainer = document.getElementById("cityContainer");
    if (cityContainer) {
        while (cityContainer.hasChildNodes() && cityContainer.firstChild) {
            cityContainer.removeChild(cityContainer.firstChild);
        }
    }
    cityList.forEach((city) => {
        const cityDiv = document.createElement("div");
        cityDiv.innerHTML = `<strong>${city.cityName}</strong> (${city.country}) - Population: ${city.population}`;
        if (cityContainer) {
            cityContainer.appendChild(cityDiv);
        }
    });
};
exports.displayCities = displayCities;
//3  
const filterCities = (value) => {
    const filteredCities = cityList.filter((city) => city.cityName.toLowerCase().includes(value.toLowerCase()) ||
        city.country.toLowerCase().includes(value.toLowerCase()));
    (0, exports.displayFilteredCities)(filteredCities);
};
exports.filterCities = filterCities;
const displayFilteredCities = (filteredCities) => {
    let cityContainer = document.getElementById("cityContainer");
    if (cityContainer) {
        while (cityContainer.hasChildNodes() && cityContainer.firstChild) {
            cityContainer.removeChild(cityContainer.firstChild);
        }
    }
    filteredCities.forEach((city) => {
        let cityDiv = document.createElement("div");
        cityDiv.innerHTML = `<strong>${city.cityName}</strong> (${city.country}) - Population: ${city.population}`;
        if (cityContainer) {
            cityContainer.appendChild(cityDiv);
        }
    });
};
exports.displayFilteredCities = displayFilteredCities;
//Submit  
(_a = document.getElementById("cityForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", (event) => {
    event.preventDefault();
    const cityName = document.getElementById("cityName").value;
    const country = document.getElementById("country").value;
    const population = parseInt(document.getElementById("population").value, 10);
    const newCity = {
        cityName,
        country,
        population,
    };
    (0, exports.addCity)(newCity);
});
//Search
(_b = document.getElementById("searchInput")) === null || _b === void 0 ? void 0 : _b.addEventListener("input", (event) => {
    const searchValue = event.target.value;
    (0, exports.filterCities)(searchValue);
});
