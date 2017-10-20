import React, { Component } from 'react'
import * as DarkSkyAPI from '../../utils/DarkSkyAPI'
import WeatherWidgit from '../../components/WeatherWidgit/WeatherWidgit'
import { connect } from 'react-redux'
import './WeatherWidgitContainer.css'

class WeatherWidgitContainer extends Component {
  state = {
    forecastData: {},
    forecastIndex: 0
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.latitude) {
      DarkSkyAPI.getForecast(nextProps.location).then((response) => {
        this.setState({
          forecastData: response.daily.data
        })
      })
    }
  }

  setWeatherData = (index = this.state.forecastIndex) => {
    const selectedForecast = this.state.forecastData[index]
    return selectedForecast ?
      {
        high: parseInt(selectedForecast.temperatureMax, 10),
        low: parseInt(selectedForecast.temperatureMin, 10),
        wind: parseInt(selectedForecast.windSpeed, 10),
        precip: parseInt(selectedForecast.precipProbability * 100, 10),
        icon: selectedForecast.icon,
      } : {}
  }

  render () {
    const selectedWeatherData = this.setWeatherData(this.props.forecastIndex)

    return (
      <div className="widgit-container">
        { selectedWeatherData.high ?
          <WeatherWidgit {...selectedWeatherData} />
        : null }
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    forecastIndex: state.forecast.forecastIndex
  }
}

export default connect(
  mapStateToProps
)(WeatherWidgitContainer)
