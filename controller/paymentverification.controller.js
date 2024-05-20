const crypto = require("crypto");
const payment = require("../model/paymentschema.js");


const paymentVerificstion = async (req, res) => {
  
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature , user_id, purchased_product} =
      req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSigneture = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(body.toString())
      .digest("hex");
    const isauth = expectedSigneture === razorpay_signature;
    if (isauth) {
      await payment.create({
        razorpay_order_id: razorpay_order_id,
        razorpay_payment_id: razorpay_payment_id,
        razorpay_signature: razorpay_signature,
        
      }),

      res.redirect(`http://localhost:3000/transectionsuccess?reference=${razorpay_payment_id}`)
    
    }

    
  } catch (error) {
    console.log(error);
  }
};

module.exports = paymentVerificstion;
