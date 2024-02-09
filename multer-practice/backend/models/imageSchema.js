const mongoose = require("mongoose")
const imageSchema = new mongoose.Schema({
  
    image:{
        type:String,
    },
    images:{
        type:Array
    }
})

module.exports= mongoose.model('imaged' , imageSchema);