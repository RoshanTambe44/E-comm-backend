const express = require('express');
const router = express.Router();
const getCartProduct = require('../controller/getcartproducts.controller.js')


router.post('/getcartproduct', getCartProduct)


module.exports = router