const router = require("express").Router();
const adminController = require("../controllers/adminController");
const isAdmin = require("../middlewares/isAdmin");
const auth = require("../middlewares/tokenVerify");

router.get("/allUsers", auth, isAdmin, adminController.getAllUsers);
router.get("/getUser", auth, isAdmin, adminController.getOneUser);

module.exports = router;
