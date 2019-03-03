

const bcrypt = require("bcrypt");

// Require mongoose 
const mongoose = require("mongoose");
// Create a schema class
const Schema = mongoose.Schema;

// Create a user schema
var UserSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },

  lastname: {
    type: String,
    required: true
  },

  username: {
    type: String,
    require: true
  },

  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },

  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now
  }
});


 //Use bcrypt to hash password
 
UserSchema.methods.hashPassword = function(password) {
  return bcrypt.hashSync(password, 12);
};
UserSchema.methods.comparePassword = function(password, hashedPassword) {
  return bcrypt.compareSync(password, hashedPassword);
};

// Exports the user model
module.exports = User = mongoose.model("User", UserSchema);
