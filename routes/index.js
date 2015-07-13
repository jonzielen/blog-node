var express = require('express');
var router = express.Router();

var List = require('../models/list');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: '00'
    });
}).post('/', function(req, res, next) {
  res.render('index', { title: req.body.email });
});

module.exports = router;
