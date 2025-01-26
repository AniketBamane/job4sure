const express = require('express')
const { createApplicant } = require('../controller/applicant')
const router =  express.Router()

router.route("/create-applicant").post(createApplicant)

module.exports = router