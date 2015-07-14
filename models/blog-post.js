// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  title: String,
  date: String,
  body: String,
  url: String,
  active: Boolean,
  created: Date
});

// the schema is useless so far
// we need to create a model using it
var BlogPost = mongoose.model('BlogPost', userSchema);

// make this available to our users in our Node applications
module.exports = BlogPost;
