const cartProducts = require('../model/cartmodel');



const getCartProduct = async (req, res) =>{
    try {
       const data = await cartProducts.findOne({userid: req.body.id})
        res.json({data})
        
    } catch (error) {
        console.log(error, "product not fetched")
    }


}

module.exports = getCartProduct