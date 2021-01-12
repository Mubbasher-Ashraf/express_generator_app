const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const errorHandler = require('./middleware/error');
const Logger = require('./middleware/logger');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

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

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(errorHandler);

  // uncaughtExecptions error
process.on('uncaughtException', err => {
  console.log('We Got uncaughtException Error');
  Logger.loggerSetup('UnCaughtException occurs');
  process.exit(0);
});

  //uncaughtExceptionMonitor error
process.on('uncaughtExceptionMonitor', err => {
  console.log('We Got uncaughtExceptionMonitor Error');
  Logger.loggerSetup('uncaughtExceptionMonitor occurs');
  process.exit(0);
}); 

  // unhandledRejection error
process.on('unhandledRejection', err => {
  console.log('We Got unhandledRejection Error')
  Logger.loggerSetup('unhandledRejection occurs');
  process.exit(0);
});

module.exports = app;
