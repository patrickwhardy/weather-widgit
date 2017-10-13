import React, { Component } from 'react'
import * as DarkSkyAPI from '../../utils/DarkSkyAPI'
import WeatherWidgit from '../../components/WeatherWidgit/WeatherWidgit'
import { connect } from 'react-redux'
import { changeSelectedForecast } from '../../actions'
import './WeatherWidgitContainer.css'

class WeatherWidgitContainer extends Component {
  state = {
    forecastData: {},
    forecastIndex: 0
  }

  componentDidMount() {
    DarkSkyAPI.getForecast().then((response) => {
      this.setState({
        forecastData: response.daily.data
      })
    })
  }

  setWeatherData = (index = this.state.forecastIndex) => {
    if (this.state.forecastData[index]) {
      const selectedForecast = this.state.forecastData[index]
      return {
        high: parseInt(selectedForecast.temperatureMax, 10),
        low: parseInt(selectedForecast.temperatureMin, 10),
        wind: parseInt(selectedForecast.windSpeed, 10),
        precip: parseInt(selectedForecast.precipProbability * 100, 10),
        icon: selectedForecast.icon,
      }
    } else {
      return {}
    }
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
  mapStateToProps,
  { changeSelectedForecast }
)(WeatherWidgitContainer)
