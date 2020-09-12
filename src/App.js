import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Loading from "./components/Loading/Loading";
import Header from "./components/Header/Header";
import Countries from "./components/Countries/Countries";
import CountryPreview from "./components/CountryPreview/CountryPreview";
const initialState = {
  filteredCountries: [],
  countries: [],
  loading: true,
  searchQuery: "",
};
const App = () => {
  const [data, setData] = useState(initialState);
  const [mode, setMode] = useState(false);
  const { countries, filteredCountries, loading, searchQuery } = data;
  // const [countries, setCountries] = useState([]);
  // const [filteredCountries, setFilteredCountries] = useState([]);
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) =>
      setTimeout(() => {
        setData({
          countries: response.data,
          filteredCountries: response.data,
          loading: false,
        });
      }, 3500)
    );
  }, []);

  const filterByRegion = (e) => {
    const filterBy = e.target.value;
    if (filterBy) {
      const filteredArray = countries.filter(
        (country) => country.region.toLowerCase() === filterBy
      );
      setData({
        ...data,
        filteredCountries: filteredArray,
      });
    } else {
      setData({
        ...data,
        filteredCountries: countries,
      });
    }
  };

  const handleSearch = (e) => {
    const filterBy = e.target.value.toLowerCase();
    if (filterBy) {
      const filteredArray = filteredCountries.filter((country) =>
        country.name.toLowerCase().includes(filterBy)
      );
      setData({
        ...data,
        filteredCountries: filteredArray,
        searchQuery: filterBy,
      });
    } else {
      setData({
        ...data,
        filteredCountries: countries,
        searchQuery: "",
      });
    }
  };
  return (
    <Router>
      <div
        className={mode ? `dark container-fluid` : `light container-fluid`}
        id="main"
      >
        {loading ? <Loading /> : null}
        <Header mode={mode} setMode={setMode} />
        <Switch>
          <Route exact path="/">
            <Countries
              countries={filteredCountries}
              filterByRegion={filterByRegion}
              handleSearch={handleSearch}
              searchQuery={searchQuery}
              mode={mode}
            />
          </Route>
          <Route path="/countries/:id">
            <CountryPreview countries={countries} mode={mode} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
