const express = require("express")
const router = express.Router()
const getUsers = require('../controller/getusers.controller.js')



router.get('/getusers', getUsers)

module.exports = router



