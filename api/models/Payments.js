const mongoose = require('mongoose');

// Define collection and schema for Business
const Payments = mongoose.Schema({
 
    id: String,
    opid: String,
    operator: String,

    hours: String,
    rateperhour: String,
    gross: String,
    vat: String,

    cis: String,
    net: String,
    dop: String,
    comments: String
    
});

module.exports = mongoose.model('Payments', Payments);