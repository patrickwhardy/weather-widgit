'use strict'

let express = require('express')
let request = require('superagent')
const config = require('./config')
const darkSkyBaseUrl = 'https://api.darksky.net/forecast/'
const PORT = process.env.PORT || 8080

let app = express()

app.get('/forecast', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  request.get(`${darkSkyBaseUrl}36672273b73cca970772eb1c684952ba/39.976520039,-105.2621530105`).end((err, response) => {
    res.send(JSON.parse(response.text))
  })
})

app.listen(PORT, function() {
  console.log('Production Express server running at localhost: ' + PORT)
})
