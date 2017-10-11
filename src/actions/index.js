export const CHANGE_SELCTED_FORECAST = 'CHANGE_SELCTED_FORECAST'

export function changeSelectedForecast ({ index }) {
  return {
    type: CHANGE_SELCTED_FORECAST,
    index,
  }
}
