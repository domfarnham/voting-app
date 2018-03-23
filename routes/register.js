'use strict'

const express = require('express')
const router = express.Router()
const registerUser = require('./handlers').registerUser

router.post('/', registerUser)

module.exports = router