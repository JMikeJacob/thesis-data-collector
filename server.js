var express = require('express')
var app = express()
require('dotenv').config()
var bodyParser = require('body-parser')
var gather = require('./controllers/gather-resource')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/gather', gather)

var port = process.env.port || 5000

app.listen(port, () => {
  console.log('App running at port:', port)
})