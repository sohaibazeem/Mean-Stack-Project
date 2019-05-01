const express = require('express');
const mongoose = require('mongoose');
const paymentsRoutes = express.Router();
// Require Business model in our routes module
const Payments = require('../models/Payments');

// Defined store route
paymentsRoutes.post('/add', function (req, res,next) {
  console.log('Hi!');
  // res.status(200).send('Working');
  try{
    const payments = new Payments();

    
    payments['id'] = req.body.id
    payments['opid'] = req.body.opid,
    payments['operator'] = req.body.operator,

    payments['hours'] = req.body.hours,
    payments['rateperhour'] = req.body.rateperhour,
    payments['gross'] = req.body.gross,
    payments['vat'] = req.body.vat,

    payments['cis'] = req.body.cis,
    payments['net'] = req.body.net,
    payments['dop'] = req.body.dop,
    payments['comments'] = req.body.comments


    payments.save()
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



paymentsRoutes.get('/add',function (req, res) {
    Payments.find(function (err, businesses){
  if(err){
    console.log(err);
  }
  else {
    res.json(businesses);
  }
});
});

module.exports = paymentsRoutes;