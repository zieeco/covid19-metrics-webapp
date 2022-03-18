import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import currentDate from '../dateUpdator';
import countryMapSource from '../countryData/countryMaps';

const CountryDetails = () => {
  const [myCountry, setMyCountry] = useState([]);
  const { country } = useParams();
  const BASE_URL = `https://api.covid19tracking.narrativa.com/api/${currentDate}/country/${country}`;

  const fetchSingleCountry = async () => {
    const request = await fetch(BASE_URL);
    const response = await request.json();
    const result = Object.values(response.dates[currentDate].countries);
    setMyCountry(result);
  };

  useEffect(() => {
    const fetched = fetchSingleCountry();
    return fetched;
  }, []);

  return (
    <ul className="country-detail d-flex">
      {myCountry.map((country) => {
        const countryMap = countryMapSource(country.name);
        const a = parseInt(country.today_confirmed, 10);
        const b = parseInt(country.today_deaths, 10);
        const c = parseInt(country.today_new_confirmed, 10);
        const d = parseInt(country.today_new_deaths, 10);
        const e = parseInt(country.today_new_open_cases, 10);
        const f = parseInt(country.today_new_recovered, 10);
        const g = parseInt(country.today_open_cases, 10);
        const h = parseInt(country.today_recovered, 10);
        const sum = a + b + c + d + e + f + g + h;
        return (
          <li key={country.id} className="country-detail-list flex">
            <div className="country-detail-wrapper flex">
              <div className="country-detail-img-box flex">
                <img className="map-images" src={countryMap} alt={`${country.name} images`} />
              </div>
              <div className="country-detail-summary d-flex">
                <p className="fw mb-ii">{country.name.toUpperCase()}</p>
                <p className="fw mb-ii">{currentDate}</p>
                <p className="fw mb-ii">{country.source}</p>
              </div>
            </div>
            <div className="country-detail-body d-flex">
              <p className="country-detail-summary-text">
                Today Confirmed Cases:
                {' '}
                <span>{parseFloat(country.today_confirmed).toLocaleString('en')}</span>
              </p>
              <p className="country-detail-summary-text">
                Today Opened Cases:
                {' '}
                <span>{parseFloat(country.today_open_cases).toLocaleString('en')}</span>
              </p>
              <p className="country-detail-summary-text">
                Today Death Cases:
                {' '}
                <span>{parseFloat(country.today_deaths).toLocaleString('en')}</span>
              </p>
              <p className="country-detail-summary-text">
                Total Cases:
                {' '}
                <span>{parseFloat(sum).toLocaleString('en')}</span>
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CountryDetails;
