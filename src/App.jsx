import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Filter from "./components/Filter";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [sortBy, setSortBy] = useState(null); 
  const [sortType, setSortType] = useState(null); 
  const [continent, setContinent] = useState("All");
  const [subregion, setSubregion] = useState("Choose Region");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags,capital,population,area,continents,subregion"
        );
        const data = await response.json();
        setCountries(data);
        setFilteredCountries(data);
      } catch (error) {
        console.log("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    let updatedCountries = [...countries];

    if (sortBy === "alphabetical") {
      updatedCountries.sort((a, b) => a.name.common.localeCompare(b.name.common));
    }

    if (sortType) {
      updatedCountries.sort((a, b) => b[sortType] - a[sortType]);
      updatedCountries = updatedCountries.slice(0, 10); 
    }

    if (continent !== "All") {
      updatedCountries = updatedCountries.filter(country =>
        country.continents.some(cont => cont.toLowerCase() === continent.toLowerCase()) 
      );
    }

    if (subregion !== "Choose Region") {
      updatedCountries = updatedCountries.filter(country =>
        country.subregion && country.subregion.toLowerCase() === subregion.toLowerCase() 
      );
    }

    setFilteredCountries(updatedCountries); 
  }, [sortBy, sortType, continent, subregion, countries]);

  const resetFilters = () => {
    setSortBy(null);
    setSortType(null);
    setContinent("All");
    setSubregion("Choose Region");
  };

  return (
    <div>
      <Filter
        onSortAlphabetically={(checked) => {
          setSortBy(checked ? "alphabetical" : null);
          setSortType(null); 
        }}
        onSortTop10={(type) => {
          setSortBy(null); 
          setSortType(type); 
        }}
        onSelectContinent={setContinent}
        onSelectSubregion={setSubregion}
        onResetFilters={resetFilters} 
      />
      
      <div className="container">
        {filteredCountries.map((country) => (
          <Card key={country.name.common} country={country} />
        ))}
      </div>
    </div>
  );
}

export default App;
