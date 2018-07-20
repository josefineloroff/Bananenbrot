const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const fs = require('fs')
const fileUpload = require('express-fileupload')
const uid = require('uid')

//setup MONGO-DB with mongoose

const options = {
  server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
}

const mongodbUri =
'mongodb://chef:Schokolade-123@ds161520.mlab.com:61520/inventor-database'
mongoose.connect(
  mongodbUri,
  options
)
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  // we’re connected!
  console.log('mongoose connected')
})

app.use(logger('dev'))
app.use(express.json())
 // parse incoming requests

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static('www'))

// serve static files from template
app.use(express.static(path.join(__dirname, 'build')))
app.use(express.static(path.join(__dirname, 'assets')))
app.use(express.static(path.join(__dirname + '../src/components/Authentication/Registration')));
app.use(express.static(path.join(__dirname, 'assets/images')))
app.use(express.static('node_modules'))
app.use(
   express({
     limit: '50mb',
     keepExtensions: true,
     uploadDir: __dirname + '/public/uploads',
   })
 )
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  })
)


//use sessions for tracking logins
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));


// include routes
// const routes = require('./routes/user');
// app.use('/', routes);

 // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    const err = new Error('File Not Found');
    err.status = 404;
    next(err);
  });

 // error handler
 // define as the last app.use callback
 app.use(function (err, req, res, next) {
   res.status(err.status || 500);
   res.send(err.message);
 });



app.use ('/user', userRouter)
app.use('/product', productRouter)

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("server connected")
})

app.listen(3007)

module.exports = app
