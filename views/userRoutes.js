const router = require("express").Router();
const userController = require("../controllers/userController");
const auth = require("../middlewares/tokenVerify");

router.get("/getProfile", auth, userController.getMyUser);
router.put("/updateUser", auth, userController.updateUser);

module.exports = router;
