const products = require('../model/productmodel.js')

const getProducts = async (req, res) => {

    try {
        
        const productsData = await products.find();
        res.json(productsData)


    } catch (error) {
        console.log(error, "error from fetch product")
    }



}

module.exports = getProducts