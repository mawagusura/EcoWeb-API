var express = require('express');
var router = express.Router();
const passport = require('passport')


router.get('/', function(req, res) {
  res.status(200).json({message : "Bienvenue sur le back"})
});

router.get('/about', function(req, res) {
  res.status(200).json({message : "Welcome to the EcoWeb API ! "})
});

router.get('/secret', passport.authenticate('jwt', { session: false}), function(req, res){
  //console.log(req.user.name)
  res.status(200).json("Sucess ! You managed to access this secret endpoint with your JWT !")
})

module.exports = router;
