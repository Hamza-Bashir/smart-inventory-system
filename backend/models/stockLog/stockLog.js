const mongoose = require("mongoose")

const stockLogSchema = new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"
    },
    action:{
        type:String,
        enum:["IN", "OUT"]
    },
    quantity:{
        type:Number
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
}, {
    timestamps:true
})

module.exports = mongoose.model("stockLog", stockLogSchema)