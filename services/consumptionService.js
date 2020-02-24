var userRepository = require('./database/repositories/userRepository')
var consoRepository = require('./database/repositories/consumptionRepository')
var exports = module.exports = {}

exports.addConsumption = async function (mail, conso) {
    console.log('Adding new consumption of ' + mail)
    const user = await userRepository.findByMail(mail)
    if (!user && user.length !== 1) {
        console.log(mail + " does not exists.")
        return undefined
    }
    const timestamp = Date.now()
    return await consoRepository.addConsumption(timestamp, conso, user[0].userId)
}
