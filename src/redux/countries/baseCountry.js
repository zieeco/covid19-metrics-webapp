import currentDate from '../../dateUpdator';

const BASE_COUNTRY_URL = `https://api.covid19tracking.narrativa.com/api/${currentDate}/country/nigeria`;
const initialState = [];

const NIGERIA_BASE = 'countries/baseCountry/NIGERIA_BASE';

export const loadMyBaseCountry = (nigeria) => ({
  type: NIGERIA_BASE,
  payload: nigeria,
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
