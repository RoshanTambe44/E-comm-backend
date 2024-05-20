const express = require("express")
const router = express.Router()
const getProducts = require('../controller/getproduct.controller.js')



router.get('/getproducts', getProducts)

module.exports = router