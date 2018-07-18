const express = require('express')
const router = express.Router()
const User = require('../models/User')
const path = require('path')
const fs = require('fs')
const uid = require('uid')
const bodyParser = require('body-parser')

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





// GET route for reading data
// router.get('/', function (req, res, next) {
//   return res.sendFile(path.join(__dirname + '../../src/components/Authentication/Registration'));
// });


//POST route for updating data
router.post('/', function (req, res, next) {
  console.log(req)

  // confirm that user typed same password twice
  if (req.body.password !== req.body.passwordConf) {
    const err = new Error('Passwords do not match.');
    err.status = 400;
    res.send("passwords dont match");
    return next(err);
  }

  if (req.body.email &&
    req.body.username &&
    req.body.password &&
    req.body.passwordConf) {

    const userData = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      passwordConf: req.body.passwordConf,
    }

    User.create(userData, function (error, user) {
      if (error) {
        return next(error);
      } else {
        req.session.userId = user._id;
        return res.redirect('../../src/components/Authentication/Profile');
      }
    });

  } else if (req.body.logemail && req.body.logpassword) {
    User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
      if (error || !user) {
        const err = new Error('Wrong email or password.');
        err.status = 401;
        return next(err);
      } else {
        req.session.userId = user._id;
        return res.redirect('../../src/components/Authentication/Profile');
      }
    });
  } else {
    const err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
})

// GET route after registering
router.get('/profile', function (req, res, next) {
  User.findById(req.session.userId)
    .exec(function (error, user) {
      if (error) {
        return next(error);
      } else {
        if (user === null) {
          const err = new Error('Not authorized! Go back!');
          err.status = 400;
          return next(err);
        } else {
          return res.sendFile(path.join(__dirname + '../../src/components/Authentication/Profile'));
        }
      }
    });
//     // Login requires
// function requiresLogin(req, res, next) {
//   if (req.session && req.session.userId) {
//     return next()
//   }
//   else {
//     const err = new Error ('You must be logged in to view this page.')
//     err.status = 401
//     return next(err)
//   }
//}
});






// GET for logout logout
router.get('/logout', function (req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      } else {
        return res.redirect('/');
      }
    });
  }
});

module.exports = router;


