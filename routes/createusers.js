const express = require("express");
const router = express.Router();
const createuser = require('../controller/createuser.controller.js')
const loginuser = require('../controller/loginuser.controller.js')

router.post('/creatuser', createuser )

router.post('/loginuser', loginuser )
   


module.exports = router; //for throw that date to the mongo db