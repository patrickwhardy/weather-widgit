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

const calculateOuterHue = temp => {
  if (temp > 108) {
    temp = 108
  } else if (temp < -5) {
    temp = -5
  }
  return 260 - temp * 2.5
}

const WeatherWidgit = ({ high, low, wind, precip, humidity, icon }) => {
  const iconPath = icon ? setIconPath(icon) : ''
  const outerHue = calculateOuterHue(high)

  return (
    <div className="outer-circle" style={{background: `linear-gradient(-45deg, hsl(${outerHue}, 70%, 50%), hsl(${outerHue + 20}, 70%, 50%))`}}>
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
