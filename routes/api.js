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

router.get('/api/add', function(req, res, next) {
    res.render('index', { title: '0+' });
}).post('/api/add/:value', function() {
    var value = req.param("value");

    // List.findById(id, function(err, list) {
    //   if (err) throw err;
    //
    //   res.jsonp({
    //       data: list
    //   });
    // });


    // Submit to the DB
    List.insert({
        "name" : 'test???'
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.send(value + " added to the database.");
        }
    });
});

module.exports = router;
