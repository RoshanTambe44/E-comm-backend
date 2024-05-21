const express = require("express");
require('dotenv').config()
const mongoose = require('mongoose'); 
const app = express();
const Db = require('./db');

const user = require('./model/usermodel.js');

const PORT = process.env.PORT;

Db()

//this line of code for cross connection---------when browser throw cors error for routing may be 
app.use((req, res, next)=>{
        res.setHeader('Access-Control-Allow-Origin', 'https://roshanecomm.netlify.app');
        res.header('Access-Control-Allow-Headers', "Origin, X-Requisted-With, Content-Type, Accept");
        next();
} )

//-----------------------------


app.listen( PORT , () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });


 app.get('/api/getkey',(req, res)=>{
      return res.json({key: process.env.RAZORPAY_KEY})
 }) 

 

 


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api", require('./routes/createusers.js'))  //import router from #creatusers then create like "http://localhost:1234/api/creatuser"
app.use("/api", require('./routes/addproductroute.js'))  //import router from #creatusers then create like "http://localhost:1234/api/addproduct"
app.use("/api", require('./routes/getProduct.route.js'))  //import router from #creatusers then create like "http://localhost:1234/api/getproduct"
app.use("/api", require('./routes/getusers.route.js'))  //import router from #creatusers then create like "http://localhost:1234/api/getuser"
app.use("/api", require('./routes/removeuserroute.js'))  //import router from #creatusers then create like "http://localhost:1234/api/removeuser"
app.use("/api", require('./routes/edituserrouter.js'))  //import router from #creatusers then create like "http://localhost:1234/api/edituser"
app.use("/api", require('./routes/addcartrouter.js'))  //import router from #creatusers then create like "http://localhost:1234/api/addcartproduct"
app.use("/api", require('./routes/getcartproductrouter.js'))  //import router from #creatusers then create like "http://localhost:1234/api/addcartproduct"
app.use("/api", require('./routes/removecartproduct.router.js'))  //import router from #creatusers then create like "http://localhost:1234/api/removecartproduct"
app.use("/api", require('./routes/checkout.router.js'))   //import router from #creatusers then create like "http://localhost:1234/api/removecartproduct"
app.use("/api", require('./routes/paymentverification.router.js'))  //import router from #creatusers then create like "http://localhost:1234/api/removecartproduct"
app.use(express.json())
app.use("/api", require('./model/createusers.js'))  //import router from #creatusers then create like "http://localhost:1234/api/creatuser"


//it id for trail of datastoring in mongodb which above imported


//--------------------------------------------------------------
