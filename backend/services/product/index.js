const product = require("../../models/product/productSchema")
const asyncHandler = require("../../utilis/asyncHandler")
const AppError = require("../../utilis/AppError")
const code = require("../../constants/httpStatus")
const message = require("../../constants/messages")
const response = require("../../utilis/sendResponse")
const auditLog = require("../../models/auditLog/auditLog")


// --------------- add Product ----------------

const addProduct = asyncHandler(async (req,res,next) => {
    const {name,description,quantity,businessId,categoryId} = req.body

    const existingProduct = await product.findOne({name:name})

    if(existingProduct){
        return next(new AppError("Product already exist", 400))
    }

    const newProduct = await product.create({
        name:name,
        description:description,
        quantity:quantity,
        businessId:businessId,
        categoryId:categoryId
    })

    await auditLog.create({
        user:req.user.id,
        action:"New product Id",
        details:{
            name:req.user.name,
            productName:newProduct.name
        }
    })

    response(res, 200, true, "New product added successfully", {name:newProduct.name})
})


module.exports = {addProduct}