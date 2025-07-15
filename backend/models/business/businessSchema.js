const mongoose = require("mongoose")

const businessSchema = new mongoose.Schema({
    name:{
        type:String
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
}, {
    timestamps:true
})

module.exports = mongoose.model("business", businessSchema)