const express = require("express");
const router = express.Router();
const checkout = require('../controller/checkout.controller.js');

router.post('/checkout', checkout )



module.exports = router