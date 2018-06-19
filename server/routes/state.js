const express = require('express')
const router = express.Router()
const data = require('../data.json')
const fs = require('fs')

router.get('/', function(req, res) {
  res.json(data)
})

router.post('/', (req, res) => {
  fs.writeFile(
    __dirname + '/../data.json',
    JSON.stringify(req.body),
    'utf8',
    err => {
      err ? res.end('error') : res.end('success')
    }
  )
})

module.exports = router
