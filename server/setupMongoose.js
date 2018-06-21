module.exports = function setupMongoose() {
  const mongoose = require('mongoose')
  var options = {
    server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
  }

  var mongodbUri =
    'mongodb://chef:Fruehstueck-1982@ds163610.mlab.com:63610/inventor-database'
  mongoose.connect(
    mongodbUri,
    options
  )
  mongoose.Promise = global.Promise
  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', function() {
    // we're connected!
    console.log('mongoose connected')
  })
}
