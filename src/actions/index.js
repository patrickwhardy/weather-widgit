export const CHANGE_SELCTED_FORECAST = 'CHANGE_SELCTED_FORECAST'

export function changeSelectedForecast ({ forecastIndex }) {
  return {
    type: CHANGE_SELCTED_FORECAST,
    forecastIndex,
  }
}
