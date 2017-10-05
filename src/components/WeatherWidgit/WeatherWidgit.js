import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './WeatherWidgit.css'

class WeatherWidgit extends Component {
  render () {
    return (
      <p>hi hi hi</p>
    )
  }
}

export default WeatherWidgit

WeatherWidgit.propTypes = {
  high: PropTypes.number.isRequired,
  low: PropTypes.number.isRequired
};
