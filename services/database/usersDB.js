const {Consommation, Partenaire, Payer, User} = require('./models.js')
const Op = require('sequelize').Op;

var exports = module.exports = {}

exports.findByMailAndPassword = async function (mail, password) {
    return User.findAll({
        where: {
            mail: mail,
            password: password
        }
    })
}
