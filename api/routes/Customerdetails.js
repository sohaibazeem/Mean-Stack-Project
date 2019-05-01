const express = require('express');
const mongoose = require('mongoose');
const customerdetailsRoutes = express.Router();
// Require Business model in our routes module
const Customerdetails = require('../models/Customerdetails');

// Defined store route
customerdetailsRoutes.post('/add', function (req, res,next) {
  console.log('Hi!');
  // res.status(200).send('Working');
  try{
    const customerdetails = new Customerdetails();

    
    customerdetails['customerid'] = req.body.customerid,
    customerdetails['companyname'] = req.body.companyname,
    customerdetails['contactname'] = req.body.contactname,
    customerdetails['address1'] = req.body.address1,
    customerdetails['address2'] = req.body.address2,
    customerdetails['city'] = req.body.city,

     
    customerdetails['country'] = req.body.country,
    customerdetails['country1'] = req.body.country1,
    customerdetails['postcode'] = req.body.postcode,
    customerdetails['mobiletelephone'] = req.body.mobiletelephone,

    customerdetails['officetelephone'] = req.body.officetelephone
    customerdetails['emailaddress'] = req.body.emailaddress,
    customerdetails['fax'] = req.body.fax,
    customerdetails['vatnumber'] = req.body.vatnumber



    customerdetails.save()
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



customerdetailsRoutes.get('/add',function (req, res) {
    Customerdetails.find(function (err, businesses){
  if(err){
    console.log(err);
  }
  else {
    res.json(businesses);
  }
});
});

module.exports = customerdetailsRoutes;