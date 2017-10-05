import React, { Component } from 'react'
import './WeatherWidgit.css'

const WeatherWidgit = ({ high, low, wind, precip, humidity, icon }) => {
  console.log(high, low, wind, precip, humidity, icon)
  return (
    <div className="outer-circle">
      <p>{high}</p>
      <div className="inner-circle">
      </div>
    </div>
  )
}

export default WeatherWidgit
