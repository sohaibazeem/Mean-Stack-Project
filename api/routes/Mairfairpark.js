const express = require('express');
const mongoose = require('mongoose');
const mairfairparkRoutes = express.Router();
// Require Business model in our routes module
const Mairfairpark = require('../models/Mairfairpark');

// Defined store route
mairfairparkRoutes.post('/add', function (req, res,next) {
  console.log('Hi!');
  // res.status(200).send('Working');
  try{
    const mairfairpark = new Mairfairpark();

    
    mairfairpark['id'] = req.body.id
    mairfairpark['opid'] = req.body.opid,
    mairfairpark['weeknumber'] = req.body.weeknumber,
    mairfairpark['operator'] = req.body.operator,

    mairfairpark['sat'] = req.body.sat
    mairfairpark['sun'] = req.body.sun,
    mairfairpark['mon'] = req.body.mon,
    mairfairpark['tue'] = req.body.tue,

    mairfairpark['wed'] = req.body.wed
    mairfairpark['thu'] = req.body.thu,
    mairfairpark['fri'] = req.body.fri,
    mairfairpark['total'] = req.body.total,
    mairfairpark['comments'] = req.body.comments


    mairfairpark.save()
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



mairfairparkRoutes.get('/add',function (req, res) {
    Mairfairpark.find(function (err, businesses){
  if(err){
    console.log(err);
  }
  else {
    res.json(businesses);
  }
});
});

module.exports = mairfairparkRoutes;