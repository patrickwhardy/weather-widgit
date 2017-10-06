import React, { Component } from 'react'
import * as DarkSkyAPI from '../../utils/DarkSkyAPI'
import WeatherWidgit from '../../components/WeatherWidgit/WeatherWidgit'
import SampleResponse from './sample_response'
import './WeatherWidgitContainer.css'

class WeatherWidgitContainer extends Component {
  state = { weatherData: {} }

  componentDidMount() {
    DarkSkyAPI.getForecast().then((response) => {
      const today = response.daily.data[0]
      this.setState({ weatherData: {
          high: parseInt(today.temperatureMax, 10),
          low: parseInt(today.temperatureMin, 10),
          wind: parseInt(today.windSpeed, 10),
          precip: parseInt(today.precipProbability * 100, 10),
          humidity: parseInt(today.humidity * 100, 10),
          icon: today.icon,
        }
      })
    })
  }

  render () {
    const { weatherData } = this.state

    return (
      <div className="widgit-container">
        <WeatherWidgit {...weatherData} />
      </div>
    )
  }
}

export default WeatherWidgitContainer
