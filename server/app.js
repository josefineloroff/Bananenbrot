var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var mongoose = require('mongoose')
var productRouter = require('./routes/product')
var app = express()
var Product = require('./models/Product')
var fs = require('fs')
var fileUpload = require('express-fileupload')
var index = require('./routes/index')
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
app.use(express.static('www'))
app.use(express.static(path.join(__dirname, 'build')))

app.use(express.static('node_modules'))
app.use(
  bodyParser({
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

app.post('/image', (req, res) => {
  var tempPath = req.files[0].path
  var str = uid.sync(7)
  var extension = req.files[0].originalname.split('.').pop()
  console.log('files received: ' + str)
  str = str + '.' + extension
  var TARGET_PATH = path.resolve(__dirname, '../public/uploads/')
  var targetPath = path.join(TARGET_PATH, str)

  var is = fs.createReadStream(tempPath)
  var os = fs.createWriteStream(targetPath)
  is.pipe(os)
  // file write error
  is.on('error', function(err) {
    if (err) {
      console.log(err)
    }
  })
  // file end
  is.on('end', function() {
    //delete file from temp folder
    fs.unlink(tempPath, function(err) {
      if (err) {
        return res.send(500, 'Something went wrong')
      }
    })
  })
  var x = '/uploads/' + str
  imgs.unshift({
    imageName: str,
    imageURL: x,
    extension: '.png',
    created: Date.now(),
  })
  res.json({ message: 'ok' })

  // Object.keys(req.files).forEach(name => {
  //   const id = uid()
  //   const image = req.files[name]
  //   const fileName = id + '.' + image.name.split('.')[1]
  //   const filePath = __dirname + '/upload/' + fileName
  //   console.log(filePath, image)

  //   fs.writeFile(filePath, image.data, err => {
  //     if (err) {
  //       res.end(err.message)
  //     }

  //     new Product({ imageUrl: filePath }).save((err, prod) => {
  //       if (err) {
  //         res.end(err)
  //       } else {
  //         res.end('done')
  //       }
  //     })
  //   })
  // })
})

app.use('/product', productRouter)

module.exports = app
