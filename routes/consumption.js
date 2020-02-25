var express = require('express');
var router = express.Router();
const passport = require('passport')
var consoService = require('../services/consumptionService')

router.post('/add', passport.authenticate('jwt', { session: false}), async function(req, res){
    const mail = req.body.mail
    const conso = req.body.conso
    if (typeof mail === 'undefined' || typeof conso === 'undefined') {
        res.status(400).json({errorMessage: 'Mail or conso not found in request.'})
    } else if(isNaN(conso)){
        res.status(400).json({errorMessage: 'conso should be a Double'})
    } else if (conso < 0){
        res.status(400).json({errorMessage: 'conso should be positive'})
    } else {
        try {
            let consoObj = await consoService.addConsumption(mail, conso)
            if (consoObj) {
                res.status(201).json({consumption: consoObj.consumptionAmount})
            } else {
                res.status(409).json({errorMessage: 'User not found'})
            }
        } catch (e) {
            console.log(e)
            res.status(500).json({errorMessage: 'Database error'})
        }
    }
})


module.exports = router;
