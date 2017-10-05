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
    const high = parseInt(SampleResponse.daily.data[0].temperatureMax)
    const low = parseInt(SampleResponse.daily.data[0].temperatureMin)
    const wind = parseInt(SampleResponse.daily.data[0].windSpeed)
    const precip = parseInt(SampleResponse.daily.data[0].precipProbability * 100)
    const humidity = parseInt(SampleResponse.daily.data[0].humidity * 100)
    const icon = SampleResponse.daily.data[0].icon

    console.log(high, low, wind, precip, icon, humidity)

    return (
      <div className="widgit-container">
        <WeatherWidgit high={high} low={low} wind={wind} precip={precip} humidity={humidity} icon={icon}/>
      </div>
    )
  }
}

export default WeatherWidgitContainer
