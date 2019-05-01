const express = require('express');
const mongoose = require('mongoose');
const loginRoutes = express.Router();
// Require Business model in our routes module
const Login = require('../models/Login');

// Defined store route
loginRoutes.post('/loginuser', function (req, res,next) {
  console.log('Hi!');
  // res.status(200).send('Working');
  try{
    const login = new Login();

    
    login['email'] = req.body.email
    login['password'] = req.body.password

    login.save()
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

module.exports = loginRoutes;