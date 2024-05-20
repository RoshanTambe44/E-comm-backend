const mongoose = require('mongoose'); 


async function Db (){  await mongoose.connect(process.env.MONGO_URL, console.log("succes"))
 }   

module.exports = Db