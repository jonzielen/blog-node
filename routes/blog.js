var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var BlogPost = require('../models/blog-post');

mongoose.set('debug', true);
mongoose.createConnection('mongodb://localhost/blogPosts');

/* GET api page. */
router.get('/', function(req, res, next) {
    res.render('blog', {
        title: 'blog'
    });
});

/* GET feed */
router.get('/data/feed', function(req, res, next) {
    // get all
    BlogPost.find({}, function(err, post) {
      if (err) throw err;

      res.jsonp({
          data: post
      });
    });
});

/* GET individual post */
router.get('/:url', function(req, res, next) {
    var url = req.params.url;
    console.log(url);

    // get all
    BlogPost.findOne({"url":url}, function(err, post) {
      if (err) throw err;

      res.jsonp({
          urlSearched: url,
          data: post
      });
    });
});

/* add to db */
router.get('/add', function(req, res, next) {
    res.render('add-blog', { title: 'add' });
}).post('/add', function(req, res, next) {
    var post = new BlogPost(); // create a new instance of the Blog Post model

    post.title = req.body.title; // set the post title (comes from the request)
    post.date = req.body.date; // set the post date (comes from the request)
    post.body = req.body.body; // set the post body (comes from the request)
    post.url = req.body.url; // set the post url (comes from the request)

    // save the list and check for errors
    post.save(function(err) {
        if (err)
            res.send(err);

        res.jsonp({
            message: req.body.title+": added to the database.",
            data: post
        });
    });
    //mongoose.disconnect();
});

module.exports = router;
