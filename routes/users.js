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
            } else {
                /** This is what ends up in our JWT */
                const payload = {
                    idUser: user.iduser,
                    name: user.name,
                    surname: user.surname,
                    mail: user.mail,
                    exp: Date.now() + 100000000,
                }

                /** assigns payload to req.user */
                req.login(payload, {session: false}, (error) => {
                    if (error) {
                        res.status(400).send({error})
                    }

                    /** generate a signed json web token and return it in the response */
                    const token = jwt.sign(payload, jwtSecret)

                    /** assign our jwt to the authorization header */
                    //res.set('Authorization', 'Bearer ' + token)
                    res.status(200).json({
                        userId: user.userId,
                        token: token
                    })
                })
            }
        })(req, res)
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
            let user = await userService.register(mail, password, name, surname)
            console.log(user.userId)
            if (user !== undefined) {
                res.status(201).json({idUser: user.userId})
            } else {
                res.status(409).json({errorMessage: 'Mail already exists'})
            }
        } catch (e) {
            res.status(500).json({errorMessage: 'Database error'})
        }
    }
})

/**
 * Change the password of the connected user with a new one
 * @param mail         mailUtilisateur
 * @param oldPassword  ancien mot de passe
 * @param newPassword  nouveau mot de passe
 */
router.put('/changePassword', passport.authenticate('jwt', {session: false}), async function (req, res) {
    const mail = req.body.mail
    const oldPassword = req.body.oldPassword
    const newPassword = req.body.newPassword

    if (typeof oldPassword === 'undefined' || typeof newPassword === 'undefined' || typeof mail === 'undefined') {
        res.status(400).json({errorMessage: 'OldPassword, newPassword or mail not found.'})
    } else {
        try {
            if (await userService.updatePassword(mail, oldPassword, newPassword)) {
                res.status(202).json({successMessage: 'Password has been changed !'})
            } else {
                res.status(409).json({errorMessage: 'Old password does not match'})
            }
        } catch (e) {
            res.status(500).json({errorMessage: 'Database error. The password has not been changed'})
        }
    }
})


module.exports = router
