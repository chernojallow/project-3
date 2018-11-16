// Require Mongoose
const mongoose = require("mongoose");

// Require Mongoose

// Create a Schema Class
var Schema = mongoose.Schema;

// Create Article Schema
var ClinicalsSchema = new Schema({

  // Title of Article
  nameClass: {
    type: String,
    required: true
  },

});

// Create the Article model with Mongoose
var Clinicals = mongoose.model('Clinicals', ClinicalsSchema);

// Export the Model
module.exports = Clinicals;