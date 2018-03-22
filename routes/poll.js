'use strict'

const express = require('express')
const router = express.Router()
const pollPage = require('./handlers').pollPage

router.get('/', pollPage)

module.exports = router