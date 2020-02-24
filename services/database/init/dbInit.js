const db = require('../connexion')

// Persiste les changements en base
// A décommenter pour modifier le schéma de base de donnée
// ATTENTION : cela supprime les tables et donc les données
db.sequelize.sync({force: true}).then(() => require('userInit.js'))
