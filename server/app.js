var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var mongoose = require('mongoose')
var productRouter = require('./routes/product')
var app = express()
var fs = require('fs')
var fileUpload = require('express-fileupload')
var bodyParser = require('body-parser')
var uid = require('uid')

//setup MONGO-DB with mongoose

var options = {
  server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
}

var mongodbUri =
  'mongodb://chef:Schokolade-123@ds163610.mlab.com:63610/inventor-database'
mongoose.connect(
  mongodbUri,
  options
)
mongoose.Promise = global.Promise
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  // we’re connected!
  console.log('mongoose connected')
})

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// app.use(express.static('www'))
app.use(express.static(path.join(__dirname, 'build')))

app.use(express.static(path.join(__dirname, 'assets')))
// app.use(express.static('node_modules'))
// app.use(
//   bodyParser({
//     limit: '50mb',
//     keepExtensions: true,
//     uploadDir: __dirname + '/public/uploads',
//   })
// )
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  })
)

app.use('/product', productRouter)

module.exports = app
