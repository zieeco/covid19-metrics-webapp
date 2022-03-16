import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNigeriaDetails } from '../redux/countries/baseCountry';

const BaseCountry = () => {
  const myUrl = 'https://raw.githubusercontent.com/rachidelaid/worldMaps/main/maps/ng/vector.svg';
  const myCountry = useSelector((state) => state.baseCountryReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (myCountry.length === 0) {
      dispatch(getNigeriaDetails());
    }
  }, []);

  return (
    <div className="base-container flex">
      {myCountry.map((country) => {
        const floatNumber = parseFloat(country.today_confirmed);
        const floatNumberFormat = floatNumber.toLocaleString('en');
        return (
          <div key={country.id} className="base-ng flex">
            <div className="ng-box flex">
              <img src={myUrl} alt={`${country.name}'s map`} className="ng-img map-images" />
            </div>
            <div className="ng-body flex">
              <p className="fw fs-1">{country.name.toUpperCase()}</p>
              <p className="fw fs-1">{floatNumberFormat}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BaseCountry;
