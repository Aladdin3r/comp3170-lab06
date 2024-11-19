import React from "react";
import "../App.css";

const Filter = ({
  onSortAlphabetically,
  onSortTop10,
  onSelectContinent,
  onSelectSubregion,
  onResetFilters,  
}) => {
  const continents = [
    "All",
    "Africa",
    "Antarctica",
    "Asia",
    "Europe",
    "Oceania",
    "North America",
    "South America",
  ];
  const subregions = [
    "Choose Region",
    "North America",
    "Western Europe",
    "Eastern Asia",
    "Caribbean",
    "Central Europe",
    "Polynesia",
    "Northern Africa",
    "Southern Europe",
    "South-Eastern Asia",
    "Eastern Africa",
    "Southern Africa",
    "Middle Africa",
    "Micronesia",
    "Southeast Europe",
    "Western Asia",
    "Northern Europe",
    "Melanesia",
    "Central Asia",
    "Southern Asia",
    "South America",
    "Australia and New Zealand",
    "Central America",
    "Eastern Europe",
  ];

  return (
    <div className="filter">
      <div className="filter-column">
        <label>
          <input
            type="checkbox"
            onChange={(e) => onSortAlphabetically(e.target.checked)}
          />
          Sort Alphabetically
        </label>
      </div>

      <div className="filter-column">
        <h4>Top 10</h4>
        <label>
          <input
            type="radio"
            name="top10"
            value="population"
            onChange={() => onSortTop10("population")}
          />
          By Population
        </label>
        <label>
          <input
            type="radio"
            name="top10"
            value="area"
            onChange={() => onSortTop10("area")}
          />
          By Area
        </label>
      </div>

      <div className="filter-column">
        <h4>By Continent</h4>
        <select onChange={(e) => onSelectContinent(e.target.value)}>
          {continents.map((continent) => (
            <option key={continent} value={continent}>
              {continent}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-column">
        <h4>By Subregion</h4>
        <select onChange={(e) => onSelectSubregion(e.target.value)}>
          {subregions.map((subregion) => (
            <option key={subregion} value={subregion}>
              {subregion}
            </option>
          ))}
        </select>
      </div>

      <div className="reset-button-container">
        <button onClick={onResetFilters}>Reset Filters</button>
      </div>
    </div>
  );
};

export default Filter;
