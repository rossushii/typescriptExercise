//1
interface City {
    cityName: string;
    country: string;
    population: number;
  }
  
  const cityList: City[] = [];
 
  export const addCity = (city: City) => {
    cityList.push(city);
    displayCities();
  };
//2  
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
//3  
  export const filterCities = (value: string) => {
    const filteredCities = cityList.filter(
      (city) =>
        city.cityName.toLowerCase().includes(value.toLowerCase()) ||
        city.country.toLowerCase().includes(value.toLowerCase())
    );
    displayFilteredCities(filteredCities);
  };
  
  export const displayFilteredCities = (filteredCities: City[]) => {
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
//Submit  
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


  
//Search
  document.getElementById("searchInput")?.addEventListener("input", (event) => {
    const searchValue = (event.target as HTMLInputElement).value;
    filterCities(searchValue);
  });
  