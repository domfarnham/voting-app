'use strict'

const User = require('../models/user')

exports.signUpPage = (req, res, next) => {
  res.render('signup')
}

exports.loginPage = (req, res, next) => {
  res.render('login')
}

exports.userHomePage = (req, res, next) => {
  res.render('user-home', {
    user: {
      firstName: 'Dom'
    }
  })
}

exports.newPollPage = (req, res, next) => {
  res.render('new-poll', {
    user: {
      firstName: 'Dom'
    }
  })
}

exports.congratsPage = (req, res, next) => {
  res.render('congrats', {
    user: {
      firstName: 'Dom'
    },
    pollURL: 'http://localhost:3000/poll'
  })
}

exports.myPollsPage = (req, res, next) => {
  res.render('my-polls', {
    user: {
      firstName: 'Dom'
    }
  })
}

exports.pollPage = (req, res, next) => {
  res.render('poll', { 
    pollName: 'What is your favourite sport?',
    pollOptions: ['Football', 'Tennis', 'Basketball', 'Swimming']
  })
}

exports.registerUser = (req, res, next) => {
  // confirm that user typed same password twice
  if (req.body.password !== req.body.passwordConf) {
    var err = new Error('Passwords do not match.')
    err.status = 400
    res.send('passwords dont match')
    return next(err)
  }

  if (req.body.firstName &&
    req.body.surname &&
    req.body.email &&
    req.body.password &&
    req.body.passwordConf) {
    
    var userData = {
      firstName: req.body.firstName,
      surname: req.body.surname,
      email: req.body.email,
      password: req.body.password,
      passwordConf: req.body.passwordConf
    }

    User.create(userData, function (error, user) {
      if (error) {
        return next(error)
      } else {
        // req.session.userId = user._id
        return res.redirect('/user-home')
      }
    })
  } else {
    var err = new Error('All fields required.')
    err.status = 400
    return next(err)
  }
}