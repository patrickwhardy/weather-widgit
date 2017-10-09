'use strict'

let express = require('express')
let request = require('superagent')
const DARK_SKY_KEY = require('./config').DARK_SKY_KEY
const darkSkyBaseUrl = 'https://api.darksky.net/forecast/'
const PORT = process.env.PORT || 8080

let app = express()

app.get('/forecast', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  request.get(`${darkSkyBaseUrl}${DARK_SKY_KEY}/39.976520039,-105.2621530105`).end((err, response) => {
    res.send(JSON.parse(response.text))
  })
})

app.listen(PORT, function() {
  console.log('Production Express server running at localhost: ' + PORT)
})
