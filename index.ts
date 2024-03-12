// Define interface for City
interface City {
  cityName: string;
  country: string;
  population: number;
}

// Array to store the list of cities
const cityList: City[] = [];

// Function to add a new city to the directory
export const addCity = (city: City) => {
  cityList.push(city);
  displayCities();
};

// Function to display the list of cities
export const displayCities = () => {
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

// Function to filter cities based on user input
export const filterCities = (value: string) => {
  const filteredCities = cityList.filter(
    (city) =>
      city.cityName.toLowerCase().includes(value.toLowerCase()) ||
      city.country.toLowerCase().includes(value.toLowerCase())
  );
  displayFilteredCities(filteredCities);
};

// Function to display filtered cities
export const displayFilteredCities = (filteredCities: City[]) => {
  const cityContainer = document.getElementById("cityContainer");
  if (cityContainer) {
    while (cityContainer.hasChildNodes() && cityContainer.firstChild) {
      cityContainer.removeChild(cityContainer.firstChild);
    }
  }

  filteredCities.forEach((city) => {
    const cityDiv = document.createElement("div");
    cityDiv.innerHTML = `<strong>${city.cityName}</strong> (${city.country}) - Population: ${city.population}`;
    if (cityContainer) {
      cityContainer.appendChild(cityDiv);
    }
  });
};

// Event listener for the form submission
document.getElementById("cityForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityName = (document.getElementById("cityName") as HTMLInputElement).value;
  const country = (document.getElementById("country") as HTMLInputElement).value;
  const population = parseInt((document.getElementById("population") as HTMLInputElement).value, 10);

  const newCity: City = {
    cityName,
    country,
    population,
  };

  addCity(newCity);
});

// Event listener for the search input
document.getElementById("searchInput")?.addEventListener("input", (event) => {
  const searchValue = (event.target as HTMLInputElement).value;
  filterCities(searchValue);
});
