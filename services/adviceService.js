var adviceRepository = require('./database/repositories/adviceRepository')
var exports = module.exports = {}

exports.listAll = async function(){
    return adviceRepository.findAll()
}
