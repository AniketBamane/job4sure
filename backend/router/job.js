const express = require('express')
const { fetchJobs, fetchJobById, getLatestJobs } = require('../controller/job')
const router =  express.Router()

router.route("/get-jobs").get(fetchJobs)
router.route("/get-job/:id").get(fetchJobById)
router.route("/get-latest-jobs").get(getLatestJobs)

module.exports = router