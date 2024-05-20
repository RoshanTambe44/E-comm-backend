const express = require('express');
const router = express.Router()
const removeUser = require('../controller/removeuser.controller')

router.post('/removeuser', removeUser )

module.exports = router