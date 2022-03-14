import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import currentDate from '../dateUpdator';
// import { fetchCountriesFromAPI } from '../redux/countries/countries';

const CountryDetails = () => {
  const { country } = useParams();
  const BASE_URL = `https://api.covid19tracking.narrativa.com/api/${currentDate}/country/${country}`;

  const [myCountry, setMyCountry] = useState([]);

  const fetchSingleCountry = async () => {
    const req = await fetch(BASE_URL);
    const res = await req.json();
    const result = Object.values(res.dates[currentDate].countries);
    setMyCountry(result);
  };

  useEffect(() => {
    if (myCountry.length === 0) {
      fetchSingleCountry();
    }
  }, []);

  return (
    <div>
      {myCountry.map((country) => (
        <ul key={country.id}>
          <li>{country.name}</li>
          <li>{country.today_confirmed}</li>
          <li>{country.today_deaths}</li>
          <li>{country.today_new_deaths}</li>
          <li>{country.today_recovered}</li>
          <li>{country.source}</li>
          <li>{country.total_recovered}</li>
          <li>{country.today_confirmed}</li>
        </ul>
      ))}
    </div>
  );
};

export default CountryDetails;

// "today_confirmed": 176409,
// "today_deaths": 7645,
// "today_new_confirmed": 208,
// "today_new_deaths": 2,
// "today_new_open_cases": 206,
// "today_new_recovered": 0,
// "today_open_cases": 86178,
// "today_recovered": 82586,}
