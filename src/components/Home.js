/* eslint-disable react/jsx-no-undef */
import React, { useEffect } from 'react';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import countryMapSource from '../countryData/countryMaps';
import { fetchCountriesFromAPI } from '../redux/countries/countries';
import BaseCountry from './BaseCountry';
import Form from './Form';

const Home = () => {
  const countries = useSelector((state) => state.countriesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountriesFromAPI());
  }, []);

  return (
    <section className="countries">
      <BaseCountry />
      <Form />
      <ul className="country-list">
        { countries.length > 0 ? countries.map((country) => {
          const countryMap = countryMapSource(country.name);
          const floatNumber = parseFloat(country.today_confirmed);
          const floatNumberFormat = floatNumber.toLocaleString('en');
          return (
            <li key={country.id} className="country-list-item">
              <Link to={{ pathname: country.name }}>
                <FaRegArrowAltCircleRight className="arrow mb-1" />
                <div className="map-box">
                  <img src={countryMap} alt="country map" className="map-images" />
                </div>
                <p className="country-info fw fs-1">{country.name.toUpperCase()}</p>
                <p className="country-info mb-1 fs-1">{floatNumberFormat}</p>
              </Link>
            </li>
          );
        }) : ''}
      </ul>
    </section>
  );
};

export default Home;
