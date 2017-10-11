import { combineReducers } from 'redux'


function forecast (state = {}, action) {
  // put 10 day forecase data into object and change index based on day selected
  switch (action.type) {
    case CHANGE_SELCTED_FORECAST :
      const { index } = action
      return {
        ...state,
      [selectedForecast]: state[index]
      }
  }
}

// function location (state = defaultLocation, action) {
// const defaultLocation = {
//   lat: '39.976520039',
//   long: '-105.2621530105'
// }
//   // access user location from navigator.geolocation
//   console.log('hi')
//   const { lat, long } = action
//
//   switch (action.type) {
//     case CHANGE_LOCATION :
//       return {
//         ...state,
//         lat: state[lat],
//         long: state[long]
//       }
//     default :
//       return state
//   }
// }

export default combineReducers({
  forecast
})
