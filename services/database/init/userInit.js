const db = require('../connexion')
var cryptoUtils = require('../../../utils/cryptoUtils.js')
db.User.create({
    mail: 'nicolas.bolo@gmail.com',
    password: cryptoUtils.hashPwd('test'),
    name: 'Bolo',
    surname : 'Nicolas'
});
db.User.create({
    mail:'quontin.lathaud@gmail.com',
    password: cryptoUtils.hashPwd('test'),
    name: 'Lathaud',
    surname : 'Quontin'
});
db.User.create({
    mail: 'amaury.lucas@gmail.com',
    password: cryptoUtils.hashPwd('test'),
    name: 'Lucas',
    surname : 'Amaury'
});
db.User.create({
    mail: 'benjamin.trotin@gmail.com',
    password: cryptoUtils.hashPwd('test'),
    name: 'Trotin',
    surname : 'Benjamin'
});
db.User.create({
    mail: 'arnaud.fouillard@gmail.com',
    password: cryptoUtils.hashPwd('test'),
    name: 'Fouillard',
    surname : 'Arnaud'
});
db.User.create({
    mail: 'clement.blaise@gmail.com',
    password: cryptoUtils.hashPwd('test'),
    name: 'Blaise',
    surname : 'Clément'
});
