import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../../api";
import "../.././App.css";
import WeatherMap from "./WeatherMap";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              lat: `${city.latitude}`,
              long: `${city.longitude}`,
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name} ${city.countryCode}`,
            };
          }),
        };
      });
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <>
      <div className="input-search">
        <AsyncPaginate
          autoFocus
          className="search"
          placeholder="Zoek op plaats"
          debounceTimeout={600}
          value={search}
          onChange={handleOnChange}
          loadOptions={loadOptions}
        />
      </div>
      <div className="container-map">
        {
          search ? (
            <>
              <WeatherMap search={search} />
            </>
          ) : (
            <div></div>
          )
        } </div></>
  );
}

export default Search;
