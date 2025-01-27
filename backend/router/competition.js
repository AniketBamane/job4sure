const express = require('express')
const { getAllCompetitions, getLatestCompetitions, fetchCompetitionById } = require('../controller/competition')
const router =  express.Router()

router.route("/get-competitions").get(getAllCompetitions)
router.route("/get-latest-competitions").get(getLatestCompetitions)
router.route("/get-competition/:id").get(fetchCompetitionById)

module.exports = router