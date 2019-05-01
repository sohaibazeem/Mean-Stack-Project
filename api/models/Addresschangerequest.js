const mongoose = require('mongoose');

// Define collection and schema for Business
const Addresschangerequest = mongoose.Schema({
 
    fullname: String,
    designation: String,
    location: String,
    companyname: String,
    previousaddress: String,
    currentaddress: String
    
});

module.exports = mongoose.model('Addresschangerequest', Addresschangerequest);