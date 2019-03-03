// Require Mongoose
var mongoose = require('mongoose');

// Create a Schema Class
var Schema = mongoose.Schema;

// Create view data Schema
var ViewdataSchema = new Schema({

  // Title of Article
  name: {
    type: String,
    required: true
  },

  value1: {
    type: Number,
    required: true
  },


  // Create a relation with the view data model
  views: [{
    type: Schema.Types.ObjectId,
    ref: 'View'
  }]

});

// Create the view data model with Mongoose
var Viewdata = mongoose.model('Viewdata', ViewdataSchema);

// Export the Model
module.exports = Viewdata;