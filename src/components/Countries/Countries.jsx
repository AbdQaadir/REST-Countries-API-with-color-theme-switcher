import React from "react";
import Country from "../Country/Country";

import "./Countries.css";

function Countries({
  countries,
  filterByRegion,
  handleSearch,
  searchQuery,
  mode,
}) {
  console.log(countries);
  return (
    <div className="row">
      <div className="col-12 mt-5 mb-3">
        <div className="row justify-content-between align-items-center px-1 px-md-4">
          <div className="col-xl-4 col-lg-4 col-md-6 col-12 my-2">
            <input
              type="text"
              placeholder="Search for a country..."
              className={
                mode
                  ? "form-control search-bar dark"
                  : "form-control search-bar light"
              }
              value={searchQuery}
              onChange={(e) => handleSearch(e)}
            />
            <i className={mode ? "fas fa-search dark" : "fas fa-search"}></i>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-4 col-12 my-2">
            <select
              name="region"
              id="region"
              className={
                mode
                  ? "form-control filter-bar dark"
                  : "form-control filter-bar light"
              }
              onChange={(e) => filterByRegion(e)}
            >
              <option value="">Filter by Region</option>
              <option value="africa">Africa</option>
              <option value="americas">Americas</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </div>
        </div>
      </div>
      {countries.map((country) => {
        return (
          <Country country={country} key={country.numericCode} mode={mode} />
        );
      })}
    </div>
  );
}

export default Countries;
