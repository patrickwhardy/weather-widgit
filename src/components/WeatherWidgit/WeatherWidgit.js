import React, { Component } from 'react'
import './WeatherWidgit.css'

const WeatherWidgit = ({ high, low, wind, precip, humidity, icon }) => {
  console.log(high, low, wind, precip, humidity, icon)
  return (
    <p>{high}</p>
  )
}

export default WeatherWidgit
