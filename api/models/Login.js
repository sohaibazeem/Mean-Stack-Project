const mongoose = require('mongoose');

// Define collection and schema for Business
const Loginschema = mongoose.Schema({
 
  email: String,
  password: String
    
});

module.exports = mongoose.model('Login', Loginschema);