var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.type('json').status(200).end("Bienvenue sur le back")
});

router.get('/coucou', function(req, res) {
  res.type('json').status(200).end("coucou")
});

module.exports = router;
