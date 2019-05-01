const express = require('express');
const mongoose = require('mongoose');
const addresschangerequestRoutes = express.Router();
// Require Business model in our routes module
const Addresschangerequest = require('../models/Addresschangerequest');

// Defined store route
addresschangerequestRoutes.post('/add', function (req, res,next) {
  console.log('Hi!');
  // res.status(200).send('Working');
  try{
    const addresschangerequest = new Addresschangerequest();

    
    addresschangerequest['fullname'] = req.body.fullname
    addresschangerequest['designation'] = req.body.designation,
    addresschangerequest['location'] = req.body.location,
    addresschangerequest['companyname'] = req.body.companyname,
    addresschangerequest['previousaddress'] = req.body.previousaddress
    addresschangerequest['currentaddress'] = req.body.currentaddress


    addresschangerequest.save()
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



addresschangerequestRoutes.get('/add',function (req, res) {
    Addresschangerequest.find(function (err, businesses){
  if(err){
    console.log(err);
  }
  else {
    res.json(businesses);
  }
});
});

module.exports = addresschangerequestRoutes;