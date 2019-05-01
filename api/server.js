const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./DB');

const registerRoute = require('./routes/Register');
const loginroutes = require('./routes/Login');
const samplepageRoutes = require('./routes/Samplepage');
const calodonianroadRoutes = require('./routes/Calodonianroad');
const farrindoneastRoutes = require('./routes/Farrindoneast');
const mairfairparkRoutes = require('./routes/Mairfairpark');
const paymentsRoutes = require('./routes/Payments');
const projectdetailsRoutes = require('./routes/Projectdetails');
const addresschangerequestRoutes = require('./routes/Addresschangerequest');
const employeedetailsRoutes = require('./routes/Employeedetails');
const customerdetailsRoutes = require('./routes/Customerdetails');
const employeedocumentationRoutes = require('./routes/Employeedocumentation')

//const loginRoutes = require('./routes/login.routes');
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
//app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());  
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(cors());
app.use('/register', registerRoute);
app.use('/login',loginroutes);
app.use('/assetsamplepage',samplepageRoutes);
app.use('/caledonianroad',calodonianroadRoutes );
app.use('/farrindoneast',farrindoneastRoutes);
app.use('/mairfairpark',mairfairparkRoutes);
app.use('/payments',paymentsRoutes);
app.use('/projectdetails',projectdetailsRoutes);
app.use('/addresschangerequest',addresschangerequestRoutes);
app.use('/allemployees',employeedetailsRoutes);
app.use('/customerdetails',customerdetailsRoutes);
app.use('/employeedocumentation',employeedocumentationRoutes)




//app.use('/login',loginRoutes);
const port = process.env.PORT || 4000;

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});