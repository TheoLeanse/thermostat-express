var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Thermostat' });
});

router.get('/test', function(req, res) {
  res.render('test', { title: 'Testing' });
});

router.get('/:id?', function(req, res) {
  var jsonReturn = { 'name': req.params.id, 'city': 'Dubai' };
  res.json(jsonReturn);
});

router.post('/city', function(req, res) {
  // set sessions to city values
});

router.get('/city', function(req, res) {
  // give a json of stuff
});

module.exports = router;
