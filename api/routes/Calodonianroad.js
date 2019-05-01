const express = require('express');
const mongoose = require('mongoose');
const calodonianroadRoutes = express.Router();
// Require Business model in our routes module
const Calodonianroad = require('../models/Calodonianroad');

// Defined store route
calodonianroadRoutes.post('/add', function (req, res,next) {
  console.log('Hi!');
  // res.status(200).send('Working');
  try{
    const calodonianroad = new Calodonianroad();

    
    calodonianroad['id'] = req.body.id
    calodonianroad['opid'] = req.body.opid,
    calodonianroad['weeknumber'] = req.body.weeknumber,
    calodonianroad['operator'] = req.body.operator,

    calodonianroad['sat'] = req.body.sat
    calodonianroad['sun'] = req.body.sun,
    calodonianroad['mon'] = req.body.mon,
    calodonianroad['tue'] = req.body.tue,

    calodonianroad['wed'] = req.body.wed
    calodonianroad['thu'] = req.body.thu,
    calodonianroad['fri'] = req.body.fri,
    calodonianroad['total'] = req.body.total,
    calodonianroad['comments'] = req.body.comments


    calodonianroad.save()
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



calodonianroadRoutes.get('/add',function (req, res) {
    Calodonianroad.find(function (err, businesses){
  if(err){
    console.log(err);
  }
  else {
    res.json(businesses);
  }
});
});

module.exports = calodonianroadRoutes;