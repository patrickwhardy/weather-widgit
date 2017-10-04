import React, { Component } from 'react';
import WeatherWidgitContainer from './views/WeatherWidgit/WeatherWidgitContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherWidgitContainer />
      </div>
    );
  }
}

export default App;
