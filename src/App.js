import React, { Component } from 'react';
import WeatherWidgitContainer from './views/WeatherWidgit/WeatherWidgitContainer'
import DaySelector from './components/DaySelector/DaySelector'
import './App.css'

class App extends Component {
  state = {
    location: {}
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        location: position.coords
      })
    })
  }

  render() {
    const {latitude, longitude} = this.state.location
    const coords = {latitude, longitude}
    return (
      <div className="App">
        { coords ?
          <div className="widgitContainer">
            <WeatherWidgitContainer location={coords}/>
            <DaySelector />
          </div>
        : null }
      </div>
    );
  }
}

export default App;
