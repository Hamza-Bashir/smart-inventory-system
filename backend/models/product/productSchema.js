const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    quantity:{
        type:Number
    },
    business:{
        type:mongoose.Schema.Types.ObjectId
    },
    category:{
        type:mongoose.Schema.Types.ObjectId
    }
}, {
    timestamps:true
})

module.exports = mongoose.model("product", productSchema)