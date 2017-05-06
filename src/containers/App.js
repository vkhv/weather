import React, { Component } from 'react';
import { connect  } from 'react-redux'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Input from '../components/Input';
import { combineReducers, bindActionCreators  } from 'redux';
import { Provider  } from 'react-redux';
import * as pageActions from '../actions/WeatherActions';
import CircularProgress from 'material-ui/CircularProgress';


class App extends Component {
  render() {
		  console.log(this.props.weatherApiAnswer);
	return (
		<div>

				<MuiThemeProvider>
					<div>
						<Input setWeather={this.props.pageActions.setWeather} />

						// Добавить спиннер на загрузку
						{
							this.props.weatherApiAnswer && this.props.weatherApiAnswer.fetch &&
								<CircularProgress />
						}

						// Отрисовать данные
						{
							this.props.weatherApiAnswer && this.props.weatherApiAnswer.data &&
								this.props.weatherApiAnswer.data[0].temp
						}
					</div>
				</MuiThemeProvider>
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

