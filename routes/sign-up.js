'use strict'

const express = require('express')
const router = express.Router()
const signUpPage = require('./handlers').signUpPage

router.get('/', signUpPage)

module.exports = router