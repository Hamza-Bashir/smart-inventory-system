const router = require("express").Router()
const product = require("../../services/product/index")

router.post("/add-product", product.addProduct)

module.exports = router