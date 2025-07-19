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
    businessId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"business"
    },
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category"
    }
}, {
    timestamps:true
})

module.exports = mongoose.model("product", productSchema)