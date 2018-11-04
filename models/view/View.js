const mongoose = require("mongoose");


// Require Mongoose
//var mongoose = require('mongoose');

// Create a Schema Class
//var Schema = mongoose.Schema;

// Create Article Schema
var ArticleSchema = new Schema({

  // Title of Article
  title: {
    type: String,
    required: true
  }
  
});

// Create the Article model with Mongoose
var Article = mongoose.model('Article', ArticleSchema);

// Export the Model
module.exports = Article;