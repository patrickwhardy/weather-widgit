import React, { Component } from 'react';
import WeatherWidgitContainer from './views/WeatherWidgit/WeatherWidgitContainer'
import DaySelector from './components/DaySelector/DaySelector'
import { changeSelectedForecast } from './actions'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DaySelector />
        <WeatherWidgitContainer />
      </div>
    );
  }
}

export default App;
