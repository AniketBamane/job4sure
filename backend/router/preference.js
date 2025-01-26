const express = require('express')
const { createPreference } = require('../controller/preference')
const router =  express.Router()

router.route("/create-preference").post(createPreference)

module.exports = router