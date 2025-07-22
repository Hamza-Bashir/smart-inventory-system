const user = require("../../models/user/userSchema")
const asyncHandler = require("../../utilis/asyncHandler")
const bcryptjs = require("bcryptjs")
const AppError = require("../../utilis/AppError")
const code = require("../../constants/httpStatus")
const message = require("../../constants/messages")
const response = require("../../utilis/sendResponse")
const {signJwtToken} = require("../../utilis/jwtToken")
const auditLog = require("../../models/auditLog/auditLog")

// ------------------ register user.....................

const registerUser = asyncHandler(async (req,res,next) => {
    const {firstName,lastName,userName,phoneNumber,email,password} = req.body

    const existingUser = await user.findOne({email})

    if(existingUser){
        return next(new AppError(message.AUTH.ALREADY_REGISTER, code.CONFLICT))
    }

    const hashPassword = await bcryptjs.hash(password, 10)

    const newUser = await user.create({
        firstName,
        lastName,
        userName,
        phoneNumber,
        email,
        plainPassword:password,
        hashPassword:hashPassword
    })

    await auditLog.create({
        user:newUser._id,
        action:"New user register",
        details:{
            name:newUser.name
        }
    })

    response(res, 200, true, message.AUTH.REGISTER_SUCCESS, newUser)

})

// ------------------ login user.....................

const loginUser = asyncHandler(async (req,res,next)=>{
    const {email,password} = req.body

    const existingUser = await user.findOne({email})

    if(!existingUser){
        return next(new AppError(message.AUTH.NOT_FOUND, code.NOT_FOUND))
    }

    const isMatchPassword = await bcryptjs.compare(password, existingUser.password)

    if(!isMatchPassword){
        return next(new AppError("Password is not matched", 409))
    }

    const token = signJwtToken({name:existingUser.name, email:existingUser.email, id:existingUser._id})


    response(res,200, true, "Login Successfully", {name:existingUser.name,email:existingUser.email, token:token})

  


})

module.exports = {registerUser, loginUser}