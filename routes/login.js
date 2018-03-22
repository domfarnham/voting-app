'use strict'

const express = require('express')
const router = express.Router()
const loginPage = require('./handlers').loginPage

router.get('/', loginPage)

module.exports = router