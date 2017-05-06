import {
	GET_WEATHER_REQUEST, GET_WEATHER_SUCCESS, GET_WEATHER_FAILURE
} from '../constants/Weather'

const initialState = {
	weatherApiAnswer: {},
}

export default function weather(state = initialState, action) {

	switch (action.type) {
		case GET_WEATHER_REQUEST:
			return { ...state, weatherApiAnswer: {fetch: true} }

		case GET_WEATHER_SUCCESS:
			return { ...state, weatherApiAnswer: action.payload }

		case GET_WEATHER_FAILURE:
			return { ...state, weatherApiAnswer: {fetch: false, error: true}  }

	default:
		return state;
	}

}
