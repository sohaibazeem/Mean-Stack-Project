const express = require('express');
const mongoose = require('mongoose');
const samplepageRoutes = express.Router();
// Require Business model in our routes module
const Samplepage = require('../models/Samplepage');

// Defined store route
samplepageRoutes.post('/add', function (req, res,next) {
  console.log('Hi!');
  // res.status(200).send('Working');
  try{
    const samplepage = new Samplepage();

    
    samplepage['assetName'] = req.body.assetName
    samplepage['assetOwnerNmae'] = req.body.assetOwnerNmae,
    samplepage['assetType'] = req.body.assetType,
    samplepage['noofasset'] = req.body.noofasset

    samplepage.save()
      .then(result => {
        // res.status(200).json({'register': 'register in added successfully'});
          console.log(result);
          res.status(200).send({"res": "Done"});
    }).catch(err=>console.log(err));


    // res.redirect('back');


  }catch(e){
    console.log(e)
    res.status(500).send({
        Error: e
    })
}
});



samplepageRoutes.get('/add',function (req, res) {
  Samplepage.find(function (err, businesses){
  if(err){
    console.log(err);
  }
  else {
    res.json(businesses);
  }
});
});

module.exports = samplepageRoutes;