var userRepository = require('./database/repositories/userRepository')
var cryptoUtils = require('../utils/cryptoUtils.js')
var exports = module.exports = {}


exports.authenticate = async function (mail, password) {
    try {
        console.log("'" + mail + "' is trying to connect.")
        const user = await userRepository.findByMail(mail)
        if (user && user.length === 1 && cryptoUtils.checkPwd(password,user[0].password)) {
            console.log("Credentials of '" + mail + "' are corrects.")
            return user[0]
        }
        console.log('Credentials of ' + mail + ' are incorrect.')
        return false
    } catch (err) {
        console.log("Error during pseudo verification of '" + mail + "' : " + err)
        throw err
    }

}

/**
 * Register a new user and save it in the databse
 * @returns an instance of class User defined in userModel.js
 */
exports.register = async function (mail, password, name, surname) {
    console.log("New user '" + mail + "' is trying to register.")
    try {
        if ((await userRepository.findByMail(mail)).length > 0) {
            console.log('Mail is already used')
            return undefined
        }
    } catch (e) {
        console.log('Error during verification of doublons : ' + e)
        throw e
    }
    try {
        const res = await userRepository.addUser(mail, cryptoUtils.hashPwd(password), name, surname)
        if (res) {
            console.log("User '" + mail + "' has been added successfully.")
            return res
        } else {
            throw new Error("An error has occurred on the result of the database")
        }
    } catch (err) {
        console.log("Error adding of '" + mail + "' : " + err)
        throw err
    }
}

/**
 * Update the password of an existing user and verifies
 * that the old password corresponds
 * @param mail
 * @param oldPassword
 * @param newPassword
 * @returns {Promise<boolean>}
 */
exports.updatePassword = async function (mail, oldPassword, newPassword) {
    console.log("Updating password of '" + mail + "'")
    try {
        const user = await userRepository.findByMail(mail)
        if (user && user.length === 1 && cryptoUtils.checkPwd(oldPassword,user[0].password)) {
            await userRepository.updatePassword(mail, cryptoUtils.hashPwd(newPassword))
            return true
        }
        return false
    } catch (e) {
        console.log('Error during update of user : ' + e)
        throw e
    }
}

