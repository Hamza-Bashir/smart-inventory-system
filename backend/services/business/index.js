const business = require("../../models/business/businessSchema")
const asyncHandler = require("../../utilis/asyncHandler")
const AppError = require("../../utilis/AppError")
const code = require("../../constants/httpStatus")
const message = require("../../constants/messages")
const response = require("../../utilis/sendResponse")
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


// --------------- get all business -----------------

const getAllBusiness = asyncHandler(async (req,res,next) => {
    const userId = req.user.id

    const allBusiness = await business.find({owner:userId}).select("name")

    if(!allBusiness){
        return next(new AppError("No Business Exist", 400))
    }

    response(res, 200, true, "Business found successfully", {businesses:allBusiness})
})


// --------------- search business -----------------

const searchBusiness = asyncHandler(async (req,res,next) => {
    const userId = req.user.id

    const {name} = req.query

    const existingBusiness = await business.findOne({owner:userId, name:{$regex:name, $options:"i"}}).populate("owner", "name email")

    if(!existingBusiness){
        return next(new AppError("Bunsiess not exist", 400))
    }

    response(res, 200, true, "Business found successfully", {business:existingBusiness})

})

// --------------- edit business -----------------

const editBusiness = asyncHandler(async (req,res,next) => {
    const {newName} = req.body
    const {businessId} = req.params
    const userId = req.user.id
    
    const existingBusiness = await business.findOne({_id:businessId, owner:userId})

    if(!existingBusiness){
        return next(new AppError("Business not exist", 400))
    }

    existingBusiness.name = newName
    await existingBusiness.save()

    await auditLog.create({
        user:userId,
        action:"Business name edit",
        details:{
            name:req.user.name,
            newBusinessName:existingBusiness.name
        }
    })

    response(res, 200, true, "Business name edit successfully", {newBusinessName:existingBusiness.name})
     
})

// --------------- delete business -----------------

const deleteBusiness = asyncHandler(async (req,res,next) => {
    const userId = req.user.id
    const {businessId} = req.params

    const existingBusiness = await business.findOne({_id:businessId, owner:userId})

    if(!existingBusiness){
        return next(new AppError("Business not exist", 400))
    }

    await business.deleteOne({_id:businessId, owner:userId})

    await auditLog.create({
        user:userId,
        action:"Business deleted",
        details:{
            name:req.user.name,
            businessName:existingBusiness.name
        }
    })

    response(res, 200, true, "Business deleted successfully", {deletedBusinessName:existingBusiness.name})
})


module.exports = {addBusiness, getAllBusiness, searchBusiness, editBusiness, deleteBusiness}