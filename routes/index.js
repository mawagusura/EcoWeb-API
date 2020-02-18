var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.status(200).json({message : "Bienvenue sur le back"})
});

router.get('/coucou', function(req, res) {
  res.status(200).json({message : "coucou"})
});

module.exports = router;
