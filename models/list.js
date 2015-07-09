// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: String
});

// the schema is useless so far
// we need to create a model using it
var List = mongoose.model('List', userSchema);

// make this available to our users in our Node applications
module.exports = List;
