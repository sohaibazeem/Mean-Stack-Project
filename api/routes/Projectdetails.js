const express = require('express');
const mongoose = require('mongoose');
const projectdetailsRoutes = express.Router();
// Require Business model in our routes module
const Projectdetails = require('../models/Projectdetails');

// Defined store route
projectdetailsRoutes.post('/add', function (req, res,next) {
  console.log('Hi!');
  // res.status(200).send('Working');
  try{
    const projectdetails = new Projectdetails();

    projectdetails['projectid'] = req.body.projectid
    projectdetails['projectname'] = req.body.projectname
    projectdetails['location'] = req.body.location
    projectdetails['customer'] = req.body.confirmpasswcustomerord

    projectdetails['startdate'] = req.body.startdate
    projectdetails['notes'] = req.body.notes
    projectdetails['ongoing'] = req.body.ongoing

    projectdetails.save()
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



projectdetailsRoutes.get('/add',function (req, res) {
  Projectdetails.find(function (err, businesses){
  if(err){
    console.log(err);
  }
  else {
    res.json(businesses);
  }
});
});

module.exports = projectdetailsRoutes;