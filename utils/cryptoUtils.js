const bcrypt = require("bcryptjs")
var exports = module.exports = {}

// Valeur pour le calcul du salage des mots de passe
const saltRounds = 10

// Retourne le hash du password passé en params
exports.hashPwd = function(password) {
    return bcrypt.hashSync(password, saltRounds);
}

//Vérifie que les deux hash sont identiques - retourne true or false
exports.checkPwd = function(pwd, hash2){
    return bcrypt.compareSync(pwd, hash2);
}

// console.log(exports.checkPwd("test", exports.hashPwd("test")))
