var express = require('express');
var router = express.Router();

var List = require('../models/list');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        homepage: true,
        title: '00',
        pageDescription: 'test description',
    });
}).post('/', function(req, res, next) {
  res.render('index', {
      title: req.body.email
  });
});

module.exports = router;
