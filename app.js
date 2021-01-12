const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const errorHandler = require('./middleware/error');
const winston = require('winston');
// const Logger = require('./middleware/logger');

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

// Logger function
// app.use(Logger);

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
  winston.error(err.message, err);
  process.exit(1);
});

  //uncaughtExceptionMonitor error
process.on('uncaughtExceptionMonitor', err => {
  console.log('We Got uncaughtExceptionMonitor Error');
  winston.error(err.message, err);
  process.exit(1);
});

  // unhandledRejection error
process.on('unhandledRejection', err => {
  console.log('We Got unhandledRejection Error')
  winston.error(err.message, err);
  process.exit(1);
});

module.exports = app;
