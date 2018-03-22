'use strict'

const express = require('express')
const router = express.Router()
const newPollPage = require('./handlers').newPollPage

router.get('/', newPollPage)

module.exports = router