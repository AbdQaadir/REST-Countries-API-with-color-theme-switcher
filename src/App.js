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
  loading: false,
  searchQuery: "",
};
const App = () => {
  const [data, setData] = useState(initialState);
  const { countries, filteredCountries, loading, searchQuery } = data;
  // const [countries, setCountries] = useState([]);
  // const [filteredCountries, setFilteredCountries] = useState([]);
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) =>
      setData({
        ...data,
        countries: response.data,
        filteredCountries: response.data,
      })
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
      <div className="container-fluid">
        {loading ? <Loading /> : null}
        <Header />
        <Switch>
          <Route exact path="/">
            <Countries
              countries={filteredCountries}
              filterByRegion={filterByRegion}
              handleSearch={handleSearch}
              searchQuery={searchQuery}
            />
          </Route>
          <Route path="/countries/:id">
            <CountryPreview countries={countries} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
