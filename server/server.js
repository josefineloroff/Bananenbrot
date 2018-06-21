const express = require('express')
const app = express()
const Term = require('./models/Term')
const fs = require('fs')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

require('./server/setupMongoose')(app)
require('./server/setupExpress')(app)
require('./server/createServer')(app)

app.use(express.static('www'))
app.use(express.static('node_modules'))
app.use(
  bodyParser({
    keepExtensions: true,
    uploadDir: __dirname + '/public/uploads',
  })
)
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  })
)

app.get('/clear', (req, res) => Term.deleteMany().then(res.send('All clear.')))

app.post('/image', (req, res) => {
  const { image } = req.files
  fs.writeFile(__dirname + '/' + image.name, image.data, err => {
    err ? res.end('error') : res.end('done')
  })
})

app.get('/terms', (req, res) =>
  Term.find({}).exec((err, data) => res.send(data))
)

app.get('/terms/:id', (req, res) => {
  console.log(req.params.id)
  return Term.findOne({ _id: req.params.id }).exec((err, data) =>
    res.send(data)
  )
})

app.delete('/terms/:id', (req, res) =>
  Term.deleteOne({ _id: req.params.id }, err => {
    if (err) {
      throw err
    }
    res.send(`${req.params.id} deleted.`)
  })
)

app.post(
  '/terms',
  (req, res) => (new Term(req.body).save(), res.send(`${req.body.name} added`))
)

app.put('/terms', (req, res) =>
  Term.findOneAndUpdate({ _id: req.body._id }, req.body).exec((err, data) =>
    res.send(`${req.body.name} updated`)
  )
)
