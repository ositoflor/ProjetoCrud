var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressLayouts = require('express-ejs-layouts')

//IMPORTES DA ROTA PAI DA APLICAÇÃO
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var tabelasRouter = require('./routes/tabelas');
var marcasRouter = require('./routes/marcas');
var modelosRouter = require('./routes/modelos');
var versaoRouter = require('./routes/versao');
var precosRouter = require('./routes/precos');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(expressLayouts);
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//ROTAS PAI DA APLICAÇÃO
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tabelas', tabelasRouter);
app.use('/marcas', marcasRouter);
app.use('/modelos', modelosRouter);
app.use('/versao', versaoRouter);
app.use('/precos', precosRouter);

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
