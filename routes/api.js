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

// router.get('/api/:id', function(req, res, next) {
//     var id = req.param("id");
//
//     List.findById(id, function(err, list) {
//       if (err) throw err;
//
//       res.jsonp({
//           data: list
//       });
//     });
// });

router.get('/api/add', function(req, res, next) {
    res.render('add-blog', { title: '0+' });
}).post('/api/add', function(req, res, next) {
    var list = new List(); // create a new instance of the List model
    list.name = req.body.email; // set the list name (comes from the request)

    // save the list and check for errors
    list.save(function(err) {
        if (err)
            res.send(err);

        res.json({
            message: req.body.email+" added to the database."
        });
    });
});

module.exports = router;
