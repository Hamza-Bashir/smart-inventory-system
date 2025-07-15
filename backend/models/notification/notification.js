const mongoose = require("mongoose")

const notificationSchema = new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"
    },
    message:{
        type:String
    },
    isRead:{
        type:Boolean
    }
}, {
    timestamps:true
})

module.exports = mongoose.model("notification", notificationSchema)