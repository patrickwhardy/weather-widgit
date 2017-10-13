import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeSelectedForecast } from '../../actions'
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

  updateSelectedDay = (event) => {
    this.props.changeSelectedForecast({ forecastIndex: event.target.value })
  }

  componentDidMount () {
    this.setState({ daysOfWeek: this.createWeekFromToday() })
  }

  render () {
    const { daysOfWeek } = this.state
    return (
      <select onChange={this.updateSelectedDay}>
        {daysOfWeek.map((day, index) =>
          <option key={`${day}-${index}`} value={index}>{day}</option>
        )}
      </select>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    forecastIndex: state.forecastIndex
  }
}

export default connect(
  mapStateToProps,
  {changeSelectedForecast}
)(DaySelector)
