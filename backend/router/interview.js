const express = require('express')
const { getVideos } = require('../controller/interview')
const router =  express.Router()

router.route("/get-interviews").get(getVideos)

module.exports = router