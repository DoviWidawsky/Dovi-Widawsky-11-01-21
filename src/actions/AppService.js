import { APP_ID } from "../Constants/Constants";

import axios from 'axios';

const API_HOST = 'https://dataservice.accuweather.com/';
const API_VERSION = 'v1';

const getLocationApiUrl = (term) => `${API_HOST}locations/${API_VERSION}/cities/geoposition/search?apikey=${APP_ID}&q=${term}`;

const getWeatherApiUrl = key => `${API_HOST}forecasts/${API_VERSION}/daily/5day/${key}?apikey=${APP_ID}`;

const getAutoCompleteUrl = (term) => `${API_HOST}locations/${API_VERSION}/cities/autocomplete?apikey=${APP_ID}&q=${term}`;

const getCurrentConditionsUrl = key => `${API_HOST}currentconditions/${API_VERSION}/${key}?apikey=${APP_ID}`;

export async function getAutoComplete(term){
  return await axios.get(getAutoCompleteUrl(term));
}

export async function getGeoPosition(term){
    return await axios.get(getLocationApiUrl(term));
}

export async function getCurrentConditions(key) {
  return await axios.get(getCurrentConditionsUrl(key));
}

export async function get5DaysOfForecasts(key) {
  return await axios.get(getWeatherApiUrl(key));
}