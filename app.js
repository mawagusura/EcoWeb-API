var createError = require('http-errors')
var express = require('express')
var cors = require('cors')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
var consoRouter = require('./routes/consumption')
var adviceRouter = require('./routes/advices')
var app = express()

//load middleware for authentication
require('./passport.js')
//require('./services/database/init/dbInit.js')


// view engine setup
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(cors())

app.use('/api', indexRouter)
app.use('/api/users', usersRouter)
app.use('/api/conso', consoRouter)
app.use('/api/advices', adviceRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.json({
        errorMessage: err.message,
        errorStatus: err.status
    })
})

module.exports = app
