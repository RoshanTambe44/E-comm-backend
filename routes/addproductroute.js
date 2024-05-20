const express = require('express');
const router = express()

const addproduct = require('../controller/addproduct.controller.js')


router.post('/addproduct', addproduct )


 module.exports = router;