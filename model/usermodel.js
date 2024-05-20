const mongoose = require("mongoose");
const jwt = require('jsonwebtoken')
//thise is model file for creating a schema, schema is like we can define data type which data we want to store as particular data type in database 

const userschema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  roll:{type:String, default: "user"},
  date: {
    type: Date,
    default: Date.now,
  },
});

//json web token
userschema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        roll:this.roll
      }, process.env.JWT_SECRET_KEY 
    )
  } catch (error) {
    console.log(error)
  }

} 

module.exports = mongoose.model("users", userschema); //export this schema 
