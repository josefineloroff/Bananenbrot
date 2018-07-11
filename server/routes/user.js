const express = require('express')
const router = express.Router()
var User = require('../models/User')
const path = require('path')
const fs = require('fs')
const uid = require('uid')
var bodyParser = require('body-parser')

router.get('/', function(req, res) {
  User.find({}).exec((err, data) => res.send(data))
})

router.get('/user', (req, res) =>
  User.find({}).exec((err, data) => res.send(data)),
)

router.get('/user/:id', (req, res) => {
  console.log(req.params.id)
  return User.findOne({ _id: req.params.id }).exec((err, data) =>
    res.send(data),
  )
})


router.post('/', (req, res) => {
  const user = req.body

  if (req.body.email &&
    req.body.username &&
    req.body.password &&
    req.body.passwordConf) {
    var userData = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      passwordConf: req.body.passwordConf,
    }
    //use schema.create to insert data into the db
    User.create(userData, function (err, user) {
      if (err) {
        return next(err)
      } else {
        return res.redirect('/profile');
      }
    });
  }
  function saveUser(res, user) {
    new User({ ...username, ...email, ...password, ...passwordConf }).save(err => {
      if (err) {
        res.end(err.message)
      }
      res.json({ message: 'ok' })
    })
  }

})


router.put('/user', (req, res) =>
  User.findOneAndUpdate({ _id: req.body._id }, req.body).exec((err, data) =>
    res.send(`${req.body.user} updated`),
  ),
)

module.exports = router


