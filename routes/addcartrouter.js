const express = require('express');
const router = express.Router();
const addCartProduct = require('../controller/addcartproduct.controller.js')

router.post('/addcartproduct', addCartProduct) 

module.exports = router;