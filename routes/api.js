var express = require('express');
var router = express.Router();

var List = require('../models/list');

/* GET api page. */
router.get('/api', function(req, res, next) {
    // get all
    List.find({}, function(err, list) {
      if (err) throw err;

      res.jsonp({
          title: '00',
          data: list
      });
    });
}).post('/', function(req, res, next) {
  res.render('index', { title: req.body.email });
});

router.get('/api/:id', function(req, res, next) {
    var id = req.param("id");

    List.findById(id, function(err, list) {
      if (err) throw err;

      res.jsonp({
          data: list
      });
    });
});

module.exports = router;
