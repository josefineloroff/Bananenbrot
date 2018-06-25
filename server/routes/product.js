const Product = require('../models/Product')
const express = require('express')
const router = express.Router()
const uid = require('uid')
const path = require('path')
const fs = require('fs')

router.get('/', function(req, res) {
  Product.find({}).exec((err, data) => res.send(data))
})

router.get('/product', (req, res) =>
  Product.find({}).exec((err, data) => res.send(data))
)

router.get('/product/:id', (req, res) => {
  console.log(req.params.id)
  return Product.findOne({ _id: req.params.id }).exec((err, data) =>
    res.send(data)
  )
})

router.post('/', (req, res) => {
  const file = req.files.file
  const originalName = file.name
  const fileName = `${uid(7)}.${originalName.split('.')[1]}`
  const targetPath = path.resolve(__dirname, '../uploads', fileName)

  fs.writeFile(targetPath, file.data, err => {
    const product = req.body
    console.log(product)
    if (err) {
      res.end(err.message)
    } else {
      new Product({ ...product, imageUrl: targetPath }).save(err => {
        if (err) {
          res.end(err.message)
        }
        res.json({ message: 'ok' })
      })
    }
  })
})

router.post('/s', (req, res) => {
  const products = req.body
  products.forEach(product => {
    const { id, ...rest } = product
    new Product(rest).save()
  })

  res.send('products added')
})

router.put('/product', (req, res) =>
  Product.findOneAndUpdate({ _id: req.body._id }, req.body).exec((err, data) =>
    res.send(`${req.body.name} updated`)
  )
)

module.exports = router
