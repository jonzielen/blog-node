var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var List = require('../models/list');

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/lists');

/* GET api page. */
router.get('/', function(req, res, next) {
    // get all
    List.find({}, function(err, list) {
      if (err) throw err;

      res.jsonp({
          title: '00',
          data: list
      });
    });
});

/* add to db */
router.get('/add', function(req, res, next) {
    res.render('add-name', { title: '0+' });
}).post('/add', function(req, res, next) {
    var list = new List(); // create a new instance of the List model
    list.name = req.body.email; // set the list name (comes from the request)

    // save the list and check for errors
    list.save(function(err) {
        if (err)
            res.send(err);

        res.json({
            message: req.body.email+" added to the database."
        });
        mongoose.disconnect();
    });
});

module.exports = router;
