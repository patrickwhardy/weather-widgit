import React, { Component } from 'react'
import WeatherWidgit from '../../components/WeatherWidgit/WeatherWidgit'
import './WeatherWidgitContainer.css'

class WeatherWidgitContainer extends Component {
  render () {
    return (
      <div class="widgit-container">
        <WeatherWidgit />
      </div>
    )
  }
}

export default WeatherWidgitContainer
