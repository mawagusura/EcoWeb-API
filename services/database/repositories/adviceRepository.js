const {Advice} = require('../models/adviceModel')

var exports = module.exports = {}

exports.findAll = async function(){
    return GoodPratice.findAll()
}