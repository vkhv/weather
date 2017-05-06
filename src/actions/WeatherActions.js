import {
	GET_WEATHER_REQUEST, GET_WEATHER_SUCCESS, GET_WEATHER_FAILURE
} from '../constants/Weather'


export function setWeather(city) {

		return (dispatch) => {

			dispatch({
				type: GET_WEATHER_REQUEST
			});

			fetch(`http://api.weatherbit.io/v1.0/forecast/3hourly/geosearch?city=${city}&key=2898e0ac44a445ac91205bc4339a07c8`)
				.then(res => res.json())
					.then(weatherApiAnswer => {
					dispatch({
						type: GET_WEATHER_SUCCESS,
						payload: weatherApiAnswer
					});
				})
				.catch(err => dispatch({type: GET_WEATHER_FAILURE, payload: err}))
		}
}
