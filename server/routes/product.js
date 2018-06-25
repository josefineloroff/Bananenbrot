let Product = require('../models/Product')
const express = require('express')
const router = express.Router()

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
  const product = req.body

  new Product(product).save()
  res.send('product added')
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
