const router = require("express").Router();
const cors = require("cors");
const authRoutes = require("./views/authRoutes");
const adminRoutes = require("./views/adminRoutes");

router.use(cors());

router.use("/auth", authRoutes);
router.use("/admin", adminRoutes);

module.exports = router;
