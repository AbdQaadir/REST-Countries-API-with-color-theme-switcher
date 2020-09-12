import React from "react";
import { BrowserRouter as Router, useHistory } from "react-router-dom";

// numericCode;

import "./Country.css";

function Country(props) {
  const country = props.country;
  const history = useHistory();
  const handleClick = (code) => {
    history.push(`/countries/${code.toLowerCase()}`);
  };
  return (
    <React.Fragment>
      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
        <div
          className="country"
          onClick={() => handleClick(country.alpha3Code)}
        >
          <img src={country.flag} alt="country-img" className="country-img" />

          <div className="country-details p-3">
            <h5 className="country-title mt-2 mb-2">{country.name}</h5>
            <p className="my-1">
              <strong>Population: </strong>
              {country.population.toLocaleString()}
            </p>
            <p className="my-1">
              <strong>Region: </strong>
              {country.region}
            </p>
            <p className="my-1">
              <strong>Capital: </strong>
              {country.capital}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

// alpha2Code: "US"
// alpha3Code: "USA"
// altSpellings: (3) ["US", "USA", "United States of America"]
// area: 9629091
// borders: (2) ["CAN", "MEX"]
// callingCodes: ["1"]
// capital: "Washington, D.C."
// cioc: "USA"
// currencies: [{…}]
// demonym: "American"
// flag: "https://restcountries.eu/data/usa.svg"
// gini: 48
// languages: [{…}]
// latlng: (2) [38, -97]
// name: "United States of America"
// nativeName: "United States"
// numericCode: "840"
// population: 323947000
// region: "Americas"
// regionalBlocs: [{…}]
// subregion: "Northern America"
// timezones: (11) ["UTC-12:00", "UTC-11:00", "UTC-10:00", "UTC-09:00", "UTC-08:00", "UTC-07:00", "UTC-06:00", "UTC-05:00", "UTC-04:00", "UTC+10:00", "UTC+12:00"]
// topLevelDomain: [".us"]
// translations:
export default Country;
