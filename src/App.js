import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Input from './components/Input';

class App extends Component {
  render() {
	return (
		<MuiThemeProvider>
			<Input />
		</MuiThemeProvider>
	);
  }
}

export default App;
