const express = require('express');
const mongoose = require('mongoose');
const registerRoutes = express.Router();
// Require Business model in our routes module
const Register = require('../models/Register');

// Defined store route
registerRoutes.post('/add', function (req, res,next) {
  console.log('Hi!');
  // res.status(200).send('Working');
  try{
    const register = new Register();

    register['username'] = req.body.username
    register['email'] = req.body.email
    register['password'] = req.body.password
    register['confirmpassword'] = req.body.confirmpassword

    register.save()
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



registerRoutes.route('/').get(function (req, res) {
  Register.find(function (err, businesses){
  if(err){
    console.log(err);
  }
  else {
    res.json(businesses);
  }
});
});

module.exports = registerRoutes;