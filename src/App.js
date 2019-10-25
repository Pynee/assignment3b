import React, { useState, useEffect, useReducer } from "react";
import Country from "./components/Country";
import CountryTable from "./components/CountryTable";
import UserSelectionTable from "./components/UserSelectionTable";
import AllCountriesTable from "./components/AllCountriesTable";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";

const App = props => {
  const dispatch = useDispatch();
  const countries = useSelector(state => state.countriesReducer.countries);
  const userSelected = useSelector(
    state => state.countriesReducer.userSelected
  );
  const allCountriesTableFields = ["Name", "Population"];
  const allCountryFields = ["name", "population"];
  const userSelectedTableFields = ["Name", "Population"];
  const userSelectedCountryFields = ["name", "population"];

  const addToList = props => {
    dispatch({ type: "SELECT_COUNTRY", payload: props.country });

    return;
  };
  const removeFromList = props => {
    dispatch({ type: "DELETE_COUNTRY", payload: props.country });

    return;
  };

  return (
    <div className=" App container">
      <UserSelectionTable>
        <CountryTable fields={userSelectedTableFields} countries={userSelected}>
          <Country
            onClick={removeFromList}
            fields={userSelectedCountryFields}
          />
        </CountryTable>
      </UserSelectionTable>
      <AllCountriesTable>
        <CountryTable fields={allCountriesTableFields} countries={countries}>
          <Country onClick={addToList} fields={allCountryFields} />
        </CountryTable>
      </AllCountriesTable>
    </div>
  );
};

export default App;
