const express = require("express");
const router = express.Router();
const user = require('./usermodel') //import schema from #user model

router.post('/creatuser', async (req, res)=>{ //router.post for posting data on partcular route by using url.
    try {
        //this is user which we imported above we use that user object for tramfer data to database... 
        await user.create({
            name:req.body.name, // this line is req which we create and body where we fill our data and name is that key where we assign that data.  
            email:req.body.email,
            password:req.body.password,
            
        })
        
        res.json({success: true})
        
    } catch (error) {
            console.log(error)
            res.json({success: false})
    }
} )

router.post('/loginuser', async (req, res)=>{ //router.post for posting data on partcular route 
    let email = req.body.email
    try {
        //this is user which we imported above we use that user object for tramfer data to database... 
         let userData = await user.findOne({email})
         
         
         if(!userData){
            return res.json({error:"add valid email" })
         }

         if( req.body.password !==  userData.password ){
            return res.json({error: "add valid password"})
         }

         else{
            return res.json({success:true, name: userData.name})
         }

        
    } catch (error) {
            console.log(error)
            res.json({success: false})
    }
} )
   


module.exports = router; //for throw that date to the mongo db
