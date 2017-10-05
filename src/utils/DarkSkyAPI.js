import config from '../config'
const baseUrl = 'https://api.darksky.net/forecast/'

const headers = {
 'Accept': 'application/json',
 'Access-Control-Allow-Headers': 'Content-Type, Authorization'
}

 export const getForecast = (lat, long) =>
  fetch(`${baseUrl}${config.DARK_SKY_KEY}/${lat},${long}`, { headers })
    .then(res => res)
