var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

var planet = require("./models/planetSchema");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var planetRouter = require('./routes/planet');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var resourceRouter = require('./routes/resource');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/planet', planetRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/resource', resourceRouter);

// We can seed the collection if needed on

// //async function recreateDB(){
// // Delete everything
// await planet.deleteMany();
// let instance1 = new
// planet({name:"Earth", size:11234,
// speed:780000});
// instance1.save().then(doc=>{
// console.log("First object saved")}
// ).catch(err=>{
// console.error(err)
// });



// let instance2 = new
// planet({name:"Saturn", size:56532,
// speed:685237});
// instance2.save().then(doc=>{
// console.log("Second object saved")}
// ).catch(err=>{
// console.error(err)
// });

// let instance3 = new
// planet({name:"Jupiter", size:49876,
// speed:890000});
// instance3.save().then(doc=>{
// console.log("Third object saved")}
// ).catch(err=>{
// console.error(err)
// });
// }
// let reseed = true;
// if (reseed) {recreateDB();}


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

module.exports = app;
