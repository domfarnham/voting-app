'use strict'


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
    pollURL: "http://localhost:3000/poll"
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