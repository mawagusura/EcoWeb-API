var exports = module.exports = {}
const db = require('../connexion')

exports.addConsumption = async function (timestamp, conso, idUser) {
    return db.Consumption.create({
        consumptionDate: timestamp,
        consumptionAmount: conso,
        userId: idUser
    })
}
