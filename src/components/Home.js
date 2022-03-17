import React, { useEffect, useState } from 'react';
import { FaExclamationTriangle, FaRegArrowAltCircleRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import countryMapSource from '../countryData/countryMaps';
import { fetchCountriesFromAPI } from '../redux/countries/countries';
import BaseCountry from './BaseCountry';
import Form from './Form';

const Home = () => {
  const [searchText, setSearchText] = useState('');
  let countries = useSelector((state) => state.countriesReducer);
  const dispatch = useDispatch();

  countries = countries.filter((country) => country.name.toLowerCase().includes(searchText));

  const handleChange = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  useEffect(() => {
    const subscribe = dispatch(fetchCountriesFromAPI());
    return subscribe;
  }, []);

  return (
    <section className="countries">
      <BaseCountry />
      <Form onChange={handleChange} />
      <ul className="country-list">
        { countries.length > 0 ? countries.slice(0, 10).map((country) => {
          const countryMap = countryMapSource(country.name);
          const floatNumber = parseFloat(country.today_confirmed);
          const floatNumberFormat = floatNumber.toLocaleString('en');
          return (
            <li key={country.id} className="country-list-item">
              <Link to={{ pathname: country.name }}>
                <FaRegArrowAltCircleRight className="arrow mb-1" />
                <div className="map-box">
                  <img src={countryMap} alt={`${country.name} map`} className="map-images" />
                </div>
                <p className="country-info fw fs-1">{country.name.toUpperCase()}</p>
                <p className="country-info mb-1 fs-1">{floatNumberFormat}</p>
              </Link>
            </li>
          );
        }) : (
          <div className="not-found flex">
            <div className="error-box flex">
              <FaExclamationTriangle style={{ width: '40px', height: '40px' }} />
              <p>No Country Found!</p>
            </div>
          </div>
        )}
      </ul>
    </section>
  );
};

export default Home;
