const users = require("../model/usermodel.js");

const editUser = async (req, res) => {
  try {
    await users.updateOne({ _id: req.body.id }, { roll: req.body.roll });
    res.json({success : true, data : "edited"})
  } catch (error) {
    console.log(error, "something went wrong");
  }
};


module.exports = editUser;