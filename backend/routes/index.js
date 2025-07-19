const router = require("express").Router()

router.use(require("../controllers/user/index"))
router.use(require("../controllers/business/index"))
router.use(require("../controllers/category/index"))
router.use(require("../controllers/product/index"))
router.use(require("../controllers/sale/index"))

module.exports = router