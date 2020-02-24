const db = require('../connexion')
var exports = module.exports = {}

exports.init = async function(){
    db.Theme.create({
        themeName: 'Vidéo',
        themeColor: '#3498db'
    });
    db.Theme.create({
        themeName: 'Mail',
        themeColor: '#34495e'
    });
    db.Theme.create({
        themeName: 'Navigation',
        themeColor: '#1abc9c'
    });
    db.Theme.create({
        themeName: 'Musique',
        themeColor: '#f1c40f'
    });
    db.Theme.create({
        themeName: 'Téléchargment',
        themeColor: '#e67e22'
    });
    db.Theme.create({
        themeName: 'Gestion',
        themeColor: '#9b59b6'
    });
    db.Theme.create({
        themeName: 'Réseau',
        themeColor: '#e74c3c'
    });
    db.Theme.create({
        themeName: 'Habitude',
        themeColor: '#2ecc71'
    });
    db.Theme.create({
        themeName: 'Autre',
        themeColor: '#95a5a6'
    });
}







