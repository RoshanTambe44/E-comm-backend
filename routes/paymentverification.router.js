const express = require("express")
const router = express.Router();
const paymentVerification = require('../controller/paymentverification.controller.js');

router.post('/paymentverification', paymentVerification)




module.exports = router;