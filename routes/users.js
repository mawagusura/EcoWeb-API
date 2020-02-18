var express = require('express')
var userService = require('../services/userService.js')
var router = express.Router()

router.post('/login', async function (req, res) {
    const mail = req.body.mail
    const password = req.body.password

    if (typeof mail === 'undefined' || typeof password === 'undefined') {
        res.status(400).json({errorMessage: 'Login or password not found in request.'})
    } else {
        try {
            if (await userService.authenticate(mail, password)) {
                req.session.mail = mail // Initialising user session
                res.status(200).json({mail: mail})
            } else {
                res.status(401).json({errorMessage: 'Incorrect credentials.'})
            }
        } catch (e) {
            res.status(500).json({errorMessage: 'Database error'})
        }
    }
})

module.exports = router
