const router = require("express").Router()
const category = require("../../services/category/index")

router.post("/add-category/:businessId", category.addCategory)
router.get("/all-category/:businessId", category.getAllCategory)
router.get("/search-category", category.searchCategory)
router.patch("/edit-category/:categoryId", category.editCategory)
router.delete("/delete-category/:categoryId", category.deleteCategory)

module.exports = router
