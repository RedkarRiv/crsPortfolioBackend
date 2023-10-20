const router = require("express").Router();
const adminController = require("../controllers/adminController");
const isAdmin = require("../middlewares/isAdmin");
const auth = require("../middlewares/tokenVerify");

router.get("/allUsers", auth, isAdmin, adminController.getAllUsers);
router.get("/getUser", auth, isAdmin, adminController.getOneUser);
router.put("/activateUser", auth, isAdmin, adminController.activateUser);
router.put("/inactivateUser", auth, isAdmin, adminController.inactivateUser);
router.put("/updateUser", auth, isAdmin, adminController.updateUser);

module.exports = router;
