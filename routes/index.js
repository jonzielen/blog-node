var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var List = require('../models/list');

    // get all
    List.find({}, function(err, list) {
      if (err) throw err;

      res.render('index', {
          title: '00',
          data: list
      });
    });
}).post('/', function(req, res, next) {
  res.render('index', { title: req.body.email });
});

module.exports = router;
