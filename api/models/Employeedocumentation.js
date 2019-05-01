const mongoose = require('mongoose');

// Define collection and schema for Business
const Employeedocumentation = mongoose.Schema({
 
    employeefullname: String,
    workrelateddocument: String,
    personaldocument: String,
    assesments: String
    
});

module.exports = mongoose.model('Employeedocumentation', Employeedocumentation);