const db = require('../connexion')

var exports = module.exports = {}

exports.findByMail = async function (mail) {
    return db.User.findAll({
        where: {
            mail: mail
        }
    })
}

exports.addUser = async function (mail,password,name,surname) {
    return db.User.create({
        mail: mail,
        password: password,
        name: name,
        surname : surname
    });
}
