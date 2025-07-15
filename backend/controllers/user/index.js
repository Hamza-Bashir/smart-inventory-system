const router = require("express").Router()
const auth = require("../../services/user/index")
const validate = require("../../middlewares/validate")
const {registerSchema, loginSchema} = require("../../middlewares/validation/userValidation")

router.post("/register-user", validate(registerSchema), auth.registerUser)
router.post("/login-user", validate(loginSchema), auth.loginUser)

module.exports = router