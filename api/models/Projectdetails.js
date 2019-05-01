const mongoose = require('mongoose');

// Define collection and schema for Business
const Projectdetails = mongoose.Schema({
 
    projectid: String,
    projectname: String,
    location: String,
    customer: String,
    startdate: String,
    notes: String,
    ongoing: String
    
});

module.exports = mongoose.model('Projectdetails', Projectdetails);