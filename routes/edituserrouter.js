const express = require("express")
const router = express.Router();
const editUser = require('../controller/editusercontroller.js')

router.post('/edituser', editUser)

module.exports = router