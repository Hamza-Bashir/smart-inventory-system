const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    userName:{
        type:String
    },
    phoneNumber:{
        type:Number
    },
    email:{
        type:String
    },
    plainPassword:{
        type:String
    },
    hashPassword:{
        type:String
    },
    image:{
        type:String
    }
}, {
    timestamps:true
})

module.exports = mongoose.model("user", userSchema)

