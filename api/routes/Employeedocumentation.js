const express = require('express');
const mongoose = require('mongoose');
const employeedocumentationRoutes = express.Router();
// Require Business model in our routes module
const Employeedocumentation = require('../models/Employeedocumentation');

// Defined store route
employeedocumentationRoutes.post('/add', function (req, res,next) {
  console.log('Hi!');
  // res.status(200).send('Working');
  try{
    const employeedocumentation = new Employeedocumentation();

    
    employeedocumentation['employeefullname'] = req.body.employeefullname
    employeedocumentation['workrelateddocument'] = req.body.workrelateddocument,
    employeedocumentation['personaldocument'] = req.body.personaldocument,
    employeedocumentation['assesments'] = req.body.assesments


    employeedocumentation.save()
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



employeedocumentationRoutes.get('/add',function (req, res) {
    Employeedocumentation.find(function (err, businesses){
  if(err){
    console.log(err);
  }
  else {
    res.json(businesses);
  }
});
});

module.exports = employeedocumentationRoutes;