import React, { Component } from 'react'
// import * as DarkSkyAPI from '../../utils/DarkSkyAPI'
import WeatherWidgit from '../../components/WeatherWidgit/WeatherWidgit'
import SampleResponse from './sample_response'
import './WeatherWidgitContainer.css'

class WeatherWidgitContainer extends Component {
  componentDidMount() {
    // TODO: put this request in a node proxy
    // DarkSkyAPI.getForecast('42.3601', '-71.0589').then((forecast) => {
    //   console.log('forecast', forecast)
    // })
    console.log(SampleResponse)
  }

  render () {
    const weatherData = {
      high: parseInt(SampleResponse.daily.data[0].temperatureMax, 10),
      low: parseInt(SampleResponse.daily.data[0].temperatureMin, 10),
      wind: parseInt(SampleResponse.daily.data[0].windSpeed, 10),
      precip: parseInt(SampleResponse.daily.data[0].precipProbability * 100, 10),
      humidity: parseInt(SampleResponse.daily.data[0].humidity * 100, 10),
      icon: SampleResponse.daily.data[0].icon,
    }


    console.log(weatherData)

    return (
      <div className="widgit-container">
        <WeatherWidgit {...weatherData} />
      </div>
    )
  }
}

export default WeatherWidgitContainer
