const mongoose = require('mongoose');

// Define collection and schema for Business
const Employeedetails = mongoose.Schema({
    employeeid: String,
    employeename: String,
    address1: String,
    address2: String,
    city: String,
    country: String,
    country1: String,
    postcode: String,
    mobiletelephone: String,
    officetelephone: String,
    emailaddress: String,
    fax: String,
    vatnumber: String
 
});

module.exports = mongoose.model('Employeedetails', Employeedetails);