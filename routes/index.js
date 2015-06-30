var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Live Good' });
});

router.get('/mission', function(req, res, next) {
  res.render('mission', { title: 'Live Good | Our Mission' });
});

module.exports = router;
