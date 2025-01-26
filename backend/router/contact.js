const express = require('express')
const { createContact } = require('../controller/contact')
const router =  express.Router()

router.route("/create-contact").post(createContact)

module.exports = router