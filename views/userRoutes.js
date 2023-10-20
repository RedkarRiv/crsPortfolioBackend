const router = require("express").Router();
const userController = require("../controllers/userController");
const auth = require("../middlewares/tokenVerify");

router.get("/getProfile", auth, userController.getMyProfile);
router.put("/updateProfile", auth, userController.updateProfile);
router.put("/inactivateProfile", auth, userController.inactivateProfile);

module.exports = router;
