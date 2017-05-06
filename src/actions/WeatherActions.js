export function setWeather(weatherApiAnswer) {
	return {
		type: 'SET_WEATHER',
		payload: weatherApiAnswer
	}
}
