import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
// TODO добавить и оптимизировать автосаджест
//import cities from './cities_20000.json';
//const citiesName = cities.map(city => city.city_name);
const cities = ['London', 'Limassol', 'Saint-petersburg'];

export default class Input extends Component {
	state = {
		city: localStorage.getItem('city') || '',
	};

  handleUpdateInput = (city) => {
		this.setState({
			city: city,
		});
	};

	handleNewRequest = () => {
		const city = this.state.city;
		this.props.setWeather(city)
		localStorage.setItem('city', city)
		this.setState({
		searchText: city
		});
	};

	render() {
		return (
			<div>
				<AutoComplete
					hintText="Type cityname"
					searchText={this.state.city}
					onUpdateInput={this.handleUpdateInput}
					onNewRequest={this.handleNewRequest}
					dataSource={cities}
					filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
					openOnFocus={true}
				/>
			</div>
		);
	}
}
