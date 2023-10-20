const router = require("express").Router();
const adminController = require("../controllers/adminController");
const isAdmin = require("../middleware/isAdmin");
const auth = require("../middleware/tokenVerify");

router.get("/allUsers", auth, isAdmin, adminController.getAllUsers);

module.exports = router;
