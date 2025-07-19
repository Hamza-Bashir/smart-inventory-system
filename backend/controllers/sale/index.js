const router = require("express").Router()
const sale = require("../../services/sale/index")

router.post("/add-sale", sale.addSale)
router.get("/all-sale/:productId", sale.getAllSale)

module.exports = router
