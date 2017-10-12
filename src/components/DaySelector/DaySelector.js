import React, { Component } from 'react'
import './DaySelector.css'

class DaySelector extends Component {
  state = {
    daysOfWeek: []
  }

  createWeekFromToday = () => {
    const today = new Date().getDay()
    const daysOfWeek = ['Sunday', 'Monday', 'Teusday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const removedDays = daysOfWeek.splice(0, today)
    return daysOfWeek.concat(removedDays, daysOfWeek[0])
  }

  componentDidMount () {
    this.setState({ daysOfWeek: this.createWeekFromToday() })
  }

  render () {
    const { daysOfWeek } = this.state
    return (
      <select>
        {daysOfWeek.map((day, index) =>
          <option key={`${day}-${index}`} value={index}>{day}</option>
        )}
      </select>
    )
  }
}

export default DaySelector
