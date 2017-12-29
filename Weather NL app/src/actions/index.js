import axios from 'axios';

const API_KEY = 'edfc2367175c9b52e97cc94712b38dce';
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const Fetch_Weather = 'Fetch-Weather';

export function fetchWeather(city) {
const url = `${API_URL}&q=${city},nl`;
const request = axios.get(url);
    return {
        type: Fetch_Weather,
        payload: request
    };
}