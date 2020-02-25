const db = require('../connexion')
var exports = module.exports = {}

exports.init = async function () {
    return await Promise.all([
        db.Theme.findOrCreate({
            where : {themeId: 1},
            defaults: {
                themeName: 'Vidéo',
                themeColor: '#3498db'
            }
        }),
        db.Theme.findOrCreate({
            where : {themeId: 2},
            defaults: {
                themeName: 'Mail',
                themeColor: '#34495e'
            }
        }),
        db.Theme.findOrCreate({
            where : {themeId: 3},
            defaults: {
                themeName: 'Navigation',
                themeColor: '#1abc9c'
            }
        }),
        db.Theme.findOrCreate({
            where : {themeId: 4},
            defaults: {
                themeName: 'Musique',
                themeColor: '#f1c40f'
            }
        }),
        db.Theme.findOrCreate({
            where : {themeId: 5},
            defaults: {
                themeName: 'Téléchargement',
                themeColor: '#e67e22'
            }
        }),
        db.Theme.findOrCreate({
            where : {themeId: 6},
            defaults: {
                themeName: 'Gestion',
                themeColor: '#9b59b6'
            }
        }),
        db.Theme.findOrCreate({
            where : {themeId: 7},
            defaults: {
                themeName: 'Réseau',
                themeColor: '#e74c3c'
            }
        }),
        db.Theme.findOrCreate({
            where : {themeId: 8},
            defaults: {
                themeName: 'Habitude',
                themeColor: '#2ecc71'
            }
        }),
        db.Theme.findOrCreate({
            where : {themeId: 9},
            defaults: {
                themeName: 'Autre',
                themeColor: '#95a5a6'
            }
        })
    ])
}







