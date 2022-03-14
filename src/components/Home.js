import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import countryMapSource from '../countryData/countryMaps';
import { fetchCountriesFromAPI } from '../redux/countries/countries';

const Home = () => {
  const countries = useSelector((state) => state.countriesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountriesFromAPI());
  }, []);

  return (
    <ul>
      { countries.length > 0 ? countries.map((country) => {
        const countryMap = countryMapSource(country.name);
        return (
          <li key={country.id}>
            <Link to={{ pathname: country.name }}>
              <img src={countryMap} alt="country map" />
              <p>{country.name}</p>
              <p>{country.today_confirmed}</p>
            </Link>
          </li>
        );
      }) : ''}
    </ul>
  );
};

export default Home;

// "today_confirmed": 176409,
// "today_deaths": 7645,
// "today_new_confirmed": 208,
// "today_new_deaths": 2,
// "today_new_open_cases": 206,
// "today_new_recovered": 0,
// "today_open_cases": 86178,
// "today_recovered": 82586,}
