const db = require('../connexion')
var cryptoUtils = require('../../../utils/cryptoUtils.js')
db.User.findOrCreate({
    where: { mail: 'nicolas.bolo@gmail.com'},
    defaults: {
        password: cryptoUtils.hashPwd('test'),
        name: 'Bolo',
        surname : 'Nicolas'
    }
});

db.User.findOrCreate({ 
    where: { mail:'quontin.lathaud@gmail.com'},
    defaults: {
        password: cryptoUtils.hashPwd('test'),
        name: 'Lathaud',
        surname : 'Quontin'
    }
});

db.User.findOrCreate({
    where: { mail: 'amaury.lucas@gmail.com'},
    defaults: {
        password: cryptoUtils.hashPwd('test'),
        name: 'Lucas',
        surname : 'Amaury'
    }
});

db.User.findOrCreate({
    where: { mail: 'benjamin.trotin@gmail.com'},
    defaults:{
        password: cryptoUtils.hashPwd('test'),
        name: 'Trotin',
        surname : 'Benjamin'
    }
});

db.User.findOrCreate({
    where: { mail: 'arnaud.fouillard@gmail.com'},
    defaults: {
        password: cryptoUtils.hashPwd('test'),
        name: 'Fouillard',
        surname : 'Arnaud'
    }
});

db.User.findOrCreate({
    where: {mail: 'clement.blaise@gmail.com'},
    defaults:{
        password: cryptoUtils.hashPwd('test'),
        name: 'Blaise',
        surname : 'Clément'
    }
});
