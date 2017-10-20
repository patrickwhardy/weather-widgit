 export const getForecast = (location) => {
   let url = new URL('http://localhost:8080/forecast')
   Object.keys(location).forEach(key => url.searchParams.append(key, location[key]))
   return fetch(url).then(response => {
     return response.json().then(data => {
       return data
     })
   })
 }
