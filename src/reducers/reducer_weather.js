import { FETCH_WEATHER_SUCCESS } from "../actions/index";
import { FETCH_WEATHER_ERROR } from "../actions/index";
import { FETCH_WEATHER_REQUEST } from "../actions/index";

export default function(
  state = {
    list: [],
    message: null,
    isLoading: false
  },
  action
) {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return {
        list: [],
        message: null,
        isLoading: true
      };

    case FETCH_WEATHER_SUCCESS:
      return {
        list: [action.payload.data, ...state.list],
        message: null,
        isLoading: false
      }; 

    case FETCH_WEATHER_ERROR:
      return {
        list: [...state.list],
        message: action.payload,
        isLoading: false
      };
  }
  return state;
}
