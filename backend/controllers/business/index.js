const router = require("express").Router()
const business = require("../../services/business/index")

router.post("/add-business",business.addBusiness)
router.get("/all-business", business.getAllBusiness)
router.get("/search-business", business.searchBusiness)

module.exports = router