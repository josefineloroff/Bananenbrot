let User = require('../models/User')

const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
  User.find({}).exec((err, data) => res.send(data))
})

router.post('/', (req, res) => {
  const user = req.body
  new User(user).save()
  res.send('user added')
})

module.exports = router
