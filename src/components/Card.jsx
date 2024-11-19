import React from "react";
import "../App.css";

const Card = ({ country }) => {
  const {
    name,
    flags: { svg },
    capital,
    population,
    area,
    continents,
    subregion,
  } = country;

  return (
    <div className="card">
      <img src={svg} alt={`Flag of ${name.common}`} />
      <h3>{name.common}</h3>
      <p>
        <strong>Capital:</strong> {capital ? capital.join(", ") : "N/A"}
      </p>
      <p>
        <strong>Population:</strong> {population.toLocaleString()}
      </p>
      <p>
        <strong>Area:</strong> {area.toLocaleString()} km²
      </p>
      <p>
        <strong>Continent:</strong> {continents.join(", ")}
      </p>
      <p>
        <strong>Subregion:</strong> {subregion || "N/A"}
      </p>
    </div>
  );
};

export default Card;
