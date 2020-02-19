var cryptoUtils = require('../utils/cryptoUtils.js')

if (cryptoUtils.checkPwd("test", cryptoUtils.hashPwd("test")) != true){
    console.log("Test failed")
} else {
    console.error("Test passed")
}