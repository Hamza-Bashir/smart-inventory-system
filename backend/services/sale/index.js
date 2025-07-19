const sale = require("../../models/sale/sale")
const product = require("../../models/product/productSchema")
const auditLog = require("../../models/auditLog/auditLog")
const notification = require("../../models/notification/notification")
const asyncHandler = require("../../utilis/asyncHandler")
const AppError = require("../../utilis/AppError")
const response = require("../../utilis/sendResponse")


// ------------ add sale -----------

const addSale = asyncHandler(async (req,res,next) => {
    const {productId, quantity} = req.body

    await sale.create({
        productId:productId,
        quantity:quantity
    })

    const existingProduct = await product.findOne({_id:productId})

    existingProduct.quantity -= quantity

    existingProduct.save()

    if(existingProduct.quantity <= 5){
        await notification.create({
          product:productId,
          message:"Product quantity is less than or equal to 5",
          isRead:false  
        })
    }

    await auditLog.create({
        user:req.user.id,
        action:"Add sale data",
        details:{
            name:req.user.name
        }
    })

    response(res, 200, true, "sale added successfully")


})


// ------------ get sale data -----------


const getAllSale = asyncHandler(async (req,res,next) => {
    const {productId} = req.params

    const allSale = await sale.find({productId:productId})

    if(!allSale){
        return next(new AppError("No record found", 400))
    }

    response(res, 200, true, "Sale found successfully", {allSale})
})



module.exports = {addSale, getAllSale}