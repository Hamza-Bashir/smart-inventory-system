const router = require("express").Router()
const business = require("../../services/business/index")

router.post("/add-business",business.addBusiness)

module.exports = router