'use strict'

const express = require('express')
const router = express.Router()
const congratsPage = require('./handlers').congratsPage

router.get('/', congratsPage)

module.exports = router