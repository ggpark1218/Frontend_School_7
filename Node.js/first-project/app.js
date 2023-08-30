var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//template 라우터 추가
const templateRouter = require('./routes/template');

//express-session 실습
const session = require("express-session");

var app = express();

//express-session 실습
app.use(
  session({
    secret: "first project",
    resave: false,
    saveUninitialized: true,
  })
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//미들웨어 함수 작성
//어떠한 요청이 들어와도 해당 미들웨어 함수 한번은 실행
/*
app.use((req, res, next) => {
  console.log("middleware!!");
  next();
});
*/

app.use('/', indexRouter);
app.use('/users', usersRouter);
//template 라우터 추가
app.use('/template', templateRouter);

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
