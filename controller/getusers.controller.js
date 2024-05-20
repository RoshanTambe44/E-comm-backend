const users = require("../model/usermodel.js")




const getUsers = async(req, res) => {

    try {
        
        const data = await users.find();
        res.json(data)
        

    } catch (error) {
        console.log(error, "USER NOT FETCHED")
    }

}


module.exports = getUsers;

