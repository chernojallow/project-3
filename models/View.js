

// Require Mongoose
const mongoose = require("mongoose");

// Require Mongoose

// Create a Schema Class
var Schema = mongoose.Schema;

// Create View Schema
var ViewSchema = new Schema({

  // Title of Article
  name: {
    type: String,
    required: true
  },

  value: {
    type: Number,
    required: true
  },

  nameclass: {
    type: String,
    required: true
  },

});

// Create the View model with Mongoose
var View = mongoose.model('View', ViewSchema);

// Export the Model
module.exports = View;