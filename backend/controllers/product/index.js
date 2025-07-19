const router = require("express").Router()
const product = require("../../services/product/index")

router.post("/add-product", product.addProduct)
router.get("/get-product", product.getAllProduct)
router.get("/search-product", product.searchProduct)
router.patch("/update-product/:productId", product.editProduct)
router.delete("/delete-product/:productId", product.deleteProduct)

module.exports = router