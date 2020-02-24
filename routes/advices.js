var express = require('express')
var router = express.Router()
var adviceService = require('../services/adviceService')

router.get('/', async function (req, res) {
    try {
        let advices = await adviceService.listAll()
        res.status(200).json(advices)
    } catch (e) {
    console.log(e)
    res.status(500).json({errorMessage: 'Database error'})
}

})

module.exports = router
