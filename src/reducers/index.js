import { combineReducers } from 'redux'

import {
  CHANGE_SELCTED_FORECAST
} from '../actions'


function forecast (state = {}, action) {
  switch (action.type) {
    case CHANGE_SELCTED_FORECAST :
      const { forecastIndex } = action
      return {
        ...state,
      forecastIndex: forecastIndex
      }
    default :
      return state
  }
}

export default combineReducers({
  forecast
})
