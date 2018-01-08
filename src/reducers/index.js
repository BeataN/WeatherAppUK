import { combineReducers } from "redux";
import WeatherReducer from "./reducer_weather";

const rootReducer = combineReducers({
  cityWeather: WeatherReducer
});

export default rootReducer;
