let Product = require('../models/Product')

const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
  Product.find({}).exec((err, data) => res.send(data))
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

module.exports = router
