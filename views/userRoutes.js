const router = require("express").Router();
const userController = require("../controllers/userController");
const auth = require("../middlewares/tokenVerify");

router.get("/getProfile", auth, userController.getMyUser);

module.exports = router;
