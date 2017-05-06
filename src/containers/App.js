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
	return (
		<div>

				<MuiThemeProvider>
					<Input setWeather={this.props.pageActions.setWeather} />
				</MuiThemeProvider>
			{
				this.props.weatherApiAnswer && this.props.weatherApiAnswer.city_name
			}
		</div>
	);
  }
}

function mapStateToProps (state) {
	return {
		weatherApiAnswer: state.weatherApiAnswer
	}

}

function mapDispatchToProps(dispatch) {
		return {
			pageActions: bindActionCreators(pageActions, dispatch)
		}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

