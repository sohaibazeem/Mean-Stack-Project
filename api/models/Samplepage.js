const mongoose = require('mongoose');

// Define collection and schema for Business
const Samplepageschema = mongoose.Schema({
 
    assetName: String,
    assetOwnerNmae: String,
    assetType: String,
    noofasset: String
    
});

module.exports = mongoose.model('Samplepage', Samplepageschema);