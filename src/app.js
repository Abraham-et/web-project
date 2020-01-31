var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const bodyParser = require("body-parser");

const jwt = require("jsonwebtoken");
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose')
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var router = require('./routes');


var app = express();

const jwtOptions = {
  secret: process.env.JWTSECRET,
  expiresIn: "1h"
};

const cookieOptions = {
  expires: new Date(Date.now() + 1000 * 60 * 60), // 1 hour
  secure: true,
  httpOnly: true,
  sameSite: true
};




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.use(router);



// Connect to the db
const db = mongoose.connect("mongodb+srv://admin:test@cluster0-ncuwn.mongodb.net/test?retryWrites=true&w=majority");





// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err.message });
});

module.exports = app;
