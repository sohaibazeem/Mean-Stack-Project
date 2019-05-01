const express = require('express');
const mongoose = require('mongoose');
const farrindoneastRoutes = express.Router();
// Require Business model in our routes module
const Farrindoneast = require('../models/Farrindoneast');

// Defined store route
farrindoneastRoutes.post('/add', function (req, res,next) {
  console.log('Hi!');
  // res.status(200).send('Working');
  try{
    const farrindoneast = new Farrindoneast();

    
    farrindoneast['id'] = req.body.id
    farrindoneast['opid'] = req.body.opid,
    farrindoneast['weeknumber'] = req.body.weeknumber,
    farrindoneast['operator'] = req.body.operator,

    farrindoneast['sat'] = req.body.sat
    farrindoneast['sun'] = req.body.sun,
    farrindoneast['mon'] = req.body.mon,
    farrindoneast['tue'] = req.body.tue,

    farrindoneast['wed'] = req.body.wed
    farrindoneast['thu'] = req.body.thu,
    farrindoneast['fri'] = req.body.fri,
    farrindoneast['total'] = req.body.total,
    farrindoneast['comments'] = req.body.comments


    farrindoneast.save()
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



farrindoneastRoutes.get('/add',function (req, res) {
    Farrindoneast.find(function (err, businesses){
  if(err){
    console.log(err);
  }
  else {
    res.json(businesses);
  }
});
});

module.exports = farrindoneastRoutes;