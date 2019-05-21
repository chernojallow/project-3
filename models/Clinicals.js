// Require Mongoose
const mongoose = require("mongoose");

// Create a Schema Class
var Schema = mongoose.Schema;

// Create Article Schema
var ClinicalsSchema = new Schema({

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

  // _id: {
  //   type:String
  // },

 
  instructor: {
    type: String,
    required: true
  },

});

// Create the Article model with Mongoose
var Clinicals = mongoose.model('Clinicals', ClinicalsSchema);

// Export the Model
module.exports = Clinicals;