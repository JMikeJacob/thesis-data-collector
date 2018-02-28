var router = require('express').Router()


router.post('/', (req, res) => {
    var disp = req.body.Displacement
    var PGA = req.body.PGA
    var PGV = req.body.PGV
    var PGD = req.body.PGD
    var lat = req.body.Latitude
    var long = req.body.Longitude

    var dataRow = []
    dataRow.push(lat)
    dataRow.push(long)
    dataRow.push(PGA)
    dataRow.push(PGV)
    dataRow.push(PGD)
    dataRow.concat(disp)

    res.send('Hello World')
})

router.get('/', (req,res) => {
    res.send('TODO')
})

module.exports = router