const cartproduct = require('../model/cartmodel');


const addCartProduct = async(req, res) => {

   const id = await cartproduct.findOne({ 'userid': req.body.id })

    if(id === null){
        try {
            await cartproduct.create({
                userid: req.body.id ,
                cartProducts: req.body.cartProducts
    
            })
            res.json({success: true , data:' successfully add'})
            
        } catch (error) {
            console.log(error, "error from addcartproduct.controller.js")
        }
    
    }
    else
    {
        try {

            await cartproduct.findOneAndUpdate({"userid": req.body.id},{$push:{ cartProducts: req.body.cartProducts}})
            res.json({success: true, data:' successfully add' })
            
        } catch (error) {
            console.log(error, "run else part on add cart")
        }
    }
    
}


module.exports = addCartProduct;