 export const getForecast = (lat, long) => {
   return fetch('http://localhost:8080/forecast').then(response => {
     return response.json().then(data => {
       return data
     })
   })
 }
