import currentDate from '../../dateUpdator';

const initialState = [];

const BASE_COUNTRY_URL = `https://api.covid19tracking.narrativa.com/api/${currentDate}/country/nigeria`;

const NIGERIA_BASE = 'baseCountry/NIGERIA_BASE';

export const loadMyBaseCountry = (country) => ({
  type: NIGERIA_BASE,
  payload: country,
});

export const getNigeriaDetails = () => async (dispatch) => {
  const request = await fetch(BASE_COUNTRY_URL);
  const response = await request.json();
  const result = Object.values(response.dates[currentDate].countries);
  dispatch(loadMyBaseCountry(result));
};

const baseCountryReducer = (state = initialState, action) => {
  switch (action.type) {
    case NIGERIA_BASE:
      return action.payload;
    default:
      return state;
  }
};

export default baseCountryReducer;
