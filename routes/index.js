var express = require('express');
var router = express.Router();
const passport = require('passport')


router.get('/', function(req, res) {
  res.status(200).json({message : "Bienvenue sur le back"})
});

router.get('/coucou', function(req, res) {
  res.status(200).json({message : "coucou"})
});

router.get('/secret', passport.authenticate('jwt', { session: false}), function(req, res){
  res.status(200).json("Sucess ! You managed to access this secret endpoint with your JWT !")
})

module.exports = router;
