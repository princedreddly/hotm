var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var valids = require('./middleware/formsValidation');
const Thing = require('./models/validatedata');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var formsRouter = require('./routes/forms');
var adminRouter = require('./routes/admin');
var markersApi = require('./api/markers');
var getMark = require('./api/mongoDB');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/forms', formsRouter);
app.use('/admin', adminRouter);
app.use('/api/markers', markersApi);
app.use('/api2/markers', getMark);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// mongo db connection
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://root:toor@cluster0-clvxs.gcp.mongodb.net/test?retryWrites=true&w=majority"
MongoClient.connect(uri, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   const collection = client.db("test").collection("test");
   // perform actions on the collection object
   client.close();
});

module.exports = app;
