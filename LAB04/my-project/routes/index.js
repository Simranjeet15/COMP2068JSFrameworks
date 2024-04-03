var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/player1', function(req, res, next) {
  res.render('player1');
});

router.get('/player2', function(req, res, next) {
  res.render('player2');
});

router.get('/player3', function(req, res, next) {
  res.render('player3');
});

router.get('/player4', function(req, res, next) {
  res.render('player4');
});

module.exports = router;

