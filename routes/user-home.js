'use strict'

const express = require('express')
const router = express.Router()
const userHomePage = require('./handlers').userHomePage

router.get('/', userHomePage)

module.exports = router