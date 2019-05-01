const mongoose = require('mongoose');

// Define collection and schema for Business
const Registerschema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  confirmpassword: String
    
});

module.exports = mongoose.model('Register', Registerschema);