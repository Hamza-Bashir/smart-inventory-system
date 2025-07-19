const router = require("express").Router()
const business = require("../../services/business/index")
const validate = require("../../middlewares/validate")
const {addBusinessSchema} = require("../../middlewares/validation/businessValidation")

router.post("/add-business", validate(addBusinessSchema),business.addBusiness)
router.get("/all-business", business.getAllBusiness)
router.get("/search-business", business.searchBusiness)
router.patch("/update-business/:businessId", business.editBusiness)
router.delete("/delete-business/:businessId", business.deleteBusiness)

module.exports = router