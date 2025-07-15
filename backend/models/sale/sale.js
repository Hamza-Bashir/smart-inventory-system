const mongoose = require("mongoose")

const saleSchema = new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"
    },
    quantity:{
        type:Number
    },
    soldBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
}, {
    timestamps:true
})

module.exports = mongoose.model("sale", saleSchema)