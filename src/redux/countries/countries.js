import currentDate from '../../dateUpdator';

const initialState = [];

const BASE_URL = `https://api.covid19tracking.narrativa.com/api/${currentDate}`;

const FETCH_COUNTRIES = 'countries/FETCH_COUNTRIES';

export const fetchedCountries = (countries) => ({
  type: FETCH_COUNTRIES,
  payload: countries,
});

export const fetchCountriesFromAPI = () => async (dispatch) => {
  const request = await fetch(BASE_URL);
  const response = await request.json();
  const result = Object.values(response.dates[currentDate].countries);
  dispatch(fetchedCountries(result));
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return action.payload;
    default:
      return state;
  }
};

export default countriesReducer;
