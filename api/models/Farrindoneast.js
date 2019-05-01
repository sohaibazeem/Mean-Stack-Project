const mongoose = require('mongoose');

// Define collection and schema for Business
const Farrindoneast = mongoose.Schema({
 
    id: String,
    opid: String,
    weeknumber: String,
    operator: String,

    sat: String,
    sun: String,
    mon: String,
    tue: String,

    wed: String,
    thu: String,
    fri: String,
    total: String,
    comments: String
    
});

module.exports = mongoose.model('Farrindoneast', Farrindoneast);