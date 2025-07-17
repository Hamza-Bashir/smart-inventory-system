const router = require("express").Router()
const business = require("../../services/business/index")

router.post("/add-business",business.addBusiness)
router.get("/all-business", business.getAllBusiness)
router.get("/search-business", business.searchBusiness)
router.patch("/update-business/:businessId", business.editBusiness)
router.delete("/delete-business/:businessId", business.deleteBusiness)

module.exports = router