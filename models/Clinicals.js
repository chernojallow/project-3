// Require Mongoose
const mongoose = require("mongoose");

// Create a Schema Class
const Schema = mongoose.Schema;

// Create Article Schema
const ClinicalsSchema = new Schema({

  // Title of Name
  nameclass: {
    type: String,
    required: true
  },

  room: {
    type: Number,
    required: true
  },


  classTime: {
    type: Number,
    required: true
  },

 
  instructor: {
    type: String,
    required: true
  },

});

// Create the Article model with Mongoose
const Clinicals = mongoose.model('Clinicals', ClinicalsSchema);

// Export the Model
module.exports = Clinicals;