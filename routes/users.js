var express = require('express')
var userService = require('../services/userService.js')
const passport = require('passport')
const jwt = require('jsonwebtoken')
var jwtSecret = require('../utils/constUtils.js').jwtsecret
var router = express.Router()

router.post('/login', async function (req, res) {
    passport.authenticate(
        'local',
        {session: false},
        (error, user) => {
            if (error || !user) {
                res.status(400).json({error})
            }
            /** This is what ends up in our JWT */
            const payload = {
                idUser: user.iduser,
                name: user.name,
                surname: user.surname,
                mail: user.mail,
                iat: Date.now() + 100000000,
            }

            /** assigns payload to req.user */
            req.login(payload, {session: false}, (error) => {
                if (error) {
                    res.status(400).send({error})
                }

                /** generate a signed json web token and return it in the response */
                const token = jwt.sign(JSON.stringify(payload), jwtSecret)

                /** assign our jwt to the cookie */
                res.set('Authorization', 'Bearer ' + token)
                res.status(200).json(user.idUser)
            })
        },
    )(req, res)
    // const mail = req.body.mail
    // const password = req.body.password
    //
    // if (typeof mail === 'undefined' || typeof password === 'undefined') {
    //     res.status(400).json({errorMessage: 'Login or password not found in request.'})
    // } else {
    //     try {
    //         if (await userService.authenticate(mail, password)) {
    //             req.session.mail = mail // Initialising user session
    //             res.status(200).json({mail: mail})
    //         } else {
    //             res.status(401).json({errorMessage: 'Incorrect credentials.'})
    //         }
    //     } catch (e) {
    //         res.status(500).json({errorMessage: 'Database error'})
    //     }
    // }
})


router.post('/register', async function (req, res) {
    const mail = req.body.mail
    const password = req.body.password
    const name = req.body.name
    const surname = req.body.surname

    if (typeof mail === 'undefined' || typeof password === 'undefined' || typeof name === 'undefined' || typeof surname === 'undefined') {
        res.status(400).json({errorMessage: 'Mail, password, name or surname not found in request.'})
    } else {
        try {
            let idUser
            if ((idUser = await userService.register(mail, password, name, surname)) !== undefined) {
                req.session.mail = mail // Initialising user session
                res.status(201).json({idUser: idUser})
            } else {
                res.status(409).json({errorMessage: 'Mail already exists'})
            }
        } catch (e) {
            res.status(500).json({errorMessage: 'Database error'})
        }
    }
})


module.exports = router
