const mongoose = require('mongoose');

// Define collection and schema for Business
const Customerdetails = mongoose.Schema({
    customerid: String,
    companyname: String,
    contactname:String,
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

module.exports = mongoose.model('Customerdetails', Customerdetails);