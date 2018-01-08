import axios from "axios";

const API_KEY = "a96dce387f6a008e2ce0eb44c585a89a";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const FETCH_WEATHER_REQUEST = "FETCH_WEATHER_REQUEST";
export const FETCH_WEATHER_ERROR = "FETCH_WEATHER_ERROR";

const fetchWeatherSuccess = weatherData => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: weatherData
});

const fetchWeatherError = errorMessage => ({
  type: FETCH_WEATHER_ERROR,
  payload: errorMessage
});

const fetchWeatherRequest = () => ({
  type: FETCH_WEATHER_REQUEST
});

export function fetchWeather(city) {
  return dispatch => {
    const url = `${ROOT_URL}&q=${city},uk`; // uk - static country code

    dispatch(fetchWeatherRequest());

    axios
      .get(url)
      .then(response => {
        console.log("response=", response);
        dispatch(fetchWeatherSuccess(response));
      })
      .catch(error => {
        console.log("error=", error.response);
        dispatch(fetchWeatherError(error.response.data.message));
      }); //it'll return a promise
  };
}
