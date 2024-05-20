const user = require('../model/usermodel') 

const removeUser = async (req, res) => {
    

    try {
        await user.deleteOne({
        _id:req.body.id
        })

        res.json({success: true , data:"deleted" , id: req.body.id})
    } catch (error) {
        console.log(error, "data is not deleted")
    }
    



};

module.exports = removeUser;