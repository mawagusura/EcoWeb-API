const db = require('../connexion')
const themes = require('./themeInit.js')
const advices = require('./advicesInit.js')

// Persiste les changements en base
// A décommenter pour modifier le schéma de base de donnée
// ATTENTION : cela supprime les tables et donc les données
db.sequelize.sync().then(() => {
    require('./userInit.js')
    themes.init().then(() =>
        advices.init().then(() =>
            //adviceThemes.init()
            console.log('Advices inserted correctfully')
        )
    )
})
