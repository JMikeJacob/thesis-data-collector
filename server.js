var express = require('express')
var app = express()
var port = 5000

var gather = require('./controllers/gather-resource')
app.use('/gather', gather)

app.listen(port)