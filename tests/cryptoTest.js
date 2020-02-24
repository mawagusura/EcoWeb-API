var cryptoUtils = require('../utils/cryptoUtils.js')

if (cryptoUtils.checkPwd("test", cryptoUtils.hashPwd("test")) != true){
    console.log("Test failed")
} else {
    console.error("Test passed")
}

console.log(Date.now())
let coucou = Date.now() + 10000
let coucou1 = Date.now() + 1000000
let coucou2 = Date.now() + 19500000000
console.log(new Date(coucou))
console.log(new Date(coucou1))
console.log(new Date(coucou2))

const db = require('../services/database/connexion')

db.Advice
