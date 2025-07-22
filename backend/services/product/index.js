const product = require("../../models/product/productSchema")
const asyncHandler = require("../../utilis/asyncHandler")
const AppError = require("../../utilis/AppError")
const code = require("../../constants/httpStatus")
const message = require("../../constants/messages")
const response = require("../../utilis/sendResponse")
const auditLog = require("../../models/auditLog/auditLog")
const redisClient = require("../../redisClient")


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
        action:"New product added",
        details:{
            name:req.user.name,
            productName:newProduct.name,
        }
    })

    response(res, 200, true, "New product added successfully", {name:newProduct.name})
})

// --------------- get all Product ----------------

const getAllProduct = asyncHandler(async (req,res,next) => {
    const {businessId, categoryId} = req.body

    const cacheKey = `product:${businessId}:${categoryId}`

    const cacheData = await redisClient.get(cacheKey)

    if(cacheData){
        return response(res, 200, true, "Product found successfullly", {
            getAllProduct : JSON.parse(cacheData)
        })
    }

    const getAllProduct = await product.find({businessId:businessId, categoryId:categoryId}).populate("businessId", "name").populate("categoryId","name")

    if(!getAllProduct){
        return next(new AppError("No product exist", 400))
    }

    await redisClient.set(`product:${businessId}:${categoryId}`, JSON.stringify(getAllProduct), {EX:3600})

    response(res, 200, true, "Product found successfully", {getAllProduct})
})

// --------------- search Product ----------------

const searchProduct = asyncHandler(async (req,res,next) => {
    const {name} = req.query

    const getProduct = await product.find({name:{$regex:name, $options:"i"}})

    if(!getProduct){
        return next(new AppError("Product not found", 400))
    }

    response(res, 200, true, "Product search successfully", {getProduct})
})

// --------------- edit Product ----------------

const editProduct = asyncHandler(async (req,res,next) => {

    const {productId} = req.params
    const {name, description, quantity} = req.body

    const existingProduct = await product.findOne({_id:productId})

    if(!existingProduct){
        return next(new AppError("Product not found", 400))
    }

    if(name) existingProduct.name = name
    if(description) existingProduct.description = description
    if(quantity) existingProduct.quantity = quantity

    existingProduct.save()

    await auditLog.create({
        user:req.user.id,
        action:"Edit Product",
        details:{
            productName:existingProduct.name
        }
    })

    await redisClient.del(`product:${businessId}:${categoryId}`)

    response(res, 200, true, "Product update successfully")

    
})

// --------------- delete Product ----------------

const deleteProduct = asyncHandler(async (req,res,next) => {
    const {productId} = req.params

    const existingProduct = await product.findOne({_id:productId})

    if(!existingProduct){
        return next(new AppError("Product not exist"))
    }

    await product.deleteOne({_id:productId})

    await auditLog.create({
        user:req.user.id,
        action:"Edit Product",
        details:{
            productName:existingProduct.name
        }
    })

    await redisClient.del(`product:${businessId}:${categoryId}`)

    response(res, 200, true, "Product delete successfully")
})



module.exports = {addProduct, getAllProduct, searchProduct, editProduct, deleteProduct}