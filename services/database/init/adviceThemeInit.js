const db = require('../connexion')
var exports = module.exports = {}

exports.init = async function () {
    return await db.Advice.findAll().then(advices => {
        db.Theme.findAll().then(themes => {
            themes[0].setAdvice(advices[3])
            themes[0].setAdvice(advices[3])

            themes[1].setAdvice(advices[0])
            themes[1].setAdvice(advices[2])

            themes[2].setAdvice(advices[1])
            themes[2].setAdvice(advices[3])
            themes[2].setAdvice(advices[4])

            themes[4].setAdvice(advices[4])

            themes[5].setAdvice(advices[0])
            themes[5].setAdvice(advices[2])
            themes[5].setAdvice(advices[3])

            themes[6].setAdvice(advices[4])
        })
    })
}
