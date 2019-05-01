const express = require('express');
const mongoose = require('mongoose');
const employeedetailsRoutes = express.Router();
// Require Business model in our routes module
const Employeedetails = require('../models/Employeedetails');

// Defined store route
employeedetailsRoutes.post('/add', function (req, res,next) {
  console.log('Hi!');
  // res.status(200).send('Working');
  try{
    const employeedetails = new Employeedetails();

    
    employeedetails['employeeid'] = req.body.employeeid,
    employeedetails['employeename'] = req.body.employeename,
    employeedetails['address1'] = req.body.address1,
    employeedetails['address2'] = req.body.address2,
    employeedetails['city'] = req.body.city,

     
    employeedetails['country'] = req.body.country,
    employeedetails['country1'] = req.body.country1,
    employeedetails['postcode'] = req.body.postcode,
    employeedetails['mobiletelephone'] = req.body.mobiletelephone,

    employeedetails['officetelephone'] = req.body.officetelephone
    employeedetails['emailaddress'] = req.body.emailaddress,
    employeedetails['fax'] = req.body.fax,
    employeedetails['vatnumber'] = req.body.vatnumber



    employeedetails.save()
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



employeedetailsRoutes.get('/add',function (req, res) {
    Employeedetails.find(function (err, businesses){
  if(err){
    console.log(err);
  }
  else {
    res.json(businesses);
  }
});
});

module.exports = employeedetailsRoutes;