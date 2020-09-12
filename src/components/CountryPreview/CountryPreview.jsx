import React from "react";
import { useParams, Link } from "react-router-dom";

import "./CountryPreview.css";

const CountryPreview = ({ countries }) => {
  const { id } = useParams();
  console.log(countries);
  const country = countries.filter(
    (country) => country.alpha3Code.toLowerCase() === id
  )[0];
  return (
    <React.Fragment>
      <div className="row px-1 px-md-5">
        <div className="col-12 my-5">
          <Link to="/" className="btn  back-btn">
            <i className="fas fa-arrow-left pr-4"></i> Back
          </Link>
        </div>
      </div>
      <div className="row px-1 px-md-5 justify-content-between">
        {country ? (
          <React.Fragment>
            <div className="col-xl-6 col-lg-6 col-md-5 col-12 mb-4">
              <img
                src={country ? country.flag : null}
                alt="country-flag"
                className="w-100"
              />
            </div>
            <div className="col-xl-5 col-lg-5 col-md-5 col-12 align-self-center mb-4">
              <h1>{country.name}</h1>
              <div className="row my-3">
                <div className="col-md-6 col-12">
                  <p>
                    <strong>Native Name:</strong> {country.nativeName}
                  </p>
                  <p>
                    <strong>Population:</strong> {country.population}
                  </p>
                  <p>
                    <strong>Region:</strong> {country.region}
                  </p>
                  <p>
                    <strong>Sub Region:</strong> {country.subregion}
                  </p>
                  <p>
                    <strong>Capital:</strong> {country.capital}
                  </p>
                </div>
                <div className="col-md-6 col-12">
                  <p>
                    <strong>Top Level Domain:</strong>{" "}
                    {country.topLevelDomain[0]}
                  </p>
                  <p>
                    <strong>Currencies:</strong> {country.currencies[0].name}
                  </p>
                  <p>
                    <strong>Languages:</strong>{" "}
                    {country.languages.map((language) => language.name + ", ")}
                  </p>
                </div>
              </div>
            </div>
          </React.Fragment>
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default CountryPreview;

// alpha2Code: "AF"
// alpha3Code: "AFG"
// altSpellings: (2) ["AF", "Afġānistān"]
// area: 652230
// borders: (6) ["IRN", "PAK", "TKM", "UZB", "TJK", "CHN"]
// callingCodes: ["93"]
// capital: "Kabul"
// cioc: "AFG"
// currencies: [{…}]
// demonym: "Afghan"
// flag: "https://restcountries.eu/data/afg.svg"
// gini: 27.8
// languages: (3) [{…}, {…}, {…}]
// latlng: (2) [33, 65]
// name: "Afghanistan"
// nativeName: "افغانستان"
// numericCode: "004"
// population: 27657145
// region: "Asia"
// regionalBlocs: [{…}]
// subregion: "Southern Asia"
// timezones: ["UTC+04:30"]
// topLevelDomain: [".af"]
// translations: {de: "Afghanistan", es: "Afganistán", fr:
