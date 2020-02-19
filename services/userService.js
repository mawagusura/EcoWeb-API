var userDB = require('./database/usersDB.js')
var exports = module.exports = {}


exports.authenticate = async function (mail, password) {
    try {
        console.log("'" + mail + "' is trying to connect.")
        const user = await userDB.findByMailAndPassword(mail, password)
        if (user && user.length === 1 && user[0].mail === mail) {
            console.log("Credentials of '" + mail + "' are corrects.")
            return true
        }
        console.log('Credentials of ' + mail + ' are incorrect.')
        return false
    } catch (err) {
        console.log("Error during pseudo verification of '" + mail + "' : " + err)
        throw err
    }

}

exports.register = async function (mail, password, name, surname) {
    console.log("New user '" + mail + "' is trying to register.")
    try {
        if ((await userDB.findByMail(mail)) > 0) {
            console.log('Mail is already used')
            return undefined
        }
    } catch (e) {
        console.log('Error during verification of doubloons : ' + e)
        throw e
    }
    try {
        const res = await userDB.addUser(mail, password, name, surname)
        if (res) {
            console.log("User '" + mail + "' has been added successfully.")
            return res.iduser
        } else {
            throw new Error("An error has occurred on the result of the database")
        }
    } catch (err) {
        console.log("Error adding of '" + mail + "' : " + err)
        throw err
    }
}

