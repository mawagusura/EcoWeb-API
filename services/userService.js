var userDB = require('./database/usersDB.js')
var exports = module.exports = {}


exports.authenticate = async function (mail, password) {
    try {
        console.log("'" + mail + "' is trying to connect.")
        const user = await userDB.findByMailAndPassword(mail,password)
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
        if (await isUserExisting(pseudo)) {
            console.log('Pseudo is already used')
            return false
        }
    } catch (e) {
        console.log('Error during verification of doubloons : ' + e)
        throw e
    }
    try {
        const res = await databaseServices.addUser(pseudo, password)
        if (res) {
            console.log("User '" + pseudo + "' has been added successfully.")
            return true
        } else {
            console.log("'" + pseudo + "' has not been added.")
            return false
        }
    } catch (err) {
        console.log("Error adding of '" + pseudo + "' : " + err)
        throw err
    }
}

