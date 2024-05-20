const mongoose = require('mongoose')


const productschema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    category: { type: String, required:true },
    image: { type: String, required:true},
    rating:{type: Number },
    new:{type:Boolean}
    
  });


module.exports = products = mongoose.model("products", productschema); //export this schema 