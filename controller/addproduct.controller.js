const products = require('../model/productmodel.js');

const addproduct = async (req, res) => {
    try {
         await products.create({
            title : req.body.title,
            price : req.body.price,
            description : req.body.description,
            category : req.body.category,
            image : req.body.image,
            new:req.body.new
        })
      res.json({ success : true })  
    } catch (error) {
        console.log("data not send", error)
        
    }
 }

module.exports = addproduct
