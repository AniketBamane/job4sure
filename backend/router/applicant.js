const express = require('express')
const { createApplicant, getApplicationsByApplicantId } = require('../controller/applicant')
const router =  express.Router()

router.route("/create-applicant").post(createApplicant)

router.route("/get-applications/:id").get(getApplicationsByApplicantId)

module.exports = router