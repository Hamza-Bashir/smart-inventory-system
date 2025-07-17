const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    name:{
        type:String
    },
    businessId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"business"
    }
}, {
    timestamps:true
})

module.exports = mongoose.model("category", categorySchema)