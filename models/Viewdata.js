// Require Mongoose
var mongoose = require('mongoose');

// Create a Schema Class
var Schema = mongoose.Schema;

// Create Article Schema
var ViewdataSchema = new Schema({

  // Title of Article
  name: {
    type: String,
    required: true
  },

  value: {
    type: Number,
    required: true
  },


  // Create a relation with the Comment model
  views: [{
    type: Schema.Types.ObjectId,
    ref: 'View'
  }]

});

// Create the Article model with Mongoose
var Viewdata = mongoose.model('Viewdata', ViewdataSchema);

// Export the Model
module.exports = Viewdata;