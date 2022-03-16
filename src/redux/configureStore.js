import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import countriesReducer from './countries/countries';
import baseCountryReducer from './countries/baseCountry';

const reducer = combineReducers({
  countriesReducer, baseCountryReducer,
});
const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
