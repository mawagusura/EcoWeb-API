var exports = module.exports = {}
const db = require('../connexion')

exports.findAll = async function(){
    return db.Advice.findAll({
        attributes: ['adviceId','title', 'content'],
        include: {
            model: db.Theme,
            attributes: ['themeColor','themeName'],
            through: {attributes: []}
        }

    })
}
