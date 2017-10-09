import React from 'react'
import ReactSVG from 'react-svg'
import './WeatherWidgit.css'

const setIconPath = icon => {
  if (/^(clear-day|clear-night|rain|snow|sleet|wind|fog|cloudy|partly-cloudy-day|partly-cloudy-night)$/.test(icon)) {
      return `./icons/${icon}.svg`
  } else {
      return `./icons/clear-day.svg`
  }
}

const WeatherWidgit = ({ high, low, wind, precip, humidity, icon }) => {
  const iconPath = icon ? setIconPath(icon) : ''

  return (
    <div className="outer-circle">
      <span>{high}°  {low}°</span>
      <div className="inner-circle">
        <ReactSVG
          path={iconPath}
          className="weather-icon"
        />
      </div>
      <span>{wind}mph {precip}%</span>
    </div>
  )
}

export default WeatherWidgit
