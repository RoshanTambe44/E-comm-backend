const user = require('../model/usermodel') //import schema from #user model

const createuser = async (req, res)=>{ //router.post for posting data on partcular route 
    try {
        //this is user which we imported above we use that user object for tramfer data to database... 
       const createuserdata = await user.create({
            name:req.body.name, // this line is req which we create and body where we fill our data and name is that key where we assign that data.  
            email:req.body.email,
            password:req.body.password,
            
        })
        
        return res.json({success: true})
        
    } catch (error) {
            console.log(error)
            return res.json({success: false})
    }
} 






module.exports = createuser;