
const Razorpay = require('razorpay');


var instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
  });
  
const checkout = async (req, res) => {
    
    
    try {
        const options = {
            amount: Number(req.body.amount * 100),  // amount in the smallest currency unit
            currency: "INR",
            receipt: "order_rcptid_11"
          };

         const order = await instance.orders.create(options);
     

         res.json({success : true, order})
          

    } catch (error) {
        console.log(error, 'somthing was wrong with checkout')
    }
}

module.exports = checkout;