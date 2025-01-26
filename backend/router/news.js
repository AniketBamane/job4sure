const express = require('express')
const { getNews } = require('../controller/news')
const router =  express.Router()

router.route("/get-news").get(getNews)

module.exports = router