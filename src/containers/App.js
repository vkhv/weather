import React, { Component } from 'react';
import { connect  } from 'react-redux'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Input from '../components/Input';
import { combineReducers, bindActionCreators  } from 'redux';
import { Provider  } from 'react-redux';
import * as pageActions from '../actions/WeatherActions';


class App extends Component {
  render() {
		  console.log(this.props.weather);
	return (
		<div>

				<MuiThemeProvider>
					<Input setWeather={this.props.pageActions.setWeather} />
				</MuiThemeProvider>
			{
					this.props.weather && this.props.weather.city_name
			}
		</div>
	);
  }
}

function mapStateToProps (state) {
	return {
		weather: state.weather
	}

}

function mapDispatchToProps(dispatch) {
		return {
			pageActions: bindActionCreators(pageActions, dispatch)
		}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

