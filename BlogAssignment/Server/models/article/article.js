var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Defining the mongoose schema for Movie collection
var articleSchema   = new Schema({
    title: String,
    image: String,
    description: String

});

module.exports = mongoose.model('articleCollection', articleSchema,'articleCollection');
