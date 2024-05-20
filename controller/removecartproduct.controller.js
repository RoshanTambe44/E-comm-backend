const cartProduct = require('../model/cartmodel.js');
 

const removeCartProduct = async (req, res) => {

try {
  await cartProduct.updateOne({userid: req.body.id},{$pull:{cartProducts:{productId: req.body.cartproductid}}}) 
    
    
    res.json({ success: true, data: "deletedProduct" });
} catch (error) {
    console.log(error)
}

}


module.exports = removeCartProduct 