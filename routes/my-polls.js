'use strict'

const express = require('express')
const router = express.Router()
const myPollsPage = require('./handlers').myPollsPage

router.get('/', myPollsPage)

module.exports = router