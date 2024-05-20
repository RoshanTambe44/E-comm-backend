const user = require('../model/usermodel') //import schema from #user model


const loginuser = async (req, res)=>{ //router.post for posting data on partcular route 
    let email = req.body.email
    
    try {
        //this is user which we imported above we use that user object for tramfer data to database... 
         let userData = await user.findOne({email})

         if(!userData){
            return res.json({error:"add valid email " })
         }

         if( req.body.password !==  userData.password ){
            return res.json({error: "add valid password"})
         }

         else{
            return res.json({success:true, name:userData.name, id:userData._id , roll: userData.roll , token: await userData.generateToken() })
         }

        
    } catch (error) {
            console.log(error)
            res.json({success: false})
    }
}



module.exports = loginuser;