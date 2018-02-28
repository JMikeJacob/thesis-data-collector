var router = require('express').Router()

var fs = require('fs');
var csvWriter = require('csv-write-stream')

var writer = csvWriter()

router.post('/', (req, res) => {
    var Displacement = req.body.Displacement
    var PGA = req.body.PGA
    var PGV = req.body.PGV
    var PGD = req.body.PGD
    var Latitude = req.body.Latitude
    var Longitude = req.body.Longitude

    var dataRow = { Latitude, Longitude, PGA, PGV, PGD, Displacement }
    
    writer.pipe(fs.createWriteStream('Not_earthquakes.csv', { flags: 'a' }))
    writer.write({hello: "world", foo: "bar", baz: "taco"})
    writer.end()

    res.send('Finished')
})

router.get('/', (req,res) => {
    res.send('TODO')
})

module.exports = router