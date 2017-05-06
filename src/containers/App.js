import React, { Component } from 'react';
import { connect  } from 'react-redux'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Input from '../components/Input';
import { bindActionCreators  } from 'redux';
import * as pageActions from '../actions/WeatherActions';
import CircularProgress from 'material-ui/CircularProgress';


class App extends Component {
  render() {
	return (
		<MuiThemeProvider>
			<div>
				<Input setWeather={this.props.pageActions.setWeather} />
				{
					// Добавить спиннер на загрузку
					this.props.weatherApiAnswer && this.props.weatherApiAnswer.fetch &&
						<CircularProgress />
				}
				{
					// Отрисовать данные
					this.props.weatherApiAnswer && this.props.weatherApiAnswer.data &&
						<div>
							<span>Temperature - {this.props.weatherApiAnswer.data[0].temp}</span>
							<br />
							<span>Preasure - {this.props.weatherApiAnswer.data[0].pres}</span>
							<br />
							<span>Relative Humidity - {this.props.weatherApiAnswer.data[0].rh}</span>
						</div>
				}
			</div>
		</MuiThemeProvider>
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

