const mongoose = require("mongoose")

const saleSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"
    },
    quantity:{
        type:Number
    }
}, {
    timestamps:true
})

module.exports = mongoose.model("sale", saleSchema)