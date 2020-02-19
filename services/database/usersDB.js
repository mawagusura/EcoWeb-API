const {User} = require('./models.js')
const Op = require('sequelize').Op;

var exports = module.exports = {}

exports.findByMail = async function (mail) {
    return User.findAll({
        where: {
            mail: mail
        }
    })
}

exports.addUser = async function (mail,password,name,surname) {
    return User.create({
        mail: mail,
        password: password,
        name: name,
        surname : surname
    });
}
