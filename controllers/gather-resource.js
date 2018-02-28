var router = require('express').Router()

router.post('/', (req, res) => {
    var fs = require('fs');
    var csvWriter = require('csv-write-stream')

    const headers = [
        'lat','long', 'pga', 'pgd', 'pgv',
        'T0.050S', 'T0.100S', 'T0.150S', 'T0.200S', 'T0.250S',
        'T0.300S', 'T0.350S', 'T0.400S', 'T0.450S', 'T0.500S',
        'T0.550S', 'T0.600S', 'T0.650S', 'T0.667S', 'T0.700S',
        'T0.750S', 'T0.800S', 'T0.850S', 'T0.900S', 'T0.950S'
    ]

    var writer = csvWriter({
        headers,
        sendHeaders: false
    })

    var Displacement = req.body.Displacement
    var PGA = req.body.PGA
    var PGV = req.body.PGV
    var PGD = req.body.PGD
    var Latitude = req.body.Latitude
    var Longitude = req.body.Longitude

    var dataRow = []
    dataRow = dataRow.concat([Latitude, Longitude, PGA, PGV, PGD])
    dataRow = dataRow.concat(Displacement)

    var data = {}
    for(var i = 0; i < headers.length; i++){
        data[headers[i]] = dataRow[i]
    }

    
    console.log('Data:', data)
    
    writer.pipe(fs.createWriteStream('Not_earthquakes.csv', { flags: 'a' }))
    writer.write(data)
    writer.end()

    res.send('Finished')
})

router.get('/', (req,res) => {
    res.send('TODO')
})

module.exports = router