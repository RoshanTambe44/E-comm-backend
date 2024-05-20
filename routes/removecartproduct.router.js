const express = require('express');
const router = express.Router();
const removeCartProduct = require('../controller/removecartproduct.controller.js')


router.post('/removecartproduct', removeCartProduct) ;



module.exports = router;