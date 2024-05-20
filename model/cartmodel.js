const mongoose = require("mongoose");

const cartProductSchema = new mongoose.Schema({
  userid: { type: String, require: true},
  cartProducts: { type: Array, require: true },
});

module.exports = mongoose.model("cartproduct", cartProductSchema);
