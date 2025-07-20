const category = require("../../models/category/categorySchema")
const product = requied("../../models/product/productSchema")
const asyncHandler = require("../../utilis/asyncHandler")
const AppError = require("../../utilis/AppError")
const code = require("../../constants/httpStatus")
const message = require("../../constants/messages")
const response = require("../../utilis/sendResponse")
const auditLog = require("../../models/auditLog/auditLog")


// ------------------- add category ----------------

const addCategory = asyncHandler(async (req,res,next) => {
    const {businessId} = req.params
    const {categoryname} = req.body

    const existingCategory = await category.findOne({name:categoryname})

    if(existingCategory){
        return next(new AppError("Category already exist", 400))
    }

    const newCategory = await category.create({
        name:categoryname,
        businessId:businessId
    })

    await auditLog.create({
        user:req.user.id,
        action:'New Business category added',
        details:{
            name:req.user.name,
            categoryName:newCategory.name
        }
    })

    response(res, 200, true, "New category added successfully", {categoryName:newCategory.name})

})

// ------------------- get all category ----------------

const getAllCategory = asyncHandler(async (req,res,next) => {
    const {businessId} = req.params

    if(!businessId){
        return next(new AppError("businessId is required"))
    }

    const allCategory = await category.find({businessId:businessId})

    if(!allCategory){
        return next(new AppError("No category exist", 400))
    }

    response(res, 200, true, "Category found successfully", {allCategory})
})


// ------------------- search category ----------------

const searchCategory = asyncHandler(async (req,res,next) => {
    const {name} = req.query

    const existingCategory = await category.find({name:{$regex:name, $options:"i"}})

    if(!existingCategory){
        return next(new AppError("Category not found", 400))
    }

    response(res, 200, true, "Category search successfully", {existingCategory})
})


// ------------------- edit category ----------------

const editCategory = asyncHandler(async (req,res,next) => {
    const {categoryId} = req.params
    const {newName} = req.body

    const existingCategory = await category.findOne({_id:categoryId})

    if(!existingCategory){
        return next(new AppError("Category not exist", 400))
    }

    existingCategory.name = newName
    await existingCategory.save()

    await auditLog.create({
        user:req.user.id,
        action:"Category edit",
        details:{
            name:req.user.name,
            newCategoryName:existingCategory.name
        }
    })

    response(res, 200, true, "Category edit successfully", {newCategoryName:existingCategory.name})
})

// ------------------- delete category ----------------

const deleteCategory = asyncHandler(async (req,res,next) => {
    const {categoryId} = req.params

    const existingCategory = await category.findOne({_id:categoryId})

    if(!existingCategory){
        return next(new AppError("Category not found", 400))
    }

    const deleteCategory = await category.deleteOne({_id:categoryId})

    await product.deleteMany({categoryId:categoryId})

    await auditLog.create({
        user:req.user.id,
        action:"Delete category",
        details:{
            name:req.user.name,
            deleteCategoryName : deleteCategory.name
        }
    })

    response(res,200,true, "Category delete successfully")
})

module.exports = {addCategory, getAllCategory, searchCategory, editCategory, deleteCategory}