var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '00' });
}).post('/', function(req, res, next) {
  res.render('index', { title: req.body.email });
});

module.exports = router;
