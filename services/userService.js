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

