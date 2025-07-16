const business = require("../../models/business/businessSchema")
const asyncHandler = require("../../utilis/asyncHandler")
const bcryptjs = require("bcryptjs")
const AppError = require("../../utilis/AppError")
const code = require("../../constants/httpStatus")
const message = require("../../constants/messages")
const response = require("../../utilis/sendResponse")
const {signJwtToken} = require("../../utilis/jwtToken")
const auditLog = require("../../models/auditLog/auditLog")


// --------------- Add new business -----------------

const addBusiness = asyncHandler(async (req,res,next) => {
    const userId = req.user.id

    const {name} = req.body

    if(!name){
        return next(new AppError("Name is missing", 404))
    }

    const existingBusiness = await business.findOne({name:name, owner:userId})

    if(existingBusiness){
        return next(new AppError("Business already exist", 409))
    }

    const newBusiness = await business.create({
        name,
        owner:userId
    })

    await auditLog.create({
        user:req.user.id,
        action:"New business register",
        details:{
            name:req.user.name,
            businessName:newBusiness.name
        }
    })

    response(res, 200, true, "Business register successfully", {businessname:newBusiness.name})
})

module.exports = {addBusiness}