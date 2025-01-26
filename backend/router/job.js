const express = require('express')
const { fetchJobs, fetchJobById } = require('../controller/job')
const router =  express.Router()

router.route("/get-jobs").get(fetchJobs)
router.route("/get-job/:id").get(fetchJobById)

module.exports = router