var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Thermostat' });
});

router.get('/test', function(req, res) {
  res.render('test', { title: 'Testing out' });
});

module.exports = router;
