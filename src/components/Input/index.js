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
    searchText: '',
  };

  handleUpdateInput = (searchText) => {
    this.setState({
      searchText: searchText,
    });
  };

  handleNewRequest = () => {
	fetch(`http://api.weatherbit.io/v1.0/forecast/3hourly/geosearch?city=${this.state.searchText}&key=2898e0ac44a445ac91205bc4339a07c8`)
		.then(res => res.json())
		.then(weatherApiAnswer => this.setState(prevState => Object.assign({}, prevState, {weatherApiAnswer})))
		.catch(err => alert('Error! Please chose the correct city.'))

    this.setState({
      searchText: this.state.searchText,
    });
  };

  render() {
    return (
      <div>
        <AutoComplete
          hintText="Type cityname"
          searchText={this.state.searchText}
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
