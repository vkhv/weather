const initialState = {
	weather: 'Погода еще не известна...',
}

export default function weather(state = initialState, action) {

  switch (action.type) {
    case 'SET_WEATHER':
      return { ...state, weather: action.payload }

    default:
      return state;
  }

}
