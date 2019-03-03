
// Require Mongoose
var mongoose = require('mongoose');

// Create a Schema Class
var Schema = mongoose.Schema;

// Create Input clinicals Schema
var InputClinicalsSchema = new Schema({

  // Title of name
  nameclass: {
    type: String,
    required: true
  },

  room: {
    type: Number,
    required: true
  },


  // Create a relation with the Clinicals model
  clinicals: [{
    type: Schema.Types.ObjectId,
    ref: 'Clinicals'
  }]

});

// Create the Clinicals model with Mongoose
var InputClinicals = mongoose.model('InputClinicals', InputClinicalsSchema);

// Export the Model
module.exports = InputClinicals;